import React from 'react';
import { ReactDOM } from 'react-dom';

const Home = () => {
    return (
        <main>
            <section id='about-section'>
                <h2 className='title'>About Me</h2>
                <p>Here Is where I'll write about me and how I got to this point.</p>
            </section>
            <section id='skill-section'>
                <h3>Related Skill's</h3>
                <p>Here is where I'll put my related skill's to programming.</p>
            </section>
            <section id='hobbie-section'>
                <h3>My hobbie's</h3>
                <p>Here Is where I'll write about my hobbie's and what I like to do.</p>
            </section>
            <section id='unrelated-section'>
                <h3>Unrelated Skill's</h3>
                <p>Here is where I'll put my favarite unrelated skill's to programming.</p>
            </section>

        </main>

    )
};


export default Home