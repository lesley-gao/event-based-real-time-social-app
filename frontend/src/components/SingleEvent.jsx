// This component is a preview for a single event, which includes all information except the location of the event .
// It will be used on the SingleEventPage

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AppContext } from "../context/AppContextProvider";
import moment from "moment";
import useGet from "../utils/useGet";

export default function SingleEvent({ event }) {
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL ?? "";
  const { API_BASE_URL, user } = useContext(AppContext);
  const [likeCounts, setLikeCounts] = useState(0);
  // Determine if the user liked the event based on fetched likes
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const [likeUsers, setLikeUsers] = useState([]);
  const [attendee, setAttendee] = useState([]);
  const [userFiltered, setUserFiltered] = useState([]);

  // Using `useGet` for fetching likes
  const { data: likes } = useGet(
    `${API_BASE_URL}/api/likes/event/${event._id}`
  );

  const { data: attendeeFromUseGet } = useGet(
    `${API_BASE_URL}/api/attends/event/${event._id}`
  );

  const [vacancies, setVacancies] = useState(
    event.vacancy - attendeeFromUseGet.length
  );

  useEffect(() => {
    if (likes) {
      setLiked(user && likes.includes(user._id));
      setLikeCounts(likes.length);
      const fetchLikeEventUsers = async () => {
        try {
          const usersLiked = await Promise.all(
            likes.map(async (userId) => {
              const userResponse = await axios.get(
                `${API_BASE_URL}/api/users/${userId}`,
                { withCredentials: true }
              );
              return userResponse.data;
            })
          );
          const filteredLikes = usersLiked
            .filter((u) => !attendee.includes(u._id))
            .filter((u) => u._id !== user._id);
          setLikeUsers(usersLiked);
          setUserFiltered(filteredLikes);
        } catch (error) {
          console.error("Error fetching Like event data:", error);
        }
      };
      fetchLikeEventUsers();
    }
  }, [likes, user, attendee]);

  useEffect(() => {
    if (attendeeFromUseGet) {
      setAttendee(attendeeFromUseGet);
      setVacancies(event.vacancy - attendeeFromUseGet.length);
    }
  }, [attendeeFromUseGet]);

  const handleLike = async () => {
    if (!user) {
      alert("Please log in to perform this action.");
      navigate("/login");
      return;
    }

    const method = liked ? "delete" : "post";
    const url = `${API_BASE_URL}/api/likes`;

    try {
      await axios({
        method: method,
        url: url,
        withCredentials: true,
        data: {
          eventId: event._id,
          userId: user._id,
        },
      });

      if (liked) {
        const newUsers = likeUsers.filter((u) => u._id !== user._id);
        setLikeUsers(newUsers);
      } else {
        likeUsers.push(user);
        setLikeUsers(likeUsers);
      }
      setLiked(!liked);
      // Adjust the like count manually
      setLikeCounts((prev) => (liked ? prev - 1 : prev + 1));
    } catch (error) {
      console.error("Failed to update like:", error);
    }
  };

  const handleConfirmAttendance = async () => {
    try {
      const selectedUserId = document.getElementById("likedUser").value;
      if (attendee.includes(selectedUserId) || !selectedUserId) {
        return;
      }

      await axios({
        method: "post",
        url: `${API_BASE_URL}/api/attends`,
        withCredentials: true,
        data: {
          eventId: event._id,
          userId: selectedUserId,
        },
      });
      setAttendee([...attendee, selectedUserId]);
      setVacancies((prev) => prev - 1);
    } catch (error) {
      console.error("Failed to create an attend:", error);
    }
  };

  const handleCancelEvent = async () => {
    const cancelConfirmed = confirm(
      "Are your sure to cancel this fantastic event?"
    );
    if (cancelConfirmed) {
      try {
        await axios({
          method: "delete",
          url: `${API_BASE_URL}/api/events/${event._id}`,
          withCredentials: true,
        });
        confirm("Event cancelled successfully!");
        navigate("/");
      } catch (error) {
        console.error("Failed to Delete event:", error);
      }
    } else {
      return;
    }
  };

  return (
    <div className="flex flex-col px-12 max-sm:px-5">
      <div className="flex flex-row max-lg:flex-col mt-10 max-sm:mt-0">
        <div className="my-auto">
          <img
            src={
              event.imageUrl
                ? `${IMAGE_BASE_URL}/image/${event.imageUrl}`
                : "../images/default-event-image.jpg"
            }
            className="w-[600px] object-cover aspect-video lg:aspect-square xl:aspect-video sm:rounded-[20px] max-sm:h-52 rounded-b-[30px] shadow-md shadow-gray-300"
            alt={event.title}
          />
        </div>

        <div className="mx-20 max-lg:mx-3">
          <div className="flex-center">
            <h1 className="section-name">{event.title}</h1>
          </div>

          {/* if there are users interested, show the users' avatars */}
          <div>
            {likeUsers.length > 0 ? (
              <>
                <h2 className="text-lg font-bold mb-2">People interested:</h2>
                <div className="flex items-center overflow-hidden">
                  {likeUsers.map((user, index) => (
                    <img
                      key={index}
                      className="w-10 h-10 -mr-4 rounded-full border-2 border-white shadow-md"
                      src={user.avatarPath}
                      alt="avatar"
                    />
                  ))}
                </div>
              </>
            ) : null}
          </div>

          <div className="flex flex-row my-8 justify-between items-center max-xl:gap-3 max-xl:grid max-xl:grid-cols-2 ">
            <div className=" text-center text-lg font-bold">
              Start Time
              <div className=" bg-indigo-200 event-info-div ">
                {moment(event.startTime).format("MMM DD")}
                <br />
                {moment(event.startTime).format("hh:mm a")}
              </div>
            </div>

            <div className=" text-center text-lg font-bold  ">
              End Time
              <div className=" bg-indigo-200 event-info-div">
                {moment(event.endTime).format("MMM DD")}
                <br />
                {moment(event.endTime).format("hh:mm a")}
              </div>
            </div>

            <div className=" text-center text-lg font-bold  ">
              People
              <div className=" bg-sky-100 event-info-div">
                <p>{event.vacancy}</p>
              </div>
            </div>

            <div className="text-center text-lg font-bold">
              Vacancies
              <div className="bg-sky-100 event-info-div">
                <p>{vacancies <= 0 ? " None" : vacancies}</p>
              </div>
            </div>

            <div className=" text-center text-lg font-bold max-sm:text-base ">
              Interested
              <div className="event-info-div font-cabin bg-pink-100 hover:bg-pink-200 active:bg-pink-300 cursor-pointer">
                <button onClick={handleLike}>
                  {liked ? (
                    <AiFillHeart className="text-2xl" />
                  ) : (
                    <AiOutlineHeart className="text-2xl" />
                  )}
                  {likeCounts}
                </button>
              </div>
            </div>
          </div>

          <div className=" text-center text-lg font-bold flex gap-2">
            {user && user._id === event.userId && (
              <>
                {userFiltered != 0 && (
                  <select
                    name="likedUser"
                    id="likedUser"
                    className="p-2 bg-orange-100 rounded-md "
                  >
                    {userFiltered.map((userLiked, index) => (
                      <option key={index} value={userLiked._id}>
                        {userLiked.username}
                      </option>
                    ))}
                  </select>
                )}

                {userFiltered.length != 0 ? (
                  <button
                    className="event-info-div bg-green-100 h-14 w-2/3 hover:bg-green-200 active:bg-green-300 cursor-pointer"
                    onClick={handleConfirmAttendance}
                  >
                    One more joined!
                  </button>
                ) : (
                  vacancies > 0 && (
                    <span className="event-info-div bg-green-100 h-14 w-2/3 font-bold">
                      Waiting for people interested
                    </span>
                  )
                )}

                <button
                  className="event-info-div  h-14 w-1/3 font-mudium bg-pink-100  hover:bg-pink-200 active:bg-pink-300 cursor-pointer"
                  onClick={handleCancelEvent}
                >
                  Cancel this activity
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="relative mt-10 max-sm:mt-5">
        <img
          src={
            event.imageUrl
              ? `${IMAGE_BASE_URL}/image/${event.imageUrl}`
              : "../images/default-event-image.jpg"
          }
          className="opacity-40 object-cover w-full h-[300px]"
        />
        <div className="absolute inset-0 flex flex-col justify-center p-12 max-sm:p-6 overflow-hidden">
          <h1 className="section-name mt-0">Activity Description</h1>
          <p className="text-xl font-cabin max-sm:text-base">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
}
