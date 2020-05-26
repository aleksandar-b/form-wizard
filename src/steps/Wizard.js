import React from 'react';
import Container from '../shared/Container';
import Genres from './1-Genres';
import Subgenres from './2-Subgenres';
import SubgenreAdd from './3-SubgenreAdd';
import Information from './4-Information';
import Finish from './5-Finish';

import StepsContext from './StepsContext';

export default class Wizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [Genres.idStep(), Subgenres.idStep()],
            currentStep: Genres.idStep(),
            information: null,
            genre: null,
            genres: props.genres,
            subgenres: [],
            subgenre: null,
        };

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleNext (context) {
        this.setState(context);
    }

    handleBack (context) {
        this.setState(context);
    }

    handleReset () {
        this.setState({
            steps: [Genres.idStep(), Subgenres.idStep()],
            currentStep: Genres.idStep(),
            genre: null,
            information: null,
            subgenres: [],
            subgenre: null
        });
    }

    render () {
        const { currentStep, steps } = this.state;
        return <StepsContext.Provider value={{ currentStep, steps }}>
            <Container>
            {
                currentStep === Genres.idStep() &&
                <Genres list={this.state.genres} handleNext={this.handleNext} {...this.state}/> ||
                currentStep === Subgenres.idStep() &&
                <Subgenres list={this.state.subgenres} handleNext={this.handleNext} handleBack={this.handleBack} {...this.state} /> ||
                currentStep === SubgenreAdd.idStep() &&
                <SubgenreAdd handleNext={this.handleNext} handleBack={this.handleBack} {...this.state}/> ||
                currentStep === Information.idStep() &&
                <Information handleNext={this.handleNext} handleBack={this.handleBack} {...this.state}/> ||
                currentStep === Finish.idStep() &&
                <Finish handleNext={this.handleReset} />
            }
            </Container>
        </StepsContext.Provider>
    }
}
