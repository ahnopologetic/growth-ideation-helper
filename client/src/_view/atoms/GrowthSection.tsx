import { Headline2, Subtitle1 } from '@class101/ui';
import React from 'react';
import { ElementLike } from 'react-hook-form';
import styled from 'styled-components';
import { GrowthInput } from './GrowthInput';

type Props = {
    title: string;
    description?: string;
    inputName?: string
    errors: any;
}
export const GrowthSection = React.forwardRef<any, Props>(({ title, description, inputName, errors }, ref) => (
    <Container>
        <Headline2>{title}</Headline2>
        <Subtitle1>{description}</Subtitle1>
        <GrowthInput name={inputName ? inputName : title} ref={ref} errors={errors} />
    </Container>
))
const Container = styled.div`
    display: flex;
    height: 150px;
    flex-direction: column;
    align-items: start;
    padding: 8px 16px;

    & > * {
        margin-bottom: 4px;
    }
`

const StyledInput = styled.input`
    width: 100%;
    height: 1.5rem;
    padding: 8px 4px;
    font-size: 1.2rem;
`