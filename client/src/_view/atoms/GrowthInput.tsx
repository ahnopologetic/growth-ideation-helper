import { Input } from '@class101/ui';
import React from 'react';

type Props = {
    name: string;
    errors: any
}
export const GrowthInput = React.forwardRef<any, Props>(({ name, errors }, ref) => {
    return (
        <>
            <Input name={name} ref={ref} />
            {errors[name] && <p>this field is required</p>}
        </>
    )
})