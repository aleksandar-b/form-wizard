import React from 'react';
import Nav from '../shared/Nav';
import Input from '../shared/Input';
import CheckBox from '../shared/CheckBox';
import Back from "../shared/Back";
import random from "lodash/random";
import Button from "../shared/Button";
import Information from "../steps/4-Information.js";
import Subgenres from "../steps/2-Subgenres";

class SubgenreAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSubgenre: { id: random(1, 99), name: '', isDescriptionRequired: false},
        }

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    static idStep () {
        return 'Add new subgenre';
    }

    handleNext() {
        if(!this.state.selectedSubgenre?.name) return;

        this.props.handleNext({
            subgenre: this.state.selectedSubgenre,
            currentStep: Information.idStep()
        });
    }

    handleBack() {
        this.props.handleBack({
            currentStep: Subgenres.idStep(),
            steps: this.props.steps.slice(0, 2)
        });
    }

    handleInputChange (event) {
        this.setState({selectedSubgenre: { ...this.state.selectedSubgenre, name: event.value}});
    }

    handleCheckboxChange (event) {
        this.setState({selectedSubgenre: { ...this.state.selectedSubgenre, isDescriptionRequired: event.checked}});
    }

    render() {
        return (
            <div>
                <Nav/>
                <section className="flex flex-col">
                    <Input value={this.state.selectedSubgenre.name} onChange={this.handleInputChange} placeholder="Subgenre name"/>

                    <CheckBox
                              name="isDescriptionRequired"
                              onChange={this.handleCheckboxChange}
                              value={this.state.selectedSubgenre.isDescriptionRequired}
                              label="Description is required for this subgenre"/>
                </section>
                <section className="flex justify-end space-between space-x-4 mt-8 px-2">
                    <Back onClick={this.handleBack}>
                        <span>Back</span>
                    </Back>
                    <Button isActive={true} onClick={this.handleNext}>
                        <span>Next</span>
                    </Button>
                </section>
            </div>
        );
    }
}

export default SubgenreAdd;