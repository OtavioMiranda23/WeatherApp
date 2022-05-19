import styled, { css } from 'styled-components';
import { BsSun, BsArrowUp, BsArrowDown } from 'react-icons/bs';


export const Background = styled.main`
    //border: 1px solid magenta;
    max-width: 850px;
    margin: 3rem auto auto auto ;
    background-color: var(--shape);
    box-shadow: 0px 0px 20px #D7DBDD;
`

export const Cards = styled.div`
    //border: 1px solid magenta;
    width: 35vh;
    margin: 0 auto;
    display: block;
    background-image: linear-gradient(rgb(236, 240, 241, 0) , rgb(236, 240, 241, 1));
    //background-color: rgb(255, 85, 0, 0.2);
    img { 
        justify-content: center;
        display: flex;
        color: #ff5500;
    }
`

export const Line = styled.div`
    //border: 1px solid magenta;
    //background-color: var(--shape);
    
`

export const City = styled.div`
    //border: 1px solid magenta;
    font-size: 2rem;
    justify-content: center;
    text-align: center;
    color: var(--text-title) ;
    `

export const Temp = styled.div`
    //border: 1px solid magenta;
    font-size: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 5rem 0;
    color: var(--text-title);
    `

const iconSunCSS = css`
    //border: 1px solid magenta;
    width: 5rem;
    height: 5rem;
    color: var(--orange);  
    `
const iconMinMaxCSS = css`
    //border: 1px solid magenta;
    width: 3rem;
    height: 3rem;
    color: var(--shape);  
    `

export const Icon = styled(BsSun)`${ iconSunCSS }`

export const MinIcon = styled(BsArrowDown)`${ iconMinMaxCSS }`

export const MaxIcon = styled(BsArrowUp)`${ iconMinMaxCSS }`


export const MinMax = styled.div`
    background-color: #ff5500;
    color: var(--shape);

    font-size: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    padding-bottom: 1rem;
`    