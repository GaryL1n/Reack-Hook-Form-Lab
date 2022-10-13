import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

type FormInputs = {
    test: string;
    test1: string;
};

const GetValuesTry: FC = () => {
    const { register, getValues } = useForm<FormInputs>();
    return (
        <>
            <form>
                <input {...register('test')} />
                <input {...register('test1')} />

                <button
                    type="button"
                    onClick={() => {
                        const values = getValues(); // { test: "test-input", test1: "test1-input" }
                        const singleValue = getValues('test'); // "test-input"
                        const multipleValues = getValues(['test', 'test1']);
                        // ["test-input", "test1-input"]
                        console.log('1 ' + values);
                        console.log('2 ' + singleValue);
                        console.log('3 ' + multipleValues);

                    }}
                >
                    Get Values
                </button>
            </form>
        </>
    );
};

export default GetValuesTry;
