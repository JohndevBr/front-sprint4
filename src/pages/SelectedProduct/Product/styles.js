import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content:center;
    gap: 2rem;
    margin-bottom: 1rem;
    height:60vh;
`

export const Content = styled.div`
    width: 50%;
    h2 {
        text-align: justify;
        font-weight: 600;
        font-size: 2rem;
    }
    .product-size {

        p {
            font-weight: bold;
            span {
                font-weight: normal;
            }
        }
        
        margin-top: 3rem;
        div {
            display: flex;
            gap: 0.5rem;
            font-size: 1.2rem;
            margin-bottom: 2rem;
        }
        ul {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            li {
                padding: 1rem;
                border: 1px solid #ddd;
                border-radius: 0.5rem;
                cursor: pointer;
                    &:hover {
                        background-color: #000;
                        color: #fff;
                    }
            }
        }
        
    }

    .selected {
        background-color: #000;
        color: #fff;
    }

    .price-content {
        margin-top: 2rem;
        padding: 2rem;
        width: 500px;
        
        border: 1px solid #ddd;
        box-shadow: 0 0 1em #ddd;
        h2{
            color: red;
            padding:1rem;
            margin-top: 0.5rem;
        }

        .price-button {
            display: flex;
            flex-direction: column;
            align-items:center;
            button {
                width: 80%;
                padding: 0.5rem;
                margin-bottom: 1rem;
                background-color: #008844;
                border:none;
                color: #fff;
                text-transform: uppercase;
                &:last-child{
                    background-color: #ed1c24;
                    margin-bottom: 2rem;
                }
            }

        }
    }
`