import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-dark bg-info mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand">Busca github.com</Link>
                </div>
            </nav>
        </>
    );
}
export default Navbar;