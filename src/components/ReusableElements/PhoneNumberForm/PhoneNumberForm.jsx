import React from 'react'
import PhoneInput from '../PhoneInput/PhoneInput'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'

export default function PhoneNumberForm({name, className }) {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        mode: 'onBlur',
    })
// console.log(errors)
    const phoneNumberValidation = register('number: ', {
            required: '*This field is required. Please add your phone number',
            pattern: {
                value: /^\+49\d{1,11}$/,
                message: '*Please enter a valid german phone number',
            },
    })

    const submit = data => {
        console.log(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='bg-transparent'>
            <PhoneInput {...phoneNumberValidation} />
            {errors.number && 
                <p>{errors.number.message}</p>
            }
            <Button name={name} className={className} />
        </form>
    )
}
