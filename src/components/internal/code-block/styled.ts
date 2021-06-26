import styled from 'styled-components';
import hexToRgba from 'hex-to-rgba';

export default styled.div`
    pre {
        border: 1px solid ${({ theme }) => hexToRgba(theme.text, '0.3')} !important;
    }
`;
