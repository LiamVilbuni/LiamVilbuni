import React from 'react'
import Typewriter from 'typewriter-effect'
import '@/styles/header.css'

const Header = () => {
    return (
        <div className='header'>
            <div></div>
            <h1 className={`header__typewriter `}>I am <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Full Stack Developer')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('Competitive Coder')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('Cryptic Hunter')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('Music Blender')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('Grindmaster')
                        .pauseFor(2000)
                        .deleteAll()
                        .typeString('Liam Vilbuni')
                        .pauseFor(2000)
                        .start();
                }}
            /></h1>
        </div>
    )
}

export default Header
