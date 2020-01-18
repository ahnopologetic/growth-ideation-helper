import React from "react"
import { useForm } from 'react-hook-form'
import { register } from "../serviceWorker"

type Props = {
    title: string;
    description?: string;
    questions: string[]
}

type InputProps = {
    label: string;
    ref: React.RefObject<HTMLInputElement>;
}
const BasicInput = React.forwardRef(({label, ref}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input name={label} ref={ref} />
        </>
    )
})

export const BasicForm = React.memo(({title, description, questions}: Props) => {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = (data: any) => console.log(data)
    return (
        <>
            <h3>{title}</h3>
            <h6>{description}</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    questions.map(question => <BasicInput label={question} ref={register({required: true, maxLength: 20})}/>)
                }
            </form>
        </>
    )
})