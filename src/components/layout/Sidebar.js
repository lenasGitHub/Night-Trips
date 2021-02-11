import React, { useRef } from "react";
import { useTransition, useChain, animated, config } from "react-spring";


export default ({show}) => {
    const sidebarRef = useRef();
    const transition = useTransition(show, null, {
        from: {
            transform: "translateX(-100%)"
        },
        enter: {
            transform: "translateX(0)"
        },
        leave: {
            transform: "translateY(-100%)"
        },
        unique: true,
        ref: sidebarRef
    });

    const items = ["Night Trip Home", "About Trip", "Contact Us", "Night Trip Info"];
    const itemsRef = useRef();
    const trail = useTransition(show ? items : [], item => item, {
        from: {
            opacity: 0,
            transform: "translateX(-50px)"
        },
        enter: {
            opacity: 1,
            transform: "translateX(0)"
        },
        leave: {
            opacity: 0,
            transform: "translateX(-25px)"
        },
        ref: itemsRef,
        config: config.wobbly,
        trail: 100,
        unique: true
    });

    useChain(
        show ? [sidebarRef, itemsRef] : [itemsRef, sidebarRef],
        show ? [0, 0.25] : [0, 0.6]
    );

    return transition.map(({ item, key, props }) =>
        item ? (
            <animated.div key={key} style={props} className="sidebar">
                {trail.map(({ item, key, props }) => (
                    <animated.div key={item} style={props} className="night-trip__button">
                        {item}
                    </animated.div>
                ))}
            </animated.div>
        ) : null
    );
};
