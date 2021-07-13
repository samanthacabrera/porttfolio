import React from 'react';

function Contact() {
    return (
        <div className="Contact">
            <h1 className="contact-heading hvr-shrink">Let's work together</h1>
            
            <div className="contact-content">
                <p>I am based in Little Rock, Arkansas and love to collaborate with positive, hardworking creatives.
                I am interested in the entire frontend spectrum and I am always open to new opportunities to improve and grow. </p>
            
                <a href="mailto:inquiries@samanthacabrera.co" className="button" style={{margin:'10%'}}>email me</a>
                
                <a href="https://github.com/samanthacabrera" className="button" target="_blank" rel="noreferrer" style={{margin:'10%'}}>github</a>
            </div>
        </div>
    )
}

export default Contact;