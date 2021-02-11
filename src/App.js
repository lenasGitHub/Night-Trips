import React from "react";

import {SEO} from "./components/SEO";
import {TripHomeHeader} from "./components/layout/TripHomeHeader";
import {TripNav} from "./components/trip-nav";
import {PickTrip} from "./components/trip-lists/PickTrip";
import {TripLists} from "./components/trip-lists";

function App() {
    return (
        <div className="App">
            <SEO />
            <header className="night-trip__banner-with-bg_img-auto">
                <div className="night-trip__banner--bg-image" style={{backgroundImage: `url(${`/assets/images/nigth-trips-min.webp`})`}}>
                    <TripNav/>
                    <TripHomeHeader/>
                </div>
                <div className={'bg-gradient'}/>
            </header>
            <PickTrip />
            <TripLists/>
        </div>
    );
}

export default App;
