import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import { AnimatedLetter } from "../AnimatedLetters";
import "./index.scss";


const Resume = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    // const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

    });


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetter
                        letterClass={letterClass}
                        strArray={"Resume".split("")}
                        idx={15}
                    />
                </h1>
                <h1 className="div">
                    <AnimatedLetter
                        letterClass={letterClass}
                        strArray={"Coming Soon".split("")}
                        idx={15}
                    />

                </h1>
            </div>
            <Loader active type="pacman" />
        </>
    );
}

export default Resume;