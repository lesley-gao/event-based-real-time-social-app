//Homepage
import React, { useContext, useState, useEffect } from "react";
import TrendingEvents from "../components/TrendingEvents";
import hippo from "/images/hippo.svg";
import { AppContext } from "../context/AppContextProvider";
import Recommendations from "../components/RecommendationEvents";
import { defaultLocation } from "../utils/GetLocation.js";
import NearbyMap from "../components/NearbyMap.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export default function HomePage({ setLoadingDisplay }) {
  const { user, userLocation } = useContext(AppContext);

  const fetch_urls = [
    `${API_BASE_URL}/api/events`,
    `${API_BASE_URL}/api/events/nearby?lat=${defaultLocation.lat}&lng=${defaultLocation.lng}&distance=0.5`,
  ];

  if (userLocation && userLocation.lat && userLocation.lng) {
    fetch_urls[1] = `${API_BASE_URL}/api/events/nearby?lat=${userLocation.lat}&lng=${userLocation.lng}&distance=0.5`;
  }

  const promises = fetch_urls.map((url) =>
    fetch(url).then((res) => res.json())
  );

  if (user && user.tags) {
    const tags = user.tags;

    const req = fetch(`${API_BASE_URL}/api/events/tags`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tags }),
    }).then((res) => res.json());

    promises.push(req);
  } else {
    promises.push(
      fetch(`${API_BASE_URL}/api/events?page=1`).then((res) => res.json())
    );
  }

  const [loadingValues, setLoadingValues] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    return () =>
      Promise.all(promises)
        .then((values) => {
          setLoadingValues(values);
        })
        .then(() => {
          setIsLoading(false);
          setLoadingDisplay(false);
        });
  }, []);


  return isLoading ? null : (
    <div>
      <div className="flex flex-col w-full ">
        <div className="relative ">
          <div className=" h-80 w-full object-cover rounded-b-[50px] max-sm:h-60 gradient-bg"></div>
          <img
            src={hippo}
            className="absolute top-14 h-32 left-1/2 transform -translate-x-1/2 max-sm:h-20 max-sm:top-7"
          />

          <div className="absolute top-[200px] w-full overflow-hidden max-sm:top-[110px] pl-32 max-lg:pl-6 ">
            <TrendingEvents events={loadingValues[0]} />
          </div>
        </div>

        {/* Nearby Activities & Recommendation section */}
        <div className="flex flex-col px-24 mt-32 justify-around max-lg:px-6 max-lg:mt-12">
          <div>
            <div className="section-name">
              Nearby Activities
            </div>
            <div>
              <div className="mx-auto rounded-2xl shadow-2xl shadow-gray-300 max-w-[800px]">
                <NearbyMap events={loadingValues[1]} />
              </div>
            </div>
          </div>

          <div>
            <div className="section-name ">
              Recommendation
            </div>
            <Recommendations events={loadingValues[2]} />    
          </div>
        </div>

      </div>
    </div>
  );
}
