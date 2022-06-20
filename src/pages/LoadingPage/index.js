import React, { useState } from 'react'

import {
  LoadingPageStyled,
  DotLoading,
} from './loadingPage.styled'

// import Popup from '../../components/Popup'

// src: https://codepen.io/sandeshdamkondwar/pen/zvwvPy
export default function LoadingPage() {
  // const [trigger, setTrigger] = useState(false)

  return (
    <LoadingPageStyled>
        <DotLoading />
    </LoadingPageStyled>

    // <>
    //   <button onClick={() => setTrigger(!trigger)}> Open Popup</button>
    //   <Popup trigger={trigger} setTrigger={setTrigger}>
      

    //   </Popup>
    // </>
  )
}
