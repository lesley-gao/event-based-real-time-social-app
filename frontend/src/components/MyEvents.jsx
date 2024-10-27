// This component is a preview for the event, which includes event images & title.
// It will be used on the AboutMePage
import React from "react";
import { Link } from "react-router-dom";

export default function MyEvents({ event }) {
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL ?? "";
  return (
    <Link to={`/event/${event._id}`}>
      <div>
        {/* !!! Show images and titles of the events that the user is interested in*/}
        <div className="flex hover:scale-105 hover:saturate-200">
          <div className="relative ">
            <img
              src={
                event.imageUrl
                  ? `${IMAGE_BASE_URL}/image/${event.imageUrl}`
                  : "../images/default-event-image.jpg"
              }
              className="rounded-2xl object-cover aspect-[2.56] w-[300px] max-lg:w-full"
            />
            <div className="eventtitle-with-bg">
              <h1 className="text-lg text-center font-cabin  max-sm:text-sm w-full  overflow-hidden overflow-ellipsis">
                {event.title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
