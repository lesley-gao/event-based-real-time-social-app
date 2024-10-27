// This component is a preview for the event, which includes event images & title.
// It will be used on the MapPage
import React from "react";
import { Link } from "react-router-dom";

export default function EventsOnMappage({ events }) {
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL ?? "";

  return (
    <div>
      <div className="flex gap-3 mt-3 overflow-scroll rounded-2xl no-scrollbar">
        {events.slice(0, 6).map((event) => (
          <Link
            to={`/event/${event._id}`}
            key={event._id}
            className="relative flex-center w-[240px] max-sm:w-[180px] flex-shrink-0 drop-shadow-lg cursor-pointer transform transition-transform hover:scale-105 hover:saturate-200"
          >
            <img
              src={
                event.imageUrl
                  ? `${IMAGE_BASE_URL}/image/${event.imageUrl}`
                  : "../images/default-event-image.jpg"
              }
              alt={event.title}
              className="rounded-2xl object-cover aspect-[2.56] "
            />
            <div className="eventtitle-with-bg rounded-b-2xl hover:bg-opacity-90 duration-300">
              <h1 className="text-lg max-sm:text-sm font-cabin text-wrap text-center ">
                {event.title.slice(0,40)}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
