import React, { useState, useEffect, useContext } from "react";
import SingleEvent from "../components/SingleEvent";
import SingleEventLocation from "../components/SingleEventLocation";
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";
import useGet from "../utils/useGet";

// const event_address={address:{detailed_address:"addf",location:{lat: 40.7128, lng: -74.0060}}};

export default function SingleEventPage() {
  const { eventId } = useParams();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

  const { data: event, isLoading ,error} = useGet(`${API_BASE_URL}/api/events/${eventId}`);

  return !isLoading ? error? <Navigate to="/"/> :(
    <div>
      <div>
        <SingleEvent event={event} />
      </div>

      <div className="mt-10 max-lg:mt-5 px-12 max-sm:px-6">
        <h1 className="section-name mb-2">Address: </h1>
        <p className="text-xl mb-5 font-cabin max-sm:text-base"> {event.address.detailed_address}</p>  
        <div>
          <SingleEventLocation event={event} />
        </div>
      </div>
    </div>
  ) : (
    <div>No activity found.</div>
  );
}
