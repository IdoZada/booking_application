import React from 'react'
import About from '../about/About'

const Home = () => {
    return (
        <main id='main'>
            <div id='about'>
                <About></About>
            </div>
            <div id='zengarden'>
                <h1>Zen Garden</h1>
            </div>
            <div id='resturant'>
                <h1>Resturant</h1>
            </div>
            <div id='doubleroom'>
                <h1>Double Room</h1>
            </div>
            <div id='tweenroom'>
                <h1>Tween Room</h1>
            </div>
        </main>
    )
}

export default Home