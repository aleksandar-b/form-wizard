import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange (event) {
        let { value, name } = event.target;

        if (this.props.type === 'number') {
            value = event.target.value < 1 ? 1 : event.target.value;
        }

        this.props.onChange({ name, value});
    }

    render() {
        let {label, type, name, placeholder, value} = this.props;

        return (
            <div className="mb-6">
                <label className="block text-gray-600 font-medium mb-1 ml-1" htmlFor={name}>
                    {label}
                </label>
                <input required value={value} onChange={this.handleOnChange} onSelect={this.handleOnChange} name={name} className="appearance-none block w-full text-gray-700 border border-gray-500 rounded py-2 px-4"
                       type={type} placeholder={label || placeholder}/>
            </div>);
    }
}

export default Input;