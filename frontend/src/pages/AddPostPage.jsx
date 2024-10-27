import { BsPeopleFill } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { tags } from "../utils/tags";
import axios from "axios";

import React from "react";
import SmallMap from "../components/SmallMap";
import { AppContext } from "../context/AppContextProvider";

export default function AddPostPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [previewSrc, setPreviewSrc] = useState(
    "/images/default-event-image.jpg"
  );
  const [selectedFile, setSelectedFile] = useState(previewSrc);
  const { API_BASE_URL } = useContext(AppContext);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();

  //this is for SmallMap component to show address
  const [address, setAddress] = useState(null);
  const [location, setLocation] = useState(null);
  const [validAddress, setValidAddress] = useState(false);

  //get user input & post to server
  const onSubmit = handleSubmit((data) => {
    const startTime = new Date(data.startTime);
    const endTime = new Date(data.endTime);
    const currentDateTime = new Date();

    if (startTime < currentDateTime) {
      setMessage("The start time cannot be earlier than the current time.");
      return;
    } else if (endTime < startTime) {
      setMessage("The end time cannot be earlier than the start time.");
      return;
    }

    data.address = {
      detailed_address: address,
      location: {
        coordinates: location,
      },
    };
    data.imageUrl = imageUrl;

    axios
      .post(`${API_BASE_URL}/api/events`, data, { withCredentials: true })
      .then((res) => {
        setMessage(
          "Activity created successfully! Please wait while we redirect you to the event page."
        );
        setTimeout(() => {
          navigate(`/event/${res.data._id}`);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    setSelectedFile(file);
    setPreviewSrc(URL.createObjectURL(file));
    const formData = new FormData();

    // Append the file to the FormData object
    formData.append("image", file);
    axios
      .post(`${API_BASE_URL}/api/image/upload`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        setImageUrl(res.data.imageUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

const [selectedTags, setSelectedTags] = useState([]);
const toggleTag = (tag) => {
  if (selectedTags.includes(tag)) {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  } else {
    if (selectedTags.length < 5) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      alert("You can select up to 5 tags only.");
    }
  }
};

  return (
    <div className="flex flex-col">
      <div className="relative flex justify-center h-60 gradient-bg">
        <div className="absolute translate-y-10 z-10">
          <img
            src="images/post-events.jpg"
            className="h-60 w-60 rounded-full object-cover "
            alt="post-events"
          />
        </div>
      </div>

      <div className="max-w-[850px] mx-auto mt-10 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          onChange={() => setMessage(null)}
          className="px-6  flex flex-col gap-10 max-sm:gap-5"
        >
          <fieldset className="border rounded-md p-5 max-sm:p-2 mt-5 border-sky-300">
            <legend className="px-1 font-bold  text-xl lg:text-2xl">Activity Title</legend>
            <input
              type="text"
              required
              {...register("title")}
              className="block w-full py-2 outline-none font-cabin lg:text-xl"
            />
          </fieldset>

          <div className="flex max-sm:flex-col justify-between max-sm:gap-5">
            <div>
              <p className="text-xl font-bold">Start Time</p>
              <input
                required
                {...register("startTime")}
                type="datetime-local"
                min={new Date().toISOString().substring(0, 16)}
                className="bg-indigo-100 rounded-lg px-5 max-sm:w-full h-10 font-cabin"
              />
            </div>

            <div>
              <p className="text-xl font-bold">End Time</p>
              <input
                type="datetime-local"
                required
                min={new Date().toISOString().substring(0, 16)}
                {...register("endTime")}
                className="bg-sky-100 rounded-lg px-5 max-sm:w-full h-10 font-cabin"
              />
            </div>

            <div className="relative">
              <p className="text-xl font-bold">People</p>
              <input
                type="number"
                {...register("vacancy")}
                className="bg-emerald-100 rounded-lg px-5 max-sm:w-full h-10 w-28 font-cabin"
                max={500}
                min={1}
              />
              <BsPeopleFill className="absolute  right-5 top-10" />
            </div>
          </div>
          <fieldset className="border rounded-md p-5 max-sm:p-2 border-sky-300 ">
            <legend className="text-xl lg:text-2xl font-bold">Select Tags:</legend>

            {tags.map((tag, index) => (
              <label key={tag} className="flex items-center space-x-2 p-2  font-cabin">
                <input
                  {...register("tags")}
                  type="checkbox"
                  value={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={() => toggleTag(tag)}
                  className="hover:bg-sky-200"
                />
                <span>{tag}</span>
              </label>
            ))}
            {/* </select> */}
          </fieldset>
          <fieldset className="border rounded-md p-5 max-sm:p-2 border-sky-300">
            <legend className="px-1 text-xl lg:text-2xl font-bold">Location</legend>
            <p>Please drop a pin on the map below to confirm address</p>
            <input disabled
              required
              {...register("address")}
              type="text"
              className="block w-full py-2 outline-none font-cabin"
              value={address || ""}
              onChange={handleAddressChange}
            />
          </fieldset>

          <div>
            <SmallMap
              address={address}
              setAddress={setAddress}
              setLocation={setLocation}
            />
          </div>

          <fieldset className="border rounded-md p-5 max-sm:p-2 border-sky-300">
            <legend className="px-2 font-bold text-xl lg:text-2xl">Activity Introduction</legend>
            <textarea
              required
              {...register("description")}
              className="w-full outline-none font-cabin lg:text-xl"
            />
          </fieldset>

          <fieldset className="border rounded-md p-2 border-sky-300">
            <legend className="px-1 text-xl lg:text-lg font-bold">Activity Image</legend>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file:mr-4 file:rounded-full file:border-0 file:bg-violet-50
   file:px-4 file:py-2 file:text-sm file:font-semibold file:text-
   violet-700 mb-2"
            />

            {previewSrc && <img src={previewSrc} alt="Preview" />}
          </fieldset>
          <p className="text-red-500 w-full mt-4"
          >{message}</p>
          <button className="search-btn">POST</button>
        </form>
      </div>
    </div>
  );
}
