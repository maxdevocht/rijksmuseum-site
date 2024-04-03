import React from "react"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav--name">
                <p className="name">Rijksmuseum</p>
            </div>
            <div className="nav--btn">
                <button className="menu--btn">Menu</button>
            </div>
        </nav>
    )
}