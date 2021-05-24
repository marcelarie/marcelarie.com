import styled from 'styled-components'

type FooterProps = {
    height?: string
}

const footer = styled.footer<FooterProps>`
    .footer {
        &__content {
            background-color: ${({ theme }) => theme.background};
            height: ${({ height }) => height};
                    .donations {
                        fill: ${({ theme }) => theme.text};
                    }
            a {
                svg {
                    stroke: ${({ theme }) => theme.text};
                    height: 1.5rem;
                }
            }
        }
        &__phantom {
            height: ${({ height }) => height};
        }
    }
`

footer.defaultProps = {
    height: '70px',
}

export default footer
