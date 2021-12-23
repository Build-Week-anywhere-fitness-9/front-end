import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { getClasses } from '../actions';
import { withRouter } from 'react-router-dom';

/* dummy data */
const user = {
    email: 'George',
    password: 'Lambda'
};

const classes = [
    {
      type: 'yoga',
      maxSize: 10,
      date: 12212021,
      time: 2200,
      duration: 60,
      intensity: 1,
      name: 'Yoga with Yani',
      cost: 25,
      location: 'San Diego',
      participants: [],
      owner: 'Fred'
    },
    {
      type: 'karate',
      maxSize: 10,
      date: 12212021,
      time: 2200,
      duration: 60,
      intensity: 1,
      name: 'Hiya Karate',
      cost: 10,
      location: 'Chicago',
      participants: [
        'Carlos',
        'Darla',
        'William'
      ],
      owner: 'George'
    },
    {
      type: 'Pilates',
      maxSize: 10,
      date: 12222021,
      time: 2000,
      duration: 30,
      intensity: 3,
      name: 'Platform Pilates',
      cost: 15,
      location: 'New York',
      participants: [
        'Max',
        'Roxanne',
        'Cobey'
      ],
      owner: 'Max'
    }
  ]

const ClassList = ({ user, classes, history, isFetching, error }) => {
    const focusClasses = [];
    const otherClasses = [];
    
    classes.forEach(oneClass => {
        if(user === oneClass.owner) {focusClasses.push(oneClass)}
        else if(oneClass.participants.includes(user)) {focusClasses.push(oneClass)}
        else {otherClasses.push(oneClass)}
    });

    const handleClick = e => {
        const target = classes.find(i => i.name === e.target.name);
        const arr = target.participants;
        if(arr.includes(user)) {
            for (var i = 0; i < arr.length; i++) {
                if(arr[i] === user ) {
                    target.participants.splice(i, 1);
                }
            }
        }
        else {
            target.participants.push(user);
        };
        history.push('/classlist');
    };

    return (
        <div className='classList'>
            {focusClasses.map(i => (
                <div className='focusClass'>
                    <h3>{i.name}</h3>
                    <ul className='genericClassList'>
                        <li>Type: {i.type}</li>
                        <li>Cost: ${i.cost}</li>
                        <li>Date: {i.date}</li>
                        <li>Time: {i.time}</li>
                        <li>Location: {i.location}</li>
                        <li>Max particpants: {i.maxSize}</li>
                        <li>Duration: {i.duration} minutes</li>
                        <li>Intensity Level: {i.intensity} out of 5</li>
                    </ul>
                    {user === i.owner ?
                        /* owner options */
                        <div className='ownerOptions'>
                            {/* update push to actual edit class file name */}
                            <button onClick={history.push.bind('/editClass')} className='editClass'>Edit Class</button>
                            <ul className='classParticipants'>
                                {i.participants.map(p => (
                                    <li>{p}</li>
                                ))}
                            </ul> 
                        </div> : 
                        /* client options */
                        <div className='clientOptions'>
                            <button onClick={handleClick} name={i.name} className='reservation'>Withdraw</button>
                        </div>
                    }
                </div>
            ))}
            {otherClasses.map(i => (
            <div className='otherClass'>
                <h3>{i.name}</h3>
                <ul className='genericClassList'>
                    <li>Type: {i.type}</li>
                    <li>Cost: ${i.cost}</li>
                    <li>Date: {i.date}</li>
                    <li>Time: {i.time}</li>
                    <li>Location: {i.location}</li>
                    <li>Max particpants: {i.maxSize}</li>
                    <li>Duration: {i.duration} minutes</li>
                    <li>Intensity Level: {i.intensity} out of 5</li>
                </ul>
                <button onClick={handleClick} name={i.name} className='reservation'>Attend Class</button>
            </div>
        ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: /*state.user,*/ user.email,
        classes: /*state.classes*/ classes,
        isFetching: state.isFetching,
        error: state.error
    };
};

// add { getClasses } after mapStateToProps for action call
export default connect(mapStateToProps)(withRouter(ClassList));

// Search Function:
//     - time
//     - date
//     - duration
//     - type
//     - intensity
//     - location