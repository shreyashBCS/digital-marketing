import React from 'react'
import image from '../assets/image.png'
function ImageSection() {
    return (
        <div>
            <img src={image} alt='IMAGE' style={{ width: "100%", marginTop: "10px" }} />
        </div>
    )
}

export default ImageSection
