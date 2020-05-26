import React from 'react';

class CheckBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange (event) {
        this.props.onChange(event.target);
    }

    render() {
        let {label, name, placeholder, value} = this.props;

        return (
            <div className="flex my-1 ml-2">
                <label className="block text-gray-600 flex justify-center items-align">
                    <input required checked={value} onChange={this.handleOnChange} name={name} className="mr-4 transform scale-150 mt-1 bg-blue-500" type="checkbox" placeholder={placeholder} value={value} />
                    <span>
                         {label}
                     </span>
                </label>
            </div>
        );
    }
}

export default CheckBox;