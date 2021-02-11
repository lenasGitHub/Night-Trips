import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'

import {BottomSocial} from "../trip-social/BottomSocial";

import {DotsSvg} from "../../svg/dots";

export function TripLists({tripsList, tripsContent}) {
    const [active, setActive] = useState(1)
    return (
        <section className={'night-trip__pick-section'}>
            <div className="container container--flex container--flex--column">
                <ul className={'pick-trip__list'}>
                    {tripsList.map(l => <li
                        key={l.id}
                        onClick={() => setActive(l.id)}
                        className={`${active === l.id ? 'active' : ''}`}
                    >{l.name}</li>)}
                </ul>
                <div className={'pick-trip__content'}>
                    <DotsSvg/>
                    {tripsContent.map(c => {
                        if (c.id === active) {
                            return <Fragment key={c.id}>
                                <div className={'trip_images'}>
                                    <div className={'trip_img'}>
                                        <img src={`/assets/images/${c.image}`} alt={'trip'} width="430" height="550"/>

                                        <div className={'trip_img_arrow trip_img_arrow--left'}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 12L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className={'trip_img_arrow trip_img_arrow--right'}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M12 19L19 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>

                                    </div>
                                    <div className={'trip_img-title'}>
                                        <div className={'trip_num'}>{c.number}</div>
                                        <div className={'trip_title-text'}>GRAND DUNES LANDSCAPE</div>
                                    </div>
                                </div>
                                <div className={'trip_text'}>
                                    <h4>{c.title}</h4>
                                    <p>{c.desc}</p>
                                    <button className={'night-trip__button night-trip__button--block night-trip__button--with-stoke offer__button'}>
                                        SEE OUR LATEST OFFER
                                    </button>
                                </div>
                            </Fragment>
                        }
                    })}
                    <BottomSocial/>
                </div>
            </div>
        </section>
    )
}

TripLists.propTypes = {
    tripsList: PropTypes.array,
    tripsContent: PropTypes.array
}

TripLists.defaultProps = {
    tripsList: [
        {
            id: 1,
            name: 'Chill Adventure'
        }, {
            id: 2,
            name: 'Spooky Times'
        }, {
            id: 3,
            name: 'Desert Madness'
        }, {
            id: 4,
            name: 'Out in the wild'
        },
    ],
    tripsContent: [
        {
            id: 1,
            number: '01.',
            title: 'Chill Adventure1',
            desc: 'Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat\n' +
                '                            id fringilla arcu condimentum fames.1',
            image: 'trip-s2-min.png'
        },
        {
            id: 2,
            number: '02.',
            title: 'Chill Adventure2',
            desc: 'Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat\n' +
                '                            id fringilla arcu condimentum fames.2',
            image: 'trip-s1-min.png'
        },
        {
            id: 3,
            number: '03.',
            title: 'Chill Adventure3',
            desc: 'Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat\n' +
                '                            id fringilla arcu condimentum fames.3',
            image: 'trip-s3-min.png'
        },
        {
            id: 4,
            number: '04.',
            title: 'Chill Adventure4',
            desc: 'Ornare vivamus molestie pellentesque nunc. Sed sapien erat ultrices curabitur. Erat\n' +
                '                            id fringilla arcu condimentum fames.4',
            image: 'trip-s4-min.png'
        }
    ]
}
