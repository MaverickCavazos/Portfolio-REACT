import React from 'react';
import Github from '../images/github.png'
import Linkedin from '../images/linkedin.png'
import Stack from '../images/stack.png'

function Footer() {
    return (
        <footer>
            <div className="footer">
                <div className="footerContent">
                    <ul>
                        <a href="https://github.com/MaverickCavazos">
                            <img alt="github" src={Github}
                                width="40" height="40" />
                        </a>
                        <a href="https://www.linkedin.com/in/maverick-cavazos-b00872178/">
                            <img className="linkedin" alt="linkedin" src={Linkedin}
                                width="50" height="50" />
                        </a>
                        <a href="https://stackoverflow.com/users/17198762/maverick">
                            <img className="linkedin" alt="linkedin" src={Stack}
                                width="50" height="50" />
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;