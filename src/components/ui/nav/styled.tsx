import styled from 'styled-components'
import hexToRgba from 'hex-to-rgba'

export default styled.nav`
    a button {
        color: ${({ theme }) => theme.text};
    }
    .navfocus {
        button {
            border: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.3')} !important;
            border-radius: 3px;
            color: ${({ theme }) => theme.primary} !important;

            box-shadow: 5px 4px ${({ theme }) => hexToRgba(theme.text, '0.2')} !important;
            font-weight: 600 !important;
        }
    }
`
