import styled from 'styled-components'

const StyledProjectCard = styled.div`
    a:hover {
        color: ${({ theme }) => theme.primary};
    }
    i {
        color: ${({ theme }) => theme.text};
    }
`
export default StyledProjectCard
