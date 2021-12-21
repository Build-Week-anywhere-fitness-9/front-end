import React from 'react';
import { useAuth } from './PrivateRoute';

const ClassList = () => {
    const auth = useAuth();

    return (
        <div>
            {/* Search Function:
                - time
                - date
                - duration
                - type
                - intensity
                - location
            */}
            {/* Map over classes:
                - client: reserved first
                - instructor: owned first + names of participants
            add buttons:
                - client: make/cancel reservation
                - instructor: edit class
            */}
        </div>
    )
};

export default ClassList;

// {auth.user ? {
//     /* what to display if user is signed in */
// } : (
//     <Link to='/signin'> Sign In </Link>
// )}