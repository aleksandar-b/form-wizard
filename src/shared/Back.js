import React from 'react';
import { ReactComponent as BackIcon } from '../svg/back.svg';
import Button from './Button';

const Back = (props) => {
    return (
        <Button {...props}>
            <div className="relative overflow-hidden">
                <div className="hidden sm:hidden md:block">
                    <BackIcon className="absolute float-left pb-0 left-0" />
                </div>
                <span>Back</span>
            </div>
        </Button>
    );
}

export default Back;
