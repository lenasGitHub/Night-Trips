import React from 'react'

import {Helmet} from "react-helmet";

export function SEO () {
    return (
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
            <meta property='twitter:url' content={'https://xenodochial-spence-d9901e.netlify.app/'}/>
            <meta property='og:url' content={'https://xenodochial-spence-d9901e.netlify.app/'}/>

            <meta property='og:image' content='/assets/images/nigth-trips.png'/>
            <meta property='twitter:image' content='/assets/images/nigth-trips.png'/>
        </Helmet>
    )
}
