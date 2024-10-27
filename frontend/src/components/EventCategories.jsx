// This component will be used on the MapPage to display event categories.

import React from "react";

export default function EventCategories({ categories, onCategorySelect, currentCategory }) {
  return (
    <div className="flex gap-2 overflow-x-auto cursor-pointer no-scrollbar py-2">
      <div className="flex space-x-2 ">
        {/* !!! Show event categories, will need to pass the category data to iterate later */}
        {categories.map((category) => (
          <div
            key={category}
            className={"text-lg font-medium text-nowrap leading-6 rounded-2xl shadow-lg bg-indigo-100 border border-white bg-opacity-90 active:bg-yellow-200 max-sm:text-xs " + (category==currentCategory?"bg-yellow-200":"")}
            onClick={() => onCategorySelect(category)}
          >
            <p className="justify-center p-3">{category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
