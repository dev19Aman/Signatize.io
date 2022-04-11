import React from 'react'
import { useSelector } from 'react-redux'

const ConfrenceBtn = () => {
    const {videoConferencebtn} = useSelector((state) => state.counter)
    return (
        <>
            {videoConferencebtn}
        </>
    )
}

export default ConfrenceBtn
