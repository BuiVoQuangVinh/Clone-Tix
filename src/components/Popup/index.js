import React from 'react'

import {
    PopupStyled,
    Blur,
    PopupInner,
} from './Popup.styled'

export default function Popup(props) {

    const handlePopup = props.handlePopup
    const trigger = props.trigger

     
    return (trigger) ? (
        <PopupStyled >
            <Blur
                onClick={() => handlePopup(!trigger)}
            ></Blur>

            <PopupInner>
               {props.children}
            </PopupInner>
        </PopupStyled>
    ) : "";
}
