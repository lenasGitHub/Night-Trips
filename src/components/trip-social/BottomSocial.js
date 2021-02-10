import React from 'react'
import {SocialsIcons} from "./SocialsIcons";

export function BottomSocial () {

    return (
        <div className="trip_text__social">
            <div className={'social__share-text'}>SHARE IT:</div>
            <div className={'social__share-icons'}>
                <SocialsIcons />
            </div>
        </div>
    )
}
