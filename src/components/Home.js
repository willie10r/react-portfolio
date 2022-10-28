import React from 'react';
import { ReactDOM } from 'react-dom';

const Home = () => {
    return (
        <main>
            <section className='main-title'>
                <h3 id='mt-intro'>Hi, I'm</h3>
                <h1 id='mt-name'>Willie Morris</h1>
            </section>
            <section id='about-section'>
                <h2 className='title'>About Me</h2>
                <p>As I started on the path to learn web development, and look forward into changing my career
                    into a software developer I was a truck driver for 6 years and have successfully reached the potienctial as a driver.
                    I'm lookibng for a new and rewarding challeng working with tech.  </p>
            </section>
            <div className='gr'>
                <section id='skill-section'>
                    <h3>Related Skill's</h3>
                    <ul>
                        <li>Html</li>
                        <li>Css</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Sass/Scss</li>
                        <li>Git/GitHub</li>
                        <li>Node.js</li>
                        <li>Webpack</li>
                        <li>Node package manager</li>

                    </ul>
                </section>
                <section id='hobbie-section'>
                    <h3>My hobbie's</h3>
                    <p>I've collected alot og hobbies over the years here are a few of my favarite</p>
                    <ul>
                        <li>video games</li>
                        <li>wood working/building</li>
                        <li>motorcycle circuit racing</li>
                        <li>reptile keeping</li>
                        <li>mountain biking</li>
                        <li>working out</li>
                    </ul>
                </section>
            </div>

        </main>

    )
};


export default Home