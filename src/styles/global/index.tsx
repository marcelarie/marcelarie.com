import styled from 'styled-components'

const GlobalStyles = styled.div`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
`

export default GlobalStyles
