import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getClasses, removeClass } from '../actions/ClassActions';
import { withRouter } from 'react-router-dom';

const ClassList = ({ user, classes, history }) => {
    const focusClasses = [];
    const otherClasses = [];
    
    console.log('user', user);
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
                };
            };
            history.push('/classlist');
        }
        else if(user === 'Guest') {
            history.push('/login');
        }
        else {
            target.participants.push(user);
            history.push('/classlist');
        };
    };

    return (
        <div className='classList'>
            <div className='beAnInstructor'>
                <h3>Be an instructor!</h3>
                <button onClick={history.push.bind('/newClass')} className='createClass'>Create a Class</button>
            </div>
            <hr/><br/>
            {/* List all classes that client has connections to (owner or particpant) */}
            <h1>Class List</h1>
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
                        /* owner options: edit/delete class & view participants */
                        <div className='ownerOptions'>
                            <button onClick={history.push.bind('/newClass')} className='editClass'>Edit Class</button>
                            <button onClick={removeClass} className='cancel'>Cancel Class</button>
                            <ul className='classParticipants'>
                                {i.participants.map(p => (
                                    <li>{p}</li>
                                ))}
                            </ul> 
                        </div> : 
                        /* particpant options: withdraw attendance */
                        <div className='clientOptions'>
                            <button onClick={handleClick} name={i.name} className='reservation'>Withdraw</button>
                        </div>
                    }
                </div>
            ))}
            {/* List of classes that client is not currently connected to */}
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
        user: state.userInfo.user.email,
        classes: state.classList.classes,
    };
};

export default connect(mapStateToProps, { getClasses })(withRouter(ClassList));