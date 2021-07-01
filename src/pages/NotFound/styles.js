import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    background: #bfe9f0;
    text-align: center;
    padding: 0 5rem 2rem 5rem;
    
    h2 {
        margin: 1rem;
        font-weight: bold;
        font-size: 2rem;
        text-transform: uppercase;
        padding: 1rem;
    }
    p {
        padding: 0.5rem;
        text-align: center;
        margin-bottom: 2rem;
    }
    a {
        font-weight: bold;
        text-decoration: underline;
        font-size: 1.2rem;
        padding: 2rem;
        margin-top: 2rem;
        &:hover {
            color: rgba(31, 31, 31, 0.42);
        }
    }
`

export const ImgContent = styled.div`
    margin-left: -3.7rem;
`
