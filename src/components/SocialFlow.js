import React from 'react';
import { SiGithub, SiCodewars } from "react-icons/si";
import { TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti";


const SocialFlow = () => {
    return (

        <footer className='ft'>
            <section>
                <a href='https://github.com/willie10r' target="_blank">
                    {<SiGithub size='30px' id='sf-git' />}
                </a>
                <a href='https://www.instagram.com/zx10rwillie/' target="_blank">
                    {<TiSocialInstagram size='30px' id='sf-insta' />}
                </a>
                <a href='https://www.linkedin.com/in/willie-morris-0b2571229/' target="_blank">
                    {<TiSocialLinkedin size='30px' id='sf-linked' />}
                </a>
                <a href='https://www.codewars.com/users/Willie10' target="_blank">
                    {<SiCodewars size='30px' id='sf-codewar' />}
                </a>
            </section>
            <div> &copy; 2022 Willie Morris </div>
        </footer>
    )
}


export default SocialFlow