import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './index.scss'
import { AnimatedLetter } from '../AnimatedLetters'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form: any = useRef()

  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')



  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e: any) => {
    e.preventDefault()
    console.log(form.current)

    emailjs
      .send(
        'service_eoj1d08',
        'template_tf3uy9i',
        {
          email, name, subject, message
        }
        ,
        '2ovMUbKZgsbWzSEHE'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload()
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name" type="text" name="name" required value={name}
                    onChange={(e: any) => setname(e.target.value)} />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e: any) => setemail(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e: any) => setSubject(e.target.value)}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e: any) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Brahim Mahioussi,
          <br />
          Algeria,
          <br />
          Oran <br />
          Benfreha <br />
          <br />
          <span>contact@mahioussi.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[35.696043347370434, -0.420099333755788]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[35.696043347370434, -0.420099333755788]}>
              <Popup>Sloba lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader active type="pacman" />
    </>
  )
}

export default Contact
