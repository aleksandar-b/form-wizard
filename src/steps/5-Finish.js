import React from 'react';
import { ReactComponent as CheckedIcon } from '../svg/checked.svg'
import Button from '../shared/Button'
import Genres from '../steps/1-Genres.js'

class Finish extends React.Component {
    constructor(props) {
        super(props);

        this.handleNext = this.handleNext.bind(this);
    }

    static idStep () {
        return 'Finish';
    }

    handleNext(selectedGenre) {
        this.props.handleNext({
            information: null,
            currentStep: Genres.idStep()
        });
    }

    render() {
        return (
            <div className="flex flex-col justify-center items-center">
                <div className="w-56 h-56 flex justify-center items-center mb-8">
                    <CheckedIcon/>
                </div>
                <div className="mb-10">
                    <span>Book added successfully</span>
                </div>
                <div className="mt-4">
                    <Button isActive={true} onClick={this.handleNext}
                            style={{'paddingLeft': '120px', 'paddingRight': '120px', 'width': 'auto'}}>
                        Add another book
                    </Button>
                </div>
            </div>
        );
    }
}

export default Finish;