import React from 'react';
import last from 'lodash/last';
import initial from 'lodash/initial';
import Nav from '../shared/Nav';
import Input from '../shared/Input';
import Select from '../shared/Select';
import Button from '../shared/Button';
import Back from '../shared/Back';
import TextArea from '../shared/TextArea';
import Finish from './5-Finish.js';

class Information extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            information: {
                author: '',
                bookTitle: '',
                isbn: '',
                publisher: '',
                datePublished: '',
                numberOfPages: '',
                format: '',
                edition: '',
                editionLanguage: '',
                description: ''
            }
        }

        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    static idStep () {
        return 'Information';
    }

    validate () {
        const { description, ...rest } = this.state.information;

        if(!Object.keys(rest).every(key => this.state.information[key])) return false;

        if(this.props.subgenre.isDescriptionRequired && !description) return false;

        return true;
    }

    handleNext() {
        if(!this.validate()) return;

        this.props.handleNext({
            information: this.state.information,
            currentStep: Finish.idStep(),
        });

        const payloadForRequest = {
            ...this.state.information,
            idGenre: this.props.genre.id,
            idSubGenre: this.props.subgenre.id
        }

        console.table(payloadForRequest);
    }

    handleBack() {
        this.props.handleBack({
            currentStep: last(initial(this.props.steps)),
            steps: this.props.steps.filter(step => step !== Information.idStep())
        });
    }

    handleOnChange(event) {
        this.setState({ information: {...this.state.information, [event.name]: event.value}});
    }

    render() {
        return (
            <div>
                <Nav/>
                <section className="flex flex-col px-2">
                    <Input type="text" onChange={this.handleOnChange} name="author" value={this.state.information.author} label="Author"/>
                    <Input type="text" onChange={this.handleOnChange} name="bookTitle" value={this.state.information.bookTitle} label="Book Title"/>
                    <Input type="text" onChange={this.handleOnChange} name="isbn" value={this.state.information.isbn} label="ISBN"/>
                    <Select onChange={this.handleOnChange} name="publisher" value={this.state.information.publisher} label="Publisher">
                        <option value="Berkley">Berkley</option>
                        <option value="Avery">Avery</option>
                        <option value="Penguin Classics">Penguin Classics</option>
                    </Select>
                    <div className="w-full md:w-1/3">
                        <Input type="date" onChange={this.handleOnChange} name="datePublished" value={this.state.information.datePublished} label="Date published"
                               placeholder="DD/MM/YYYY"/>
                    </div>
                    <div className="w-full md:w-1/4">
                        <Input type="number" onChange={this.handleOnChange} defaultValue={1} min={1} name="numberOfPages" value={this.state.information.numberOfPages} label="Number of pages"
                               placeholder="Number of pages"/>
                    </div>
                    <div className="w-full md:w-1/3">
                        <Select onChange={this.handleOnChange} name="format" value={this.state.information.format} label="Format">
                            <option value="Kindle">Kindle</option>
                            <option value="Hardcover">Hardcover</option>
                            <option value="Papeperback">Papeperback</option>
                        </Select>
                    </div>
                    <div className="flex flex-column md:flex-row sm:flex-col">
                        <div className="w-full md:w-1/3 mr-8">
                            <Select onChange={this.handleOnChange} name="edition" value={this.state.information.edition} label="Edition">
                                <option value="Kindle">Revised</option>
                                <option value="Library edition">Library edition</option>
                                <option value="Book club">Book club</option>
                            </Select>
                        </div>
                        <div className="w-full md:w-1/3">
                            <Select onChange={this.handleOnChange} name="editionLanguage" value={this.state.information.editionLanguage} label="Edition language">
                                <option value="En">English</option>
                                <option value="Sr">Serbian</option>
                                <option value="Cr">Croatian</option>
                            </Select>
                        </div>
                    </div>
                    <TextArea onChange={this.handleOnChange} name="description" value={this.state.information.description} label="Description"/>
                </section>
                <section className="flex justify-end space-between space-x-4 px-2">
                    <Back onClick={this.handleBack}/>
                    <Button isActive={true} onClick={this.handleNext}>
                        <span>Complete flow</span>
                    </Button>
                </section>
            </div>
        );
    }
}

export default Information;