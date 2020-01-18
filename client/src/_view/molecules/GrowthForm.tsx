import React from 'react'
import { useForm } from 'react-hook-form'
import { GrowthSubmit } from '../atoms/GrowthSubmit'
import { GrowthSection } from '../atoms/GrowthSection'
import styled from 'styled-components'

export type Inquiry = {
    title: string;
    description?: string;
}

type Props = {
    title: string;
    description?: string;
    inquiries: Inquiry[]
}
export const GrowthForm = React.memo(() => {
    const { register, handleSubmit, errors } = useForm()
    const onSubmit = (data: any) => console.info(data)
    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <GrowthSection title='가연이 안녕?' ref={register} errors={errors} />
            <GrowthSection title='가연이 안녕?' ref={register} errors={errors} />
            <GrowthSection title='가연이 안녕?' ref={register} errors={errors} />
            <GrowthSection title='가연이 안녕?' ref={register} errors={errors} />
            <GrowthSubmit buttonText='확인' />
        </Container>
    )
})

const Container = styled.form`
    display: flex;
    flex-direction: column;
`