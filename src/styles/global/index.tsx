import styled from 'styled-components'

const GlobalStyles = styled.div`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};


    .main-container {
    max-width: 920px;
    padding: 0 1rem 2rem;
    margin: 0 auto;
    }
`

export default GlobalStyles
