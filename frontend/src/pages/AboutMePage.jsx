import React from "react";
import MyEvents from "../components/MyEvents";
import { CgMediaLive } from "react-icons/cg";
import { AppContext } from "../context/AppContextProvider";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { FiLogOut } from "react-icons/fi";
import { getDeviceToken } from "../firebase/firebase";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export default function AboutMePage() {
  const { user, setUser, userLocation, locationSuccessful } =
    useContext(AppContext);
  const [myEvents, setMyEvents] = useState([]);
  const [likeEvents, setLikeEvents] = useState([]);
  const [attendedEvents, setAttendedEvents] = useState([]);
  const [userLive, setUserLive] = useState(false);

  console.log("user", user);

  function handleLogout() {
    axios
      .delete(`${API_BASE_URL}/api/auth/logout`, {}, { withCredentials: true })
      .then((res) => {
        setUser(null);
      });
  }

  async function handleLive() {
    if (!locationSuccessful) {
      alert("Please enable location services to go live.");
      return;
    }
    console.log("User live:", userLive);
    const token = await getDeviceToken();
    if (!userLive) {
      const response = await axios.post(
        `${API_BASE_URL}/api/device`,
        {
          token,
          location: { coordinates: [userLocation.lng, userLocation.lat] },
        },
        { withCredentials: true }
      );
      if (response.status === 201) {
        setUserLive(true);
      } else {
        console.error("Failed to register device.");
      }
    } else {
      const response = await axios.delete(`${API_BASE_URL}/api/device`, {
        data: { token },
        withCredentials: true,
      });
      if (response.status === 200) {
        setUserLive(false);
      } else {
        console.error("Failed to unregister device.");
      }
    }
  }

  useEffect(() => {
    getDeviceToken()
      .then((token) => {
        axios
          .post(
            `${API_BASE_URL}/api/device/query`,
            { token },
            { withCredentials: true }
          )
          .then((response) => {
            setUserLive(response.status === 200);
            console.log("Device query response:", response.status);
          })
          .catch((error) => {
            console.error("Failed to query device:", error);
          });
      })
      .catch((error) => {
        console.error("Failed to get device token:", error);
      });
  }, []);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const myEventsResponse = await axios.get(
          `${API_BASE_URL}/api/events/me`,
          { withCredentials: true }
        );
        setMyEvents(myEventsResponse.data);

        const attendedEventsResponse = await axios.get(
          `${API_BASE_URL}/api/attends/user`,
          { withCredentials: true }
        );
        const attendedEventsIds = attendedEventsResponse.data;
        console.log(attendedEventsResponse.data);
        const attendedEventResults = [];
        for (const eventId of attendedEventsIds) {
          const eventResponse = await axios.get(
            `${API_BASE_URL}/api/events/${eventId}`,
            { withCredentials: true }
          );
          attendedEventResults.push(eventResponse.data);
          console.log(eventResponse.data);
        }
        setAttendedEvents(attendedEventResults);

        const likeEventsIdResponse = await axios.get(
          `${API_BASE_URL}/api/likes/user`,
          { withCredentials: true }
        );
        // setLikeEventsId(likeEventsIdResponse.data);

        const likedEventIds = likeEventsIdResponse.data;
        // Initialize an array to store the event data
        const likeEventResults = [];

        // Loop through each event ID sequentially
        for (const eventId of likedEventIds) {
          const eventResponse = await axios.get(
            `${API_BASE_URL}/api/events/${eventId}`,
            { withCredentials: true }
          );
          likeEventResults.push(eventResponse.data);
        }
        // After all requests are done, set the state
        setLikeEvents(likeEventResults);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchEventData();
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="relative ">
        <div className=" h-96 w-full object-cover rounded-b-[50px] max-sm:h-56 gradient-bg"></div>

        <div
          onClick={handleLogout}
          className="absolute right-0 top-0 md:p-5 bg-white bg-opacity-40 shadow-lg text-white font-bold text-2xl rounded-bl-[50px] flex-col flex-center max-sm:text-lg max-sm:p-2  hover:text-sky-300 cursor-pointer"
        >
          <FiLogOut className="text-2xl" /> <span>Logout</span>
        </div>

        <div className="flex justify-center ">
          <div className="flex-col absolute top-[100px] max-sm:top-[70px] bg-white bg-opacity-50 rounded-3xl h-[300px] w-2/3 max-sm:h-[180px] flex justify-center items-center">
            <img
              src={user.avatarPath}
              className="rounded-full object-cover w-32 aspect-square max-sm:w-20"
            />
            <h1 className="text-2xl mt-3 font-medium">{user.displayName}</h1>
          </div>
        </div>

        {/* Live button */}
        <button
          className="absolute text-4xl top-[265px] left-1/2 translate-x-7 max-sm:top-[150px] "
          onClick={() => {
            console.log("Live button clicked");
            handleLive();
          }}
        >
          <CgMediaLive
            className={
              userLive ? "animate-scale text-yellow-200" : "text-gray-500"
            }
          />
        </button>
      </div>

      <div className="px-20 mt-14 max-sm:mt-7 max-sm:px-6">
        {/* My Interested Events secton*/}
        <h1 className=" section-name ">My Interested Activities</h1>
        <div className="flex gap-5 flex-wrap max-sm:flex-col max-lg:max-w-[500px]">
          {likeEvents.map((event, index) => (
            <MyEvents key={index} event={event} />
          ))}
        </div>

        {/* My Attended Events secton */}
        <h1 className=" section-name mt-20 max-sm:mt-10">
          My Attended Activities
        </h1>
        <div className="flex gap-5 flex-wrap max-sm:flex-col max-lg:max-w-[500px]">
          {attendedEvents.map((event, index) => (
            <MyEvents key={index} event={event} />
          ))}
        </div>

        {/* My Post Events secton */}
        <h1 className=" section-name mt-20 max-sm:mt-10">
          My Activity Listings
        </h1>
        <div className="flex gap-5 flex-wrap max-sm:flex-col mb-3 max-lg:max-w-[500px]">
          {myEvents.map((event, index) => (
            <MyEvents key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}
