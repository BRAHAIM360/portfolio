import React, { useEffect } from 'react';
import portfolio from '../../../data/portfolio';

import './index.scss'

interface filterProps {
    categorie: string
    setCategorie: (val: string) => void
    setPortfolio: (val: any) => void
}

export const Filter: React.FC<filterProps> = ({ categorie, setCategorie, setPortfolio }) => {

    useEffect(() => {
        if (categorie === "all") setPortfolio(portfolio)
        else {
            const filtred = portfolio.filter((project) => project.catergorie === categorie)
            setPortfolio(filtred)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categorie])


    return (
        <div className="filter">
            <div className={categorie === "all" ? "active" : ""} onClick={() => { setCategorie("all") }}>all</div>
            <div className={categorie === "web" ? "active" : ""} onClick={() => { setCategorie("web") }}>web</div>
            <div className={categorie === "desktop" ? "active" : ""} onClick={() => { setCategorie("desktop") }}>desktop</div>
            <div className={categorie === "mobile" ? "active" : ""} onClick={() => { setCategorie("mobile") }}>mobile</div>
        </div>
    );
}