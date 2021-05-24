import styled from 'styled-components'

export default styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid ${({ theme }) => theme.text};
`
