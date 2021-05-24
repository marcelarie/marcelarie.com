import styled from 'styled-components'

type stylesI = {
    [name: string]: string
}

type FooterProps =  {
    height?: string
}

const styles: stylesI = {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: '0',
    bottom: '0',
    width: '100%',
    fontSize: '1.5rem',
    padding: '2vw;',
}

const phantom: stylesI = {
    display: 'block',
    padding: '20px',
    width: '100%',
}

const footer = styled.footer<FooterProps>`
    .footer {
        ${styles}
        background-color: ${({ theme }) => theme.background};
        height: ${({ height }) => height};
        border: 2px solid ${({ theme }) => theme.text};
    }
    .phantom {
        ${phantom}
        height: ${({ height }) => height};
    }
`

footer.defaultProps = {
    height: '70px',
}

export default footer
