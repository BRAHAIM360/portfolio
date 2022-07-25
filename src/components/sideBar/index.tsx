//@ts-nocheck
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faSuitcase, faUserGear } from '@fortawesome/free-solid-svg-icons'

import {
    faLinkedin,
    faGithub,
    faYoutube,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { colors } from '../../utils/color';
import { images } from '../../utils/images';

interface SideBarProps {

}
//@ts-ignore
export const SideBar: React.FC<SideBarProps> = ({ }) => {
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img src={images.LogoS} alt="Logo" />
                <img className="sub-logo" src={images.LogoSubtitle} alt="slobodan" />
            </Link>
            <nav>
                <NavLink activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color={colors.grey} />
                </NavLink>
                <NavLink activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color={colors.grey} />
                </NavLink>
                {/* <NavLink activeclassname="active" className="work-link" to="/resume">
                    <FontAwesomeIcon icon={faUserGear} color={colors.grey} />
                </NavLink> */}
                <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} color={colors.grey} />
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color={colors.grey} />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/brahim-mahioussi-4b2920111/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color={colors.grey} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/BRAHAIM360"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color={colors.grey} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.youtube.com/channel/UChzCBkBgOQbyVwNvdvkhUEg"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faYoutube} color={colors.grey} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/brahim.360/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon icon={faInstagram} color={colors.grey} />
                    </a>
                </li>
            </ul>
        </div>
    );
}