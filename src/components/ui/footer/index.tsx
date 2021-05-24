import SFooter from './styled'
import './styles.scss'
import { Git, Donations, LinkedIn } from '../../../shared/icon-selector'

const Footer = (): JSX.Element => {
    return (
        <SFooter className="footer">
            <div className="footer__phantom" />
            <div className="footer__content">
                <a target="_blank" rel="noreferrer" href={Git.link}>
                    {Git.svg}
                </a>
                <a target="_blank" className="donations" rel="noreferrer" href={Donations.link}>
                    {Donations.svg}
                </a>
                <a target="_blank" rel="noreferrer" href={LinkedIn.link}>
                    {LinkedIn.svg}
                </a>
            </div>
        </SFooter>
    )
}

export default Footer
