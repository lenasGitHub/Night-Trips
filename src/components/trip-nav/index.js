import React from 'react'

export function TripNav() {
    return (
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
    )
}
