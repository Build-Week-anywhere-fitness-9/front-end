# front-end

Product Vision Document: https://abounding-roarer-17c.notion.site/Product-Vision-Document-23d2485c484b4d8eb3d6bdf238557820

Using Redux (npm i react-redux)

import { connect } from 'react-redux';
// import whatever actions you need
import { getClasses, getUser } from '../actions';

// state and actions are accessed through props
const ComponentUsingState = props => {
//  props.getClasses();
//  props.user
//  etc.

// If other state is needed for only this component, set up here with { useState } as usual
}

// pick and choose which parts of state you need from all of the following
const mapStateToProps = state => {
    return {
        user: state.user, /* object containing username & password */
          username: state.user.username, /* string */
          password: state.user.password, /* string */
        classes: state.classes, /* array containing type, size, date, time, duration, intensity, name, cost, location, particpants, & owner */
          classType: state.classes.type, /* string */
          maxSize: state.classes.maxSize, /* number */
          date: state.classes.date, /* number */
          time: state.classes.time, /* number */
          duration: state.classes.duration, /* number */
          intensity: state.classes.intensity, /* number */
          nameOfClass: state.classes.name, /* string */
          cost: state.classes.cost, /* number */
          location: state.classes.location, /* string */
          participants: state.classes.participants, /* array containting participants */
          owner: state.classes.owner, /* string */
        isFetching: state.isFetching, /* boolean */
        error: state.error /* string */
    };
};

// connect state & actions to your component
export default connect(mapStateToProps, { getClasses, getUser })(ClassList);
