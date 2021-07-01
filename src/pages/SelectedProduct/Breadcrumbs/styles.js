import styled from 'styled-components'

export const Container = styled.ul`
    display: flex;
    width: 80%;
    margin: 0 auto;

    li {
        padding: 1rem;
        
        &:last-child {
            font-weight: 600;
        }
    }
`