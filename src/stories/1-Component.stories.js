import React from 'react';
import Container from '../shared/Container';
import Genre from '../shared/Genre';
import Next from '../shared/Next';
import Back from '../shared/Back';
import Nav from '../shared/Nav';
import NavButton from '../shared/NavButton';
import Input from '../shared/Input';
import Select from '../shared/Select';
import TextArea from '../shared/TextArea';
import CheckBox from '../shared/CheckBox';
import StepsContext from '../steps/StepsContext';

import '../App.css';
import '../index.css';

export const GenreActiveTest = () => <Container><Genre item={{ name: 'Genre' }} isSelected={true} /></Container>;
export const GenreTest = () => <Container><Genre item={{ name: 'Genre' }} /></Container>
export const NextTest = () => <Container><Next/></Container>
export const BackTest = () => <Container><Back/></Container>
export const NavTest3 = () => <Container><StepsContext.Provider value={{ steps: ['Genre', 'Subgenre'], currentStep: 'Genre'}}><Nav onClick={() => ''}/></StepsContext.Provider></Container>
export const NavTest4 = () => <Container><StepsContext.Provider value={{ steps: ['Genre', 'Subgenre', 'Add new subgenre', 'Information'], currentStep: 'Genre'}}><Nav onClick={() => ''}/></StepsContext.Provider></Container>
export const NavButtonTest = () => <Container><NavButton/></Container>
export const InputTest = () => <Container><Input label="Author" name="Author" type="text" placeholder="Author"/></Container>
export const SelectTest = () => <Container><Select label="Publisher" name="Publisher" type="text" placeholder="Publisher" name="Author"><option value="amazon">Amazon</option></Select></Container>
export const TextAreaTest = () => <Container><TextArea name="Author"/></Container>
export const CheckBoxTest = () => <Container><CheckBox label="Description is required for this subgenre" name="Author"/></Container>

export default {
    title: 'Component',
    component: Genre,
};
