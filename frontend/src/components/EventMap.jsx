/**
 *  Renders an interactive map displaying event markers and info windows based on user and event locations.
 * This component will be used on the MapPage
 */

import React, {useState} from 'react';
import {GoogleMap, useLoadScript, MarkerF, InfoWindowF} from '@react-google-maps/api';
import 'react-datepicker/dist/react-datepicker.css';
import EventInfoPreview from './EventInfoPreview';
import {defaultLocation} from "../utils/GetLocation.js";
import {AppContext} from "../context/AppContextProvider";
import {useContext} from "react";

const userIcon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
const upcomingIcon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
const ongoingIcon = "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png";

const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height: '100vh',
    position: 'relative'
};

const lngLatFromEvent = (event) => {
    if (event?.address?.location?.coordinates) {
        return {lng: event.address.location.coordinates[0], lat: event.address.location.coordinates[1]};
    }
    return null;
}


const MapComponent = ({events}) => {
    const {userLocation, locationSuccessful} = useContext(AppContext);

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const [showInfoWindow, setShowInfoWindow] = useState(false);
    const [clickedEvent, setClickedEvent] = useState(null);
    const mapCenter = locationSuccessful ? userLocation : defaultLocation;


    const closeInfoWindow = () => {
        setShowInfoWindow(false);
    };


    if (loadError) {
        return <div className=" mt-[200px] pl-20 text-[50px] bounce">Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div className=" mt-[200px] pl-20  text-[50px] bounce">Loading maps</div>;
    }

    return (
        <div>
            <div style={mapContainerStyle}>
                <GoogleMap className="relative h-full z-10"
                           mapContainerStyle={mapContainerStyle}
                           zoom={15}
                           center={mapCenter}
                           onClick={closeInfoWindow}
                           clickableIcons={false}
                           options={{streetViewControl: false, fullscreenControl: false,zoomControl: false}}
                >
                    {locationSuccessful ?
                        <MarkerF
                            position={userLocation}

                            icon={{
                                url: userIcon,
                                scaledSize: new window.google.maps.Size(40, 40)
                            }}
                        /> : <></>
                    }
                    {events && events.map((event, index) => (
                        <MarkerF
                            key={index}
                            position={lngLatFromEvent(event)}
                            onClick={(e) => {
                                setClickedEvent(event);
                                setShowInfoWindow(true)
                            }}
                           
                            icon={{
                                url: new Date(event.startTime) > new Date() ? upcomingIcon : ongoingIcon,
                                scaledSize: new window.google.maps.Size(40, 40), // Adjust the size as needed
                            }}
                        >
                        </MarkerF>
                    ))
                    }
                    {showInfoWindow && (
                        <InfoWindowF
                            position={lngLatFromEvent(clickedEvent)}
                            onCloseClick={closeInfoWindow}
                        >
                            <div>
                                <EventInfoPreview event={clickedEvent}></EventInfoPreview>

                            </div>
                        </InfoWindowF>
                    )}

                </GoogleMap>


            </div>
        </div>
    );
};

export default MapComponent;