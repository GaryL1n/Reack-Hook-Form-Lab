import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';

type FormInputs = {
    firstName: string;
};

const ControlTry = () => {
    const { control, handleSubmit } = useForm<FormInputs>();
    const onSubmit = (data: FormInputs) => console.log(data);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    render={() => <input type="text" />}
                    name="firstName"
                    control={control}
                    defaultValue="幹你娘"
                />

                <input type="submit" />
            </form>
        </>
    );
};

export default ControlTry;
