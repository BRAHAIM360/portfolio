import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import { images } from '../../utils/images';
import { AnimatedLetter } from '../AnimatedLetters';
import Logo from './Logo';
import './style.scss'

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({ }) => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const nameArray = ['r', 'a', 'h', 'i', 'm'];
    const jobArray = ['S', 'o', 'f', 't ', 'w', 'a', 'r', 'e', '', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r'];
    useEffect(() => {

        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])
    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])


    return (
        <>
            <div className="container home-page">
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img
                            src={images.LogoS} alt="developer"
                        />
                        <AnimatedLetter
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetter
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={19} />

                    </h1>
                    <h2>
                        Software engineer / fullstack developer
                    </h2>
                    <Link to="/contact" className='flat-button' >CONTACT ME</Link>
                </div>
                <Logo />
            </div>

            <Loader active type="pacman" />

        </>
    );
}