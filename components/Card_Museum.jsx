import React from "react"

export default function Card_Museum() {
    return (
        <header className="header">
            <div className="div--museum">
                <div className="div--title">
                    <h1 className="painting--name">HET RIJKSMUSEUM</h1>
                </div>
                <div className="museum--img"></div>
                <p className="description">
                    Ontdek de kunst en geschiedenis van Nederland in het Rijksmuseum. Bewonder de meesterwerken van Rembrandt, Vermeer en Van Gogh. Er is elke dag iets te beleven. Bestel nu je tickets en bezoek het Rijksmuseum!<br /><br />
                    <span>Dagelijks 9 tot 17u<br />
                    Al leuk vanaf 4 jaar<br />
                    Gratis t/m 18 jaar</span>
                </p>
                <div className="div--link">
                    <button className="link--btn">BESTEL TICKETS</button>
                </div>
            </div>
        </header>
    )
}