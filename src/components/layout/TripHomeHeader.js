import React from 'react'
import PropTypes from 'prop-types'

import {SocialsIcons} from "../trip-social/SocialsIcons";

export function TripHomeHeader({ header }) {
    return (
        <div className="container" style={{ height: '70%' }}>

            <div className="night-trip__title night-trip__title-flex-center night-trip__title-white">
                <h1>{header.title}</h1>
                <h2>{header.subtitle}</h2>
                <p>{header.desc}</p>
            </div>

            <div className="night-trip__social"><SocialsIcons /></div>
            <div className="night-trip__scroll"><span>SCROLL</span></div>

        </div>
    )
}

TripHomeHeader.propTypes = {
    header: PropTypes.object.isRequired,
}

TripHomeHeader.defaultProps = {
    header: {
        id: 1,
        title: 'Night Trips',
        subtitle: 'WE GOT TRIPS FOR THE TRIPPSTER IN YOU',
        desc: 'Neque, eros commodo, nascetur ullamcorper vitae. Tincidunt ut venenatis, volutpat lorem ut faucibus mauris, quisque. Integer gravida sed quis congue. Vel risus, arcu a viverra leo id pulvinar ultricies. Enim in in in pulvinar nulla sollicitudin. Ullamcorper.'
    }
}
