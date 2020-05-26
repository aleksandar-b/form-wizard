import React from 'react';

const Container = (props) => {
    return <div className="container mx-auto p-6 my-6 mx-10 border-gray-500 items-center border rounded sm:4/6 lg:w-5/12">
        {props.children}
    </div>
};

export default Container;