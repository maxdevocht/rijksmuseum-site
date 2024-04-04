import React from "react"

export default function Card3() {
    return (
        <div className="div3">
            <div className="div3--title">
                <h2 className="label">Tentoonstelling</h2>
                <div className="profile">
                    <h1 className="painting--name">FRANS HALS</h1>
                    <div className="profile--pic">
                        <img className="profile--img" src="./public/images/rijksmuseum.webp" alt="Frans Hals" />
                    </div>
                </div>
            </div>
            <p className="description">Uitzonderlijk vernieuwend, vermakelijk en vol lef: Ontdek de streken van Frans Hals in een unieke tentoonstelling met zo’n vijftig werken uit (inter)nationale topcollecties.</p>
            <div className="datum">
                16 feb - 9 juni<br />
                Volwassenen: € 22,50<br />
                t/m 18 jaar: gratis
            </div>
            <div className="div--link">
                <div className="link">ONTDEK</div>
                <a href="#"><i class="ri-arrow-right-fill"></i></a>
            </div>
        </div>
    )
}