import { useState, useEffect } from 'react'
import flowCat from './assets/flow-cat.png'
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
        src={flowCat}
        className="logo"
        style={{
          height: LOGO_HEIGHT,
          position: 'fixed',
          // transition: 'left 1000ms ease-out, top 1000ms ease-out',
          left: coordinates.x,
          top: coordinates.y,
        }}
      />
    </>
  )
}

export default App
