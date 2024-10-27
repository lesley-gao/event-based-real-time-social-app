// This component is a preview for the event, which consists of event image, time, title, address.
// It will be used on homepage & search pages
import React from "react";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";

export default function MapInfoWindow({ event }) {
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL ?? "";
  return (
    <Link
      to={`/event/${event._id}`}
      className="group grid grid-cols-[1fr_1.5fr] max-sm:grid-rows-1 grid-rows-2 gap-5 mt-4 tracking-tight leading-[100%] max-w-[600px]"
    >
      <img
        src={
          event.imageUrl
            ? `${IMAGE_BASE_URL}/image/${event.imageUrl}`
            : "../images/default-event-image.jpg"
        }
        alt={event.title}
        className="sm:row-span-2 row-start-1 col-start-1 w-full h-full object-cover rounded-xl group-hover:scale-105 duration-300 shadow-2xl shadow-gray-300"
      />

      <div className="row-start-1 col-start-2 flex flex-col my-auto gap-3 group-hover:scale-[101%] duration-300">
        <div className="text-sky-400">
          {new Date(event.startTime).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="font-bold">{event.title}</div>
      </div>

      <div className="row-start-2 col-start-2 max-sm:hidden flex  text-yellow-500">
        <MdLocationPin />
        <div> {event.address.detailed_address}</div>
      </div>
    </Link>
  );
}
