import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'

import Slider from 'react-slick'

import {BottomSocial} from "../trip-social/BottomSocial";

import {DotsSvg} from "../../svg/dots";
import {Shape2Svg} from "../../svg/shape2";
import {Shape3Svg} from "../../svg/shape3";
import {ArrowLeftSvg} from "../../svg/arrow-left";
import {ArrowRightSvg} from "../../svg/arrow-right";


function SampleNextArrow(props) {
    const {onClick} = props
    return (
        <button className='trip_img_arrow trip_img_arrow--left' onClick={onClick} aria-label={'arrow-right'}>
            <ArrowRightSvg/>
        </button>
    )
}

function SamplePrevArrow(props) {
    const {onClick} = props
    return (
        <button className='trip_img_arrow trip_img_arrow--right' onClick={onClick} aria-label={'arrow-left'}>
            <ArrowLeftSvg/>

        </button>
    )
}

export function TripLists({tripsList, tripsContent}) {
    const [active, setActive] = useState(1)

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    return (
        <section className={'night-trip__pick-section'}>
            <Shape2Svg/>
            <Shape3Svg/>
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
                                        <Slider {...settings}>
                                            <img src={`/assets/images/${c.image}`} alt={'trip'} width="430"
                                                 height="550"/>
                                            <img src={`/assets/images/trip-2-min.webp`} alt={'trip'} width="430"
                                                 height="550"/>
                                            <img src={`/assets/images/trip-4-min.webp`} alt={'trip'} width="430"
                                                 height="550"/>
                                        </Slider>
                                    </div>
                                    <div className={'trip_img-title'}>
                                        <div className={'trip_num'}>{c.number}</div>
                                        <div className={'trip_title-text'}>GRAND DUNES LANDSCAPE</div>
                                    </div>
                                </div>
                                <div className={'trip_text'}>
                                    <h4>{c.title}</h4>
                                    <p>{c.desc}</p>
                                    <button
                                        className={'night-trip__button night-trip__button--block night-trip__button--with-stoke offer__button'}>
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
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the',
            image: 'trip-s2-min.png'
        },
        {
            id: 2,
            number: '02.',
            title: 'Chill Adventure2',
            desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is',
            image: 'trip-s1-min.png'
        },
        {
            id: 3,
            number: '03.',
            title: 'Chill Adventure3',
            desc: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from BC',
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
