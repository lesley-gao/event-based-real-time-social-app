import React from "react";

import EventInfoPreview from "./EventInfoPreview";

export default function Recommendations({ events }) {
  const filteredEvents = events;

  return (
    <div className="grid md:grid-cols-2">
      {filteredEvents.slice(0, 5).map((event, index) => (
        <EventInfoPreview key={index} event={event} />
      ))}
    </div>
  );
}
