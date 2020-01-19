import { Input } from '@class101/ui';
import React from 'react';
import styled from 'styled-components';

type Props = {
    name: string;
    errors: any
    register?: any
}
export const GrowthInput = React.memo(({ name, errors, register }: Props) => {
    return (
        <Container>
            <StyledInput name={name} ref={register} />
            {errors[name] && <p>this field is required</p>}
        </Container>
    )
})

const Container = styled.div`
    max-width: 50vw;
    width: 100%;
`

const StyledInput = styled.input`
    height: 48px;
    letter-spacing: -0.2px;
    margin: 0;
    border: solid 1px #dde0e2;
    width: 100%;
    color: #3e4042;
    box-sizing: border-box;
    padding: 0 16px;
    border-radius: 3px;
    font-size: 1rem;
    &:hover {
        border: solid 1px #bdc2c6;
    }
    &:focus {
        outline: none;
    border-color: #3e4042;
    }
`