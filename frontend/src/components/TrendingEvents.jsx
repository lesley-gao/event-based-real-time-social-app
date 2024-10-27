// This component is a preview for the event, which includes event images.
// It will be used on the homepage
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";

export default function TrendingEvents({ events }) {
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL ?? "";
  const controls = useAnimationControls();
  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: 13,
        repeat: Infinity,
      },
    });
  }, [controls]);

  const trendingEvents = events.slice(0, 7);
  const duplicatedEvents = [...trendingEvents, ...trendingEvents];

  return (
    <div>
      <h1 className=" text-[45px] font-bold mb-5 text-white max-lg:text-3xl">
        Trending Activities
      </h1>

      <div className="flex overflow-hidden ">
        <motion.div className="flex " animate={controls}>
          {/* !!! Show images of maximum 7 events here */}
          {duplicatedEvents.map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 p-2 min-w-20 duration-300 hover:-skew-y-3 "
              style={{ width: `${100 / trendingEvents.length}%` }}
            >
              <Link to={`/event/${event._id}`}>
                <img
                  src={
                    event.imageUrl
                      ? `${IMAGE_BASE_URL}/image/${event.imageUrl}`
                      : "../images/default-event-image.jpg"
                  }
                  className="object-cover  aspect-[3/2] rounded-2xl shadow-2xl shadow-gray-300"
                  alt={event.title}
                />
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
