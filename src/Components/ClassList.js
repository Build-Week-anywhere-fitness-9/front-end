import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { getClasses } from '../actions';
import { useHistory } from 'react-router-dom';

/* dummy data */
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
      participants: [
        'Carlos',
        'Darla',
        'William'
      ],
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
      participants: [],
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

const ClassList = props => {    
    const push = useHistory();

    const [ participants, setParticipants ] = useState([])
    const focusClasses = [];
    const otherClasses = [];
    props.classes.forEach(i => {
        setParticipants(i.participants);
        // return (
            participants.forEach(p => {
                props.user.username === p || i.owner ? 
                    focusClasses.push(i) : 
                    otherClasses.push(i)
            })
        // )
    });

    return (
        <div className='classList'>
            {focusClasses.map(i => (
                <>
                    <h3>{i.name}</h3>
                    <ul className='genericClassList'>
                        <li>Type: {i.type}</li>
                        <li>Cost: {i.cost}</li>
                        <li>Date: {i.date}</li>
                        <li>Time: {i.time}</li>
                        <li>Location: {i.location}</li>
                        <li>Max size: {i.maxSize} participants</li>
                        <li>Duration: {i.duration}</li>
                        <li>Intensity Level: {i.intensity}</li>
                    </ul>
                    {props.user.username === i.owner ?
                        <>
                            {/* update push to actual edit class file name */}
                            <button onclick={push('/editClass')}>Edit Class</button>
                            <ul className='classParticipants'>
                                {i.particpants.map(p => (
                                    <>
                                        <li>{p}</li>
                                    </>
                                ))}
                            </ul> 
                        </> : null
                    }
                </>
            ))}
            {otherClasses.map(i => (
                <>
                    <h3>{i.name}</h3>
                    <ul className='genericClassList'>
                        <li>Type: {i.type}</li>
                        <li>Cost: {i.cost}</li>
                        <li>Date: {i.date}</li>
                        <li>Time: {i.time}</li>
                        <li>Location: {i.location}</li>
                        <li>Max size: {i.maxSize} participants</li>
                        <li>Duration: {i.duration}</li>
                        <li>Intensity Level: {i.intensity}</li>
                    </ul>
                </>
            ))}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        user: /*state.user,*/ 'George',
        classes: /*state.classes*/ classes,
        isFetching: state.isFetching,
        error: state.error
    };
};

// add { getClasses } after mapStateToProps for action call
export default connect(mapStateToProps)(ClassList);

// Search Function:
//     - time
//     - date
//     - duration
//     - type
//     - intensity
//     - location
// add buttons:
//     - client: make/cancel reservation
//     - instructor: edit class