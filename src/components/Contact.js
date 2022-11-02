import React from 'react';
import { ReactDOM } from 'react-dom';

const Contact = () => {
    return (
        <section>
            <h2 className='title'>Contact Me</h2>
            <form>
                <label>
                    Name:
                    <input type='text' value='name' />

                </label>
                <label>

                    Message:
                    <input type='text' value='message' />

                </label>
                <input type='submit' value='send message' />
            </form>
            <p>Feel Free to contact me or add me on social media</p>
            <ul>
                <li>240willie@gmail.com</li>
                <li>github</li>
                <li>instgram</li>
                <li>frontend mentor</li>
                <li>codewars</li>
            </ul>
        </section>
    )
};


export default Contact