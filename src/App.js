import React from "react";

import {Helmet} from "react-helmet";
import {TripLists} from "./components/trip-lists";
import {TripNav} from "./components/trip-nav";
import {TripHomeHeader} from "./components/layout/TripHomeHeader";

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta property='og:type' content='website'/>
                <meta property='og:site_name' content='Night Trips'/>
                <meta property='fb:pages' content='123351087746059'/>
                <meta property='fb:app_id' content='602262749928595'/>
                <meta property='twitter:card' content='summary_large_image'/>
                <meta property='twitter:site' content='@NightTrips'/>
                <meta property='twitter:domain' content='NightTrips.com'/>

                <meta property='og:title' content='Night Trips'/>
                <meta property='twitter:title' content='Night Trips'/>
                <meta property='twitter:image:alt' content='Night Trips'/>

                <meta name="description"
                      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
                <meta property="og:description"
                      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>


                <link href={'https://xenodochial-spence-d9901e.netlify.app/'} rel='canonical'/>
                : ''}
                <meta property='twitter:url' content={'https://xenodochial-spence-d9901e.netlify.app/'}/>
                <meta property='og:url' content={'https://xenodochial-spence-d9901e.netlify.app/'}/>

                <meta property='og:image' content='/assets/images/nigth-trips.png'/>
                <meta property='twitter:image' content='/assets/images/nigth-trips.png'/>
            </Helmet>
            <header className="night-trip__banner-with-bg_img-auto">
                <div className="night-trip__banner--bg-image"
                     style={{backgroundImage: `url(${`/assets/images/nigth-trips-min.webp`})`}}>
                    <TripNav/>
                    <TripHomeHeader/>
                </div>
                <div className={'bg-gradient'}/>
            </header>
            <section className={'night-trip__pick-section'}>
                <div className="container container--flex">
                    <h3>Pick your trip</h3>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="#41EAD4" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="#41EAD4" strokeWidth="2" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                    <p className={'trip-pick-text'}>Our team put together some trips to you to discover, feel free
                        to discover each of them.</p>
                </div>

            </section>
            <TripLists/>
        </div>
    );
}

export default App;
