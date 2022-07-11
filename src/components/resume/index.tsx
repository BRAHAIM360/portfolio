import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import { portfolio } from "../../data/portfolio";
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

    // useEffect(() => {
    //     getPortfolio();
    // }, []);


    // console.log(portfolio);

    // const renderPortfolio = () => {
    //     return (
    //         <div className="images-container">
    //             {
    //                 portfolio.map((port: any, idx: number) => {
    //                     return (<div className="image-box" key={idx}>
    //                         <img
    //                             src={port.cover}
    //                             className="portfolio-image"
    //                             alt="portfolio" />
    //                         <div className="content">
    //                             <p className="title">{port.title}</p>
    //                             <h4 className="description">{port.description}</h4>
    //                             <button
    //                                 className="btn"
    //                                 onClick={() => window.open(port.url)}
    //                             >View</button>
    //                         </div>
    //                     </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     );
    // }


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
            </div>
            <Loader active type="pacman" />
        </>
    );
}

export default Resume;