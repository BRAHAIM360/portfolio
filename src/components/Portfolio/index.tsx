import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import portfolioData, { Iportfolio } from "../../data/portfolio";
import { AnimatedLetter } from "../AnimatedLetters";
import { Filter } from "./filter";
import { motion } from 'framer-motion'
import "./index.scss";


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState(portfolioData);
    const [categorie, setCategorie] = useState("all");

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

    });

    // useEffect(() => {
    //     getPortfolio();
    // }, []);


    console.log(portfolio);

    const renderPortfolio = () => {
        return (
            <motion.div layout className="images-container">

                {
                    portfolio.map((port: Iportfolio, idx: number) => {
                        return (<motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} className="image-box" key={port.title}>
                            <img
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio" />
                            <div className="content">
                                <p className="title">{port.title}</p>
                                <h4 className="description">{port.description}</h4>
                                <button
                                    className="btn"
                                    onClick={() => window.open(port.url)}
                                >View</button>
                            </div>
                        </motion.div>
                        )
                    })
                }
            </motion.div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetter
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <Filter categorie={categorie} setCategorie={setCategorie} setPortfolio={setPortfolio} />

                <div>{renderPortfolio()}</div>
            </div>
            <Loader active type="pacman" />
        </>
    );
}

export default Portfolio;