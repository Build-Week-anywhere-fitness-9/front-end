# front-end

Product Vision Document: https://abounding-roarer-17c.notion.site/Product-Vision-Document-23d2485c484b4d8eb3d6bdf238557820

# Using Redux (npm i react-redux)

import { connect } from 'react-redux';

***import whatever actions you need***

import { getClasses, getUser } from '../actions';

***state and actions are accessed through props***

const ComponentUsingState = props => {
- props.getClasses();
- props.user
- etc.

***If other state is needed for only this component, set up here with { useState } as usual***

}

***pick and choose which parts of state you need from all of the following***

- user: { username, password }
    - username: ''
    - password: ''
- classes: [ type, size, date, time, duration, intensity, name, cost, location, [ particpants ], owner ]
    - type: ''
    - size: number
    - date: number
    - time: number
    - duration: number
    - intensity: number
    - name: ''
    - cost: number
    - location: ''
    - participants: []
    - owner: ''

***format like this (outside of component function) with the state data you choose***

const mapStateToProps = state => {

    return {

        user: state.user, 

        username: state.user.username, 

        password: state.user.password,

        classes: state.classes,

        isFetching: state.isFetching,

        error: state.error

    };

};

***connect state and actions to your component***

export default connect( mapStateToProps, { getClasses, getUser } )( ComponentUsingState );
