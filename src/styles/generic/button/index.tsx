import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'
// import * as main from '../../color-palette';

type GenericButtonProps = {
    width?: string
}

const GenericButton = styled.button<GenericButtonProps>`
        color: ${({ theme }) => theme.text};
        text-align: center;
        padding: 0.2rem 0.4rem;
        cursor: pointer;
        border-radius: 3px;
        width: ${({ width }) => width};
        background-color: ${(props) => props.theme.background};
        &:hover {
            transition: 0.1s;
            border: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.3')};
            box-shadow: 5px 5px 1px ${({ theme }) => theme.primary};
            transition: 0.2s;
        }
        &:active {
            transition: 0.2s;
            box-shadow: 0px 0px 1px ${({ theme }) => theme.primary};
        }
    }
`

GenericButton.defaultProps = {
    width: '100px',
}

// background: ${({ theme }) =>
//     `linear-gradient(87.74deg, ${theme.mainDark} 5.63%, ${theme.main} 98.31%)`} ;
export default GenericButton
