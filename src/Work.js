import React from 'react';
import './index.css';


function Work() {
    const featuredName = "Ramon Franco Landscaping";

    return (
        <div className="Work">
            <h1 className="work-heading hvr-shrink">What I've been up to</h1>
            <h2>featured project</h2>
            <p> {featuredName} </p>
            <p>Custom website for a landscaping company using Bootstrap. I solo developed this project from the idea stage all the way to deployment. I loved the experience of being able to implement the company's vision, as well as suggest and recommend modern components.</p>
           
            <a href="http://ramonfrancolandscaping.com/" className="button" target="_blank" rel="noreferrer" style={{margin:'5% 30%'}}>visit website</a>

        </div>
    );
}

export default Work;