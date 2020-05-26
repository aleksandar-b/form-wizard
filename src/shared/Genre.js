import React from "react";

const Genre = (props) => {
    const { item, onClick, isSelected } = props;

    return (
        <div className="p-3 flex w-1/4">
            <button onClick={() => onClick(item)} className={`block w-full border border-gray-500 rounded-md py-4 ${isSelected ? 'text-white bg-gray-700' : 'text-gray-600'}`}>
                <span>{item.name || "n/a"}</span>
            </button>
        </div>
    );
}

export default Genre;
