import React from "react";

const Navbar = ({ setPage }) => {
    return(
        <nav>
            <button onClick={()=> setPage('planets')}> Planetas</button>
            <button onClick={()=> setPage('people')}> Personas</button>
        </nav>
    );
}

export default Navbar;