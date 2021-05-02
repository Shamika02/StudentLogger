import React from 'react'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/">
                    <h1>Student Logger</h1>
            </Link>
            <Link to="/rankings">
                    <h3>Rankings</h3>
            </Link>
            <Link to="/honorroll">
                    <h3>Honor Roll</h3>
            </Link>

            
        </nav>
    )
}

export default Navbar
