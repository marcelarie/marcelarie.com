import React from 'react'
import SFooter from './styled'

const Footer = () => {
    return (
        <SFooter height="90px">
            <div className="phantom" />
            <div className="footer">
                <a href="#0">Git</a>
                <a href="#0">Donations</a>
                <a href="#0">etc</a>
            </div>
        </SFooter>
    )
}

export default Footer
