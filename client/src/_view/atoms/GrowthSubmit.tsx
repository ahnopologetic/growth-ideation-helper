import React from 'react'
import styled from 'styled-components'

type Props = {
    buttonText: string
}
export const GrowthSubmit = ({buttonText}: Props) => {
    return (<StyledGrowthSubmitButton type='submit'>{buttonText}</StyledGrowthSubmitButton>)
}

const StyledGrowthSubmitButton = styled.button`
    width: 120px;
    height: 40px;
    background-color: rgb(253, 126, 20);
    padding: unset;
    border-color: transparent;
    border-radius: 5px;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
`