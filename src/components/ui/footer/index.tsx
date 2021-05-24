import SFooter from './styled'

const Footer = (): JSX.Element => {
    return (
        <SFooter>
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
