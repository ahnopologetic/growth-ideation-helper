import { Button, Headline1, Subtitle1 } from '@class101/ui'
import React, { useCallback, useState } from 'react'
import { useForm, ValidationOptions } from 'react-hook-form'
import styled from 'styled-components'
import { GrowthSection } from '../atoms/GrowthSection'
import { GrowthSubmit } from '../atoms/GrowthSubmit'
import { GrowthSlide } from '../atoms/GrowthSlide'

export type Inquiry = {
    title: string;
    description?: string;
    rule: ValidationOptions;
}

type Props = {
    title: string;
    description?: string;
    inquiries: Inquiry[]
}
export const GrowthForm = React.memo(({ title, description, inquiries }: Props) => {
    const [formStep, updateFormStep] = useState<number>(0);
    const totalNumberOfInquries = inquiries.length;
    const handleNext = useCallback(() => {
        if (inquiries.length - 1 <= formStep) {
            return;
        }
        updateFormStep(step => step + 1)
    }, [])
    const handlePrev = useCallback(() => {
        if (formStep === 0) {
            return;
        }
        updateFormStep(step => step - 1)
    }, [])
    const { register, handleSubmit, errors, getValues } = useForm()
    const handleReq = useCallback(async () => {
        const payload = {
            title,
            author: 'humphrey',
            ...getValues()
        }
        await fetch('http://localhost:3001/', { method: 'POST', body: JSON.stringify(payload) })
    }, [])
    const onSubmit = (data: any) => {
        handleReq()
        console.info(data)
    }
    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <Headline1>{title}</Headline1>
            <Subtitle1>{description}</Subtitle1>
            <SectionContainer>
                <GrowthSlide index={formStep} totalLength={totalNumberOfInquries} handleNext={handleNext} handlePrev={handlePrev}>
                    {
                        inquiries.map(({ title, description, rule }) => <GrowthSection title={title} description={description} register={register(rule)} errors={errors} />)
                    }
                </GrowthSlide>
            </SectionContainer>
            {
                formStep === totalNumberOfInquries - 1 ? <GrowthSubmit buttonText='확인' /> : ''
            }
        </Container>
    )
})

const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 8px 16px;
    min-width: 50vw;
    min-height: 40vh;
`

const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 4px 0;
    width: 100%;
`