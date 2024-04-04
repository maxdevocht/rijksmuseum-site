import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav--name">
                <p className="name">Rijksmuseum</p>
            </div>
            <a href="#" className="nav--btn">
                <p className="menu--btn">Menu</p>
            </a>
        </nav>
    )
}