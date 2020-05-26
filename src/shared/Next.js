import React from "react";
import Button from './Button';

const Next = (props) => {
    return (
        <Button {...props} isActive={true}>
            <span>Next</span>
        </Button>
    );
}

export default Next;
