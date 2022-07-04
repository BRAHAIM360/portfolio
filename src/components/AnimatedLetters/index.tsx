import React from 'react';
import './style.scss'

interface AnimatedLetterProps {
    letterClass: string,
    strArray: any,
    idx: number
}

export const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ letterClass, strArray, idx }) => {
    return (
        <span >
            {console.log(strArray)}
            {
                strArray.map((char: string, i: number) => (<span key={char + 1} className={`${letterClass} _${i + idx}`} >
                    {char}
                </span>)
                )
            }
        </span>
    );
}