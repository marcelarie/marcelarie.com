import styled from 'styled-components'

const StyledLanding = styled.div`
    .landing__welcome {
        box-shadow: 0px 68px 2px -68px ${({theme}) => theme.text },
            0 -68px 2px -68px ${({ theme }) => theme.text};
        a {
            text-decoration-color: ${({ theme }) => theme.primary};
            &:hover {
                text-decoration-color: ${({ theme }) => theme.primary};
                transition: 0.15ms;
            }
            &:active {
                color: ${({ theme }) => theme.primary};
            }
        }
    }
`

export default StyledLanding
