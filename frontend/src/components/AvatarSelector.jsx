import React, { useState } from "react";
import * as avatars from "../assets/avatars";

const AvatarSelector = ({ selectedAvatar, handleAvatar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const avatarsArray = Object.values(avatars);

  return (
    <div className=" flex flex-col items-center mt-24 gap-2 text-xl max-sm:text-base ">
      <p>Please click and scroll down to choose your avatar</p>

      <div className="relative flex justify-center ">
        <div className="cursor-pointer " onClick={toggleDropdown}>
          <img
            src={selectedAvatar}
            alt="Selected Avatar"
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>
        {isOpen && (
          <div className="absolute top-full mt-2  bg-white shadow-lg rounded-md overflow-y-auto h-48 lg:w-[400px] lg:grid lg:grid-cols-6">
            {avatarsArray.map((avatar, index) => (
              <div
                key={index}
                className="cursor-pointer p-2"
                onClick={() => {
                  setIsOpen(false);
                  handleAvatar(avatar);
                }}
              >
                <img
                  src={avatar}
                  alt={`Avatar ${index + 1}`}
                  className="h-12 w-12 rounded-full object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AvatarSelector;
