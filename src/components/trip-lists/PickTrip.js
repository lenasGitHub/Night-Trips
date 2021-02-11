import React from 'react'
import PropTypes from 'prop-types'

import {CrossSvg} from "../../svg/cross";

export function PickTrip({Text}) {
    return (
        <section className={'night-trip__pick-section'}>
            <div className="container container--flex">
                <h3>{Text.title}</h3>
                <CrossSvg/>
                <p className={'trip-pick-text'}>{Text.subtitle}</p>
            </div>
        </section>
    )
}

PickTrip.propTypes = {
    Text: PropTypes.object.isRequired,
}

PickTrip.defaultProps = {
    Text: {
        title: 'Pick your trip',
        subtitle: 'Our team put together some trips to you to discover, feel free to discover each of them.',
    }
}

