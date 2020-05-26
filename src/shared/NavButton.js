import React from 'react';

const NavButton = ({ step = '...', name, onClick, isActive }) => (
    <div className="inline relative flex flex-col items-center justify-center sm:mx-1 md:mx-4 h-12 w-12">
        <button onClick={onClick} className={`text-lg rounded-full h-12 w-12 flex items-center justify-center ${isActive ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-500'}`}>{step || '...'}</button>
        <span className={`absolute whitespace-no-wrap bottom-32 text-sm text-gray-600 ${isActive ? 'font-bold' : ''}`}>{name}</span>
    </div>
);

export default NavButton;