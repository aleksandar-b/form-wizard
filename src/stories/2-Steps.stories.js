import React from 'react';
import Container from '../shared/Container';
import Finish from '../steps/5-Finish';
import Information from '../steps/4-Information';
import SubgenreAdd from '../steps/3-SubgenreAdd';
import Subgenres from '../steps/2-Subgenres';
import Genres from '../steps/1-Genres';

import '../App.css';
import '../index.css';

const data = {
    "genres": [
        {
            "id": 1,
            "name": "Genre 1",
            "subgenres": [
                {
                    "id": 10,
                    "name": "Subgenre 1",
                    "isDescriptionRequired": true
                }, {
                    "id": 11,
                    "name": "Subgenre 2",
                    "isDescriptionRequired": false
                }, {
                    "id": 12,
                    "name": "Subgenre 3",
                    "isDescriptionRequired": true
                }, {
                    "id": 13,
                    "name": "Subgenre 4",
                    "isDescriptionRequired": true
                }, {
                    "id": 14,
                    "name": "Subgenre 5",
                    "isDescriptionRequired": true
                }
            ]
        }, {
            "id": 2,
            "name": "Genre 2",
            "subgenres": [
                {
                    "id": 15,
                    "name": "Subgenre 1",
                    "isDescriptionRequired": true
                }, {
                    "id": 16,
                    "name": "Subgenre 2",
                    "isDescriptionRequired": false
                }, {
                    "id": 17,
                    "name": "Subgenre 3",
                    "isDescriptionRequired": true
                }
            ]
        }, {
            "id": 3,
            "name": "Genre 3",
            "subgenres": [
                {
                    "id": 18,
                    "name": "Subgenre 1",
                    "isDescriptionRequired": true
                }, {
                    "id": 19,
                    "name": "Subgenre 2",
                    "isDescriptionRequired": true
                }, {
                    "id": 20,
                    "name": "Subgenre 3",
                    "isDescriptionRequired": true
                }
            ]
        }, {
            "id": 4,
            "name": "Genre 4",
            "subgenres": [
                {
                    "id": 21,
                    "name": "Subgenre 1",
                    "isDescriptionRequired": false
                }, {
                    "id": 22,
                    "name": "Subgenre 2",
                    "isDescriptionRequired": false
                }, {
                    "id": 23,
                    "name": "Subgenre 3",
                    "isDescriptionRequired": false
                }
            ]
        }, {
            "id": 5,
            "name": "Genre 5",
            "subgenres": [
                {
                    "id": 24,
                    "name": "Subgenre 1",
                    "isDescriptionRequired": true
                }
            ]
        }
    ]
};

export const FinishTest = () => <Container><Finish/></Container>;
export const InformationTest = () => <Container><Information/></Container>;
export const SubgenreAddTest = () => <Container><SubgenreAdd/></Container>;
export const SubgenreTest = () => <Container><Subgenres list={data.genres[0].subgenres}/></Container>;
export const GenreTest = () => <Container><Genres list={data.genres}/></Container>;

export default {
    title: 'Steps',
    component: FinishTest,
};
