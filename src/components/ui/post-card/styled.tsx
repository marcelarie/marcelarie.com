import styled from 'styled-components';

// TODO:  hover on date when select by params its working
const StyledPostCard = styled.div`
    a:hover {
        color: ${({ theme }) => theme.primary};
    }
`;

export default StyledPostCard;
