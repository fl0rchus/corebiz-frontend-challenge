import React from 'react'

export const FooterContactItem = ({text, icon, alt}) => {
    return (
        <div className="footer_contact-div">
            <img src={icon} alt={alt} className="footer__contact-img"/>
            <p>{text}</p>
        </div>
    )
}
