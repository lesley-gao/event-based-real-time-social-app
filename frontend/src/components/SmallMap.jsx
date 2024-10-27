//This small map is only for addpost page
import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const SmallMap = ({ address, setAddress, setLocation }) => {
  const initialZoom = 15;
  const [marker, setMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState({
    lat: -36.848461,
    lng: 174.763336,
  });
  const [searchResult, setSearchResult] = useState(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const [tempAddress, setTempAddress] = useState("");

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setMapCenter(userPosition);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  };

  const handleMapClick = (event) => {
    setMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const handleMarkerClick = () => {
    setMarker(null);
    setAddress("");
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (marker) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { location: { lat: marker.lat, lng: marker.lng } },
        (results, status) => {
          if (status === "OK") {
            if (results[0]) {
              setTempAddress(results[0].formatted_address);
            } else {
              setTempAddress("Address not found");
            }
          } else {
            setTempAddress("Geocoder failed due to: " + status);
          }
        }
      );
    } else {
      setTempAddress("");
    }
  }, [marker]);

  const handleConfirm = (e) => {
    e.preventDefault();
    setAddress(tempAddress);
    setLocation([marker.lng, marker.lat]);
    setTempAddress("");
  };

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <div>
      {tempAddress ? (
        <>
          <p>{tempAddress}</p>
          <button onClick={handleConfirm} className="submitBtn w-full mb-2">
            Confirm Address
          </button>
        </>
      ) : null}

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={searchResult ? searchResult : mapCenter}
        zoom={initialZoom}
        onClick={handleMapClick}
        options={{
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
        }}
      >
        {marker && (
          <Marker
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={handleMarkerClick}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default SmallMap;
