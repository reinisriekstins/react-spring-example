import { useState, useEffect } from 'react'
import { useSpring, animated, config, } from '@react-spring/web'
import reactLogo from './assets/react.svg'
import './App.css'

const LOGO_HEIGHT = 120;

const superSlowConfig = { mass: 15, friction: 100, tension: 200 };

function App() {
  const [coordinates, setCoordinates] = useState({
    x: window.innerWidth / 2 - LOGO_HEIGHT / 2,
    y: window.innerHeight / 2 - LOGO_HEIGHT / 2,
  })

  const spring = useSpring({
    x: coordinates.x,
    y: coordinates.y,
    // config: config.default,
    // config: config.wobbly,
    config: superSlowConfig,
    // // config with duration & easing
    // // (if you really need to use that)
    // config: {
    //   duration: 1000,
    //   // taken from: https://easings.net/#easeOutSine
    //   easing: function easeOutSine(x) {
    //     return Math.sin((x * Math.PI) / 2);
    //   }
    // },
  })

  // console.log('spring', spring)

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
      <animated.img
        src={reactLogo}
        className="logo-react"
        alt="React logo"
        style={{
          height: LOGO_HEIGHT,
          position: 'fixed',
          left: spring.x,
          top: spring.y,
        }}
      />
    </>
  )
}

export default App
