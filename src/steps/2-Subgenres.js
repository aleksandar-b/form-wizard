import React from 'react';

import Nav from '../shared/Nav';
import Genre from '../shared/Genre';
import Back from "../shared/Back";
import Button from "../shared/Button";
import Genres from '../steps/1-Genres.js';
import SubgenreAdd from '../steps/3-SubgenreAdd';
import Information from '../steps/4-Information';

class Subgenres extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSubgenre: this.props.list.find(item => item.isSelected)
        }

        this.handleNext = this.handleNext.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    static idStep () {
        return 'Subgenre';
    }

    handleNext() {
        if(!this.state.selectedSubgenre) return false;

        this.props.handleNext({
            subgenre: this.state.selectedSubgenre,
            currentStep: this.state.selectedSubgenre.id === 'add_new' ? SubgenreAdd.idStep() : Information.idStep(),
            steps: this.state.selectedSubgenre.id === 'add_new' ? [...this.props.steps, SubgenreAdd.idStep(), Information.idStep()] : [...this.props.steps, Information.idStep()]
        });
    }

    handleBack() {
        this.props.handleBack({
            information: null,
            currentStep: Genres.idStep(),
        });
    }

    handleSelect (selectedSubgenre) {
        this.setState({selectedSubgenre});
    }

    render() {
        const {list} = this.props;
        return (
            <div>
                 <Nav/>
                <section className="flex flex-wrap">
                    {list.map((subGenre, idx) => <Genre isSelected={subGenre.id === this.state?.selectedSubgenre?.id} key={idx} item={subGenre} onClick={this.handleSelect} />)}
                    {<Genre isSelected={this.state?.selectedSubgenre?.id === 'add_new'}  item={{ name: 'Add new', id: 'add_new'}} onClick={this.handleSelect}/>}
                </section>
                <section className="flex justify-end space-between space-x-4 mt-8 px-2">
                    <Back onClick={this.handleBack} />
                    <Button isActive={true} onClick={this.handleNext}>
                        <span>Next</span>
                    </Button>
                </section>
            </div>
        );
    }
}

export default Subgenres