import React from "react";

import {Helmet} from "react-helmet";
import {TripLists} from "./components/trip-lists";
function App() {
  return (
      <div className="App">
        <Helmet>
          <meta property='og:type' content='website' />
          <meta property='og:site_name' content='Night Trips' />
          <meta property='fb:pages' content='123351087746059' />
          <meta property='fb:app_id' content='602262749928595' />
          <meta property='twitter:card' content='summary_large_image' />
          <meta property='twitter:site' content='@NightTrips' />
          <meta property='twitter:domain' content='NightTrips.com' />

          <meta property='og:title' content='Night Trips'/>
          <meta property='twitter:title' content='Night Trips'/>
          <meta property='twitter:image:alt' content='Night Trips'/>

          <meta name="description" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
          <meta property="og:description" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />


          <link href={'https://xenodochial-spence-d9901e.netlify.app/'} rel='canonical' /> : ''}
          <meta property='twitter:url' content={'https://xenodochial-spence-d9901e.netlify.app/'} />
          <meta property='og:url' content={'https://xenodochial-spence-d9901e.netlify.app/'} />

          <meta property='og:image' content='/assets/images/nigth-trips.png'/>
          <meta property='twitter:image' content='/assets/images/nigth-trips.png'/>
        </Helmet>
        <nav>
          <div className="container container--flex-center">
            <div className={'night-trip__logo'}>NT</div>
            <div className={'night-trip__menu'}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>
              <button className={'night-trip__button night-trip__button--with-stoke menu__button'}>MENU
              </button>
            </div>
          </div>
        </nav>
        <header className="night-trip__banner-with-bg_img-auto">
          <div className="night-trip__banner--bg-image"
               style={{backgroundImage: `url(${`/assets/images/nigth-trips-min.webp`})`}}>
            <div className="container" style={{height: '100%'}}>
              <div className="night-trip__title night-trip__title-flex-center night-trip__title-white">
                <h1>Night Trips</h1>
                <h2>WE GOT TRIPS FOR THE TRIPPSTER IN YOU</h2>
                <p>Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis, volutpat
                  lorem ut faucibus mauris, quisque. Integer gravida sed quis congue. Vel risus, arcu
                  a viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin.
                  Ullamcorper.</p>
              </div>

              <div className="night-trip__social">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                      stroke="#41EAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path
                        d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                        stroke="#41EAD4" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"/>
                    <path
                        d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993 14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                        stroke="#41EAD4" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="24" height="24" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>

                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M23 2.99998C22.0424 3.67546 20.9821 4.19209 19.86 4.52999C19.2577 3.8375 18.4573 3.34668 17.567 3.12391C16.6767 2.90115 15.7395 2.95718 14.8821 3.28444C14.0247 3.6117 13.2884 4.19439 12.773 4.9537C12.2575 5.71302 11.9877 6.61232 12 7.52998V8.52998C10.2426 8.57555 8.50127 8.1858 6.93101 7.39543C5.36074 6.60506 4.01032 5.43862 3 3.99998C3 3.99998 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.49998C20.9991 7.22144 20.9723 6.94358 20.92 6.66999C21.9406 5.66348 22.6608 4.3927 23 2.99998V2.99998Z"
                      stroke="#41EAD4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

              </div>
              <div className="night-trip__scroll">
                <span>SCROLL</span>
              </div>

            </div>
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
        <TripLists />
      </div>
  );
}

export default App;
