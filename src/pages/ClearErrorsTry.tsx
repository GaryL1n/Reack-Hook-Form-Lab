import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

type FormInputs = {
    firstName: string;
    lastName: string;
    username: string;
};

const ClearErrorsTry: FC = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        clearErrors,
    } = useForm<FormInputs>();

    const onSubmit = (data: FormInputs) => {
        console.log(data);
    };
    const { onChange, onBlur, name, ref } = register('firstName');
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    ref={ref}
                />
                <input {...register('firstName')} />

                <input
                    {...register('lastName', {
                        required: '必填欄位',
                        minLength: { value: 5, message: '最少 5 個字' },
                    })}
                />
                {errors.lastName && <p>{errors.lastName.message}</p>}
                <input
                    {...register('username', {
                        required: '必填欄位',
                        minLength: { value: 6, message: '最少 6 個字' },
                    })}
                />
                {errors.username && <p>{errors.username.message}</p>}
                <button type="button" onClick={() => clearErrors('firstName')}>
                    Clear First Name Errors
                </button>
                <button
                    type="button"
                    onClick={() => clearErrors(['firstName', 'lastName'])}
                >
                    Clear First and Last Name Errors
                </button>
                <button type="button" onClick={() => clearErrors()}>
                    Clear All Errors
                </button>
                <input type="submit" />
            </form>
        </>
    );
};

export default ClearErrorsTry;
