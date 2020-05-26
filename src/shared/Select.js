import React from 'react';

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange (event) {
        this.props.onChange(event.target);
    }

    render() {
        let {name, label, value, placeholder, children} = this.props;
        return (
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-1 ml-1" htmlFor="username">
                    {label}
                </label>
                <div className="relative text-gray-700">
                    <select
                        onChange={this.handleOnChange}
                        value={value}
                        required
                        name={name}
                        className="block appearance-none w-full border border-gray-500 bg-white py-2 px-4 pr-8 rounded disabled:text-gray-200">
                        <option disabled value="" hidden>{placeholder || label}</option>
                        {children}
                    </select>
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Select;