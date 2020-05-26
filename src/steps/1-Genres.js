import React from 'react';

import Nav from '../shared/Nav';
import Genre from '../shared/Genre';
import Back from "../shared/Back";
import Button from "../shared/Button";
import Subgenres from "./2-Subgenres";

class Genres extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedGenre: this.props.list.find(item => item.isSelected)
        }

        this.handleNext = this.handleNext.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    static idStep () {
        return 'Genre';
    }

    handleNext() {
      if(!this.state.selectedGenre) return;

      const {selectedGenre} = this.state;

      this.props.handleNext({
          genre: selectedGenre,
          subgenres: selectedGenre.subgenres,
          currentStep: Subgenres.idStep(),
      });
    }

    handleSelect (selectedGenre) {
        this.setState({
            selectedGenre
        })
    }

    render() {
        const { list } = this.props;
        return (
            <div>
                <Nav/>
                <section className="flex flex-wrap">
                    {list.map((genre, idx) => <Genre isSelected={genre.id === this.state?.selectedGenre?.id} key={idx} item={genre} onClick={(selectedGenre) => this.handleSelect(selectedGenre)} />)}
                </section>
                <section className="flex justify-end space-between space-x-3 mt-8 px-2">
                    <Back onClick={() => null} />
                    <Button isActive={true} onClick={this.handleNext}>
                        <span>Next</span>
                    </Button>
                </section>
            </div>
        );
    }
}

export default Genres