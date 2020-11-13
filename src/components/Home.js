import React, {useRef, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
    const h1Ref = useRef()

    useEffect(() => {

    })
    return (
        <div>
            <h1 ref={h1Ref}>
                Home. Go to <Link to="/about">About</Link> 
            </h1>
        </div>
    )
};


export default Home
