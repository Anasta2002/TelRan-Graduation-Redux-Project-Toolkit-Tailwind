import React from 'react'
import PhoneInput from '../PhoneInput/PhoneInput'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import { submitPhoneNumber } from '../../../requests'
import s from './PhoneNumberForm.module.css'

export default function PhoneNumberForm({name, className }) {
    const { register, formState: { errors }, handleSubmit, reset } = useForm({
        mode: 'onSubmit',
    })

    const phoneNumberValidation = register('mobile_number', {
            required: '*This field is required. Please add your phone number',
            pattern: {
                value: /^(?:\+49|0049|0)?\s?\d{2,5}\s?\d{4,8}$/,
                message: '*Please enter a valid german phone number',
            },
    })

    const submit = data => {
        submitPhoneNumber(data)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={s.phone_input}>
            <PhoneInput {...phoneNumberValidation} />
            {errors.mobile_number && 
                <p>{errors.mobile_number.message}</p>
            }
            <Button name={name} className={className} />
        </form>
    )
}