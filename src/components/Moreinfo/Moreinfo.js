import React from 'react';
import './Moreinfo.css'

const Moreinfo = () => {
    return (
        <div className='moreinfo'>
            <h2>Find your question with answer</h2>
            <article>
                <h3>#Question-01: How react works?</h3>
                <p> <span>Answer:</span> React is a library for building user interfaces. ReactJS is a great performer as it manages a virtual DOM. The DOM deals with HTML, XML or XHTML. It is a cross-platform and programming API. With ReactJS, the user did not write directly to the DOM, but to the virtual DOM thus leading to smoother and faster performance. JBabel is a JavaScript compiler that can translate markup or programming languages into JavaScript. A component renders content by returning some JSX. The JSX itself is usually HTML markup, mixed with custom tags for the React components. What's absolutely groundbreaking here is that we don't have to perform little micro-operations to change the content of a component. The best part about this description is that it highlights React's simplicity. </p>
            </article>
            <article>
                <h3>#Question-02: Difference between props vs state.</h3>
                <p><span>Answer:</span> Props make components reusable where, State cannot make components reusable. Props can be accessed by the child component where, State cannot be accessed by child components. Props are read-only where, State changes can be asynchronous. Stateless component can have Props where, Stateless components cannot have State where, Props are external and controlled by whatever renders the component where, The State is internal and controlled by the React Component itself. Props is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props allow you to pass data from one component to other components as an argument where State holds information about the components. Both are plain JS object and Both can contain default values.

                </p>
            </article>
        </div>
    );
};

export default Moreinfo;