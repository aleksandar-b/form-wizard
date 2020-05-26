import React from 'react';
import { ReactComponent as AttachFile } from '../svg/attachFile.svg';
import { ReactComponent as AlternateEmail } from '../svg/alternateEmail.svg';
import { ReactComponent as TextFormat } from '../svg/textFormat.svg';

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange (event) {
        this.props.onChange(event.target);
    }

    render() {
        return (
            <div className="flex flex-col mb-6">
                <label htmlFor="story" className="flex text-gray-700 font-medium mb-1 ml-1">Description:</label>
                <div className="flex flex-col border border-gray-500 rounded">
                    <textarea onChange={this.handleOnChange}
                              value={this.props.value}
                              name={this.props.name}
                              rows="1"
                              className="px-4 py-3 mb-1 text-decoration-none resize-none focus:outline-none"
                              placeholder="Type the description..."></textarea>
                    <div className="flex justify-start items-center space-between ml-3 pb-2 mt-1 w-14 space-x-1">
                        <button><TextFormat/></button>
                        <button><AttachFile/></button>
                        <button><AlternateEmail/></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TextArea;