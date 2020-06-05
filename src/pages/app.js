import React from 'react';
import {Router} from '@reach/router';
import Home from '../components/Home';
import MyCourses from '../components/my-courses';

export default (props) => {
    return(
        <div>
            <h1>soy app</h1>
            <Router>
                <Home path="/app"/>
                <MyCourses path="/app/cursos"/>
            </Router>
        </div>
    )
}