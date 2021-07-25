import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components';

const StyledLanding = styled.div`
    line-height: 170%;
    .special-text {
        padding: 0 0.3rem;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => hexToRgba(theme.text, 0.3)};
        font-weight: 600;
        font-size: 0.9rem;
        padding-bottom: 0.1rem;
        &:hover {
            text-decoration-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.primary};
            transition: 0.15ms;
        }
    }
    box-shadow: 0px 100px 2px -100px ${({ theme }) => theme.text},
        0 -100px 2px -100px ${({ theme }) => theme.text};
    a {
        text-decoration: underline;
        text-underline-offset: 3px;
        text-decoration-color: ${({ theme }) => theme.primary};
        &:hover {
            text-decoration-color: ${({ theme }) => theme.primary};
            color: ${({ theme }) => theme.primary};
            transition: 0.15ms;
        }
        &:focus {
            color: ${({ theme }) => theme.primary};
        }
    }
`;

export default StyledLanding;
