import React from 'react'

export const FooterContactItem = ({text, icon, alt}) => {
    return (
        <div className="footer-contact-item">
            <img src={icon} alt={alt}/>
            <p>{text}</p>
        </div>
    )
}
