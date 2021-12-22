import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getClasses } from '../actions';
import { useNavigate } from 'react-router-dom';

const ClassList = props => {
    props.getClasses();
    const navigate = useNavigate();

    const [ participants, setParticipants ] = useState([])
    const focusClasses = [];
    const otherClasses = [];
    props.classes.map(i => {
        setParticipants(i.participants);
        participants.forEach(p => props.user.username === p || i.owner ? focusClasses.push(i) : otherClasses.push(i))
    });

    return (
        <div className='classList'>
            {focusClasses.map(i => {
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
                            {/* update navigate to actual edit class file name */}
                            <button onclick={navigate('/editClass')}>Edit Class</button>
                            <ul className='classParticipants'>
                                {i.particpants.map(p => {
                                    <>
                                        <li>{p}</li>
                                    </>
                                })}
                            </ul> 
                        </> : null
                    }
                </>
            })}
            {otherClasses.map(i => {
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
            })}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        user: state.user,
        classes: state.classes,
        isInstructor: state.user.isInstructor,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getClasses })(ClassList);

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