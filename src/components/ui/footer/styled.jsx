import styled from 'styled-components'

const styles = {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: '0',
    bottom: '0',
    width: '100%',
    fontSize: '1.5rem',
    padding: '2vw;'
}

const phantom = {
    display: 'block',
    padding: '20px',
    width: '100%',
}

const footer = styled.footer`
    .footer {
        ${styles}
        background-color: ${({ theme }) => theme.background};
        height: ${({ heigth }) => heigth};
        border: 2px solid ${({ theme }) => theme.text};
    }
    .phantom {
        ${phantom}
        height: ${({ heigth }) => heigth};
    }
`

footer.defaultProps = {
    heigth: '80px',
}

export default footer
