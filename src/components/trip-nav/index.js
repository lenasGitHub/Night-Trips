import React, {useState} from 'react'

import {useOnOutsideClick} from "../helper/useOnOutsideClick";

import Sidebar from "../layout/Sidebar";

import {SearchSvg} from "../../svg/search";

export function TripNav() {
    const [sidebar, setSidebar] = useState(false);

    const { innerBorderRef } = useOnOutsideClick(() => {
        setSidebar(false)
    })
    return (
        <nav>
            <div className="container container--flex-center">
                <a href={'/'} className={'night-trip__logo'}>NT</a>
                <div className={'night-trip__menu'}>
                    <SearchSvg />
                    <button  className={'night-trip__button night-trip__button--with-stoke menu__button'} onClick={() => setSidebar(true)}>MENU
                    </button>
                </div>
            </div>

            <div ref={innerBorderRef}>
                <Sidebar
                    show={sidebar}
                    key="sidebar"
                />
            </div>
        </nav>
    )
}
