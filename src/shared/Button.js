import React from 'react';

const Button = (props) => {
    const { children, isActive, ...rest } = props;
    return (
        <button {...rest} className={`w-40 h-10 border border-gray-400 disabled:bg-gray-200 disabled:text-gray-500 rounded-md p-2 ${isActive ? 'text-white bg-gray-700' : 'text-gray-600'}`}>
            {children}
        </button>
    );
}

export default Button;
