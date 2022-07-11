

import { useEffect, useState } from 'react'
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { AnimatedLetter } from '../AnimatedLetters'
import { Link } from 'react-router-dom'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello, my name is Brahim Mahioussi, and I'm a software developer and Javascript lover ,currently based in Oran, Algeria. I've worked hard in the IT field for the past 4 years,
            first as a freelancer before getting my full time job, generating landing pages, websites, and mobile apps along the way.
          </p>
          {//@ts-ignore
          }
          <p
          // align="LEFT"
          >
            My abundant energy allows me to pursue a variety of interests, hobbies,
            and artistic endeavors. I am a quick learner who adjusts to change quickly and is willing to acquire new methods and procedures,
            whether they are cultural or work-related.
          </p>
          <p>
            As a programmer, I like to think of myself as a Tech Agnostic Polyglot Programmer,
            someone who can adapt, learn, and change based on their environment.
          </p>
          <p>
            I'm usually focused on :
            🎛️ Designing great User interfaces experience
            🌐 Developing full-stack websites that scales
            ✨ Developing backend and structuring databases.
            ⏱️ Efficiency 🎯 Consistency
            ♻️ Reusability
            ⚙️ Systems
            📋 Standards
            💠 Modular Design
          </p>
          <div id='button-container'>
            <Link to="/resume" id='flat-button' >MY RESUME</Link>
            <Link to="/cv/cv.pdf" id='flat-button' >DOWNLOAD CV</Link>

          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#3c873a" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader active type="pacman" />
    </>
  )
}

export default About
