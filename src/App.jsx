import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const LOGO_HEIGHT = 120;

function App() {
  const [coordinates, setCoordinates] = useState({
    x: window.innerWidth / 2 - LOGO_HEIGHT / 2,
    y: window.innerHeight / 2 - LOGO_HEIGHT / 2,
  })

  useEffect(() => {
    const listener = (evt) => {
      setCoordinates({
        x: evt.pageX - LOGO_HEIGHT / 2,
        y: evt.pageY - LOGO_HEIGHT / 2,
      })
    }

    window.addEventListener('mousedown', listener);

    return () => window.removeEventListener('mousedown', listener);
  }, [])

  return (
    <>
      <img
        src={reactLogo}
        className="logo-react"
        alt="React logo"
        style={{
          height: LOGO_HEIGHT,
          position: 'fixed',
          left: coordinates.x,
          top: coordinates.y,
        }}
      />
    </>
  )
}

export default App
