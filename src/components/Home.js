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
                <p>
                    As I started on the path to learn web development, and look forward into changing my career
                    I was a truck driver for 6 years and have successfully reached the goals as a driver.
                    I'm looking for a new and rewarding challenge working in the tech field.
                </p>
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
                    <p>I've collected alot of hobbies over the years here are a few of my favarite</p>
                    <ul id='hobbie-list'>
                        <li>
                            <h3 className='hl-title'>video games</h3>
                            <p className='hl-text'>I mainly like racing simulator games </p>
                        </li>
                        <li>
                            <h3 className='hl-title'>wood working/building</h3>
                            <p className='hl-text'>I picked this hobbie up from the need cheaper home repairs, but it stuck with me because I found it relaxing.</p>
                        </li>
                        <li>
                            <h3 className='hl-title'>motorcycle circuit racing</h3>
                            <p className='hl-text'>Since I was a child I've always loved racing of any kind and as an adult I found my self in road racing super bikes</p>
                        </li>
                        <li>
                            <h3 className='hl-title'>reptile keeping</h3>
                            <p className='hl-text'>The first reptile I got was when I was 13 years old I like the challenge of reptile keeping </p>
                        </li>
                        <li>
                            <h3 className='hl-title'>mountain biking</h3>
                            <p className='hl-text'>I picked up mountain biking when I got into road racing as a way to keep fit and focused for racing in the off season</p>
                        </li>
                        <li>
                            <h3 className='hl-title'>working out</h3>
                            <p className='hl-text'>In 2019 me and my wife started working out after the first few monthes we were hooked</p>
                        </li>
                    </ul>
                </section>
            </div>

        </main>

    )
};


export default Home