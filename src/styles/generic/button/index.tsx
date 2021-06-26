import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

type GenericButtonProps = {
    width?: string;
};

const GenericButton = styled.button<GenericButtonProps>`
        color: ${({ theme }) => theme.text};
        text-align: center;
        padding: 0.2rem 0.4rem;
        cursor: pointer;
        border-radius: 3px;
        width: ${({ width }) => width};
        background-color: ${props => props.theme.background};
        border: 1px solid transparent !important;
        &:hover {
            transition: 0.1s;
            border: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.3')} !important;
            box-shadow: 5px 5px 0px ${({ theme }) => theme.primary} ;
            transition: 0.2s;
        }
        &:active {
            transition: 0.2s;
            box-shadow: 0px 0px 0px ${({ theme }) => theme.primary};
        }
    }
`;

GenericButton.defaultProps = {
    width: '100px',
};

export default GenericButton;
