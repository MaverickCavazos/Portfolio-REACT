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
                            <img className="social-icons-footer" alt="github" src={Github}
                                width="40" height="40" />
                        </a>
                        <a href="https://www.linkedin.com/in/maverick-cavazos-b00872178/">
                            <img className="linkedin social-icons-footer" alt="linkedin" src={Linkedin}
                                width="88" height="50" />
                        </a>
                        <a href="https://stackoverflow.com/users/17198762/maverick">
                            <img className="stack linkedin social-icons-footer" alt="linkedin" src={Stack}
                                width="33" height="33" />
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;