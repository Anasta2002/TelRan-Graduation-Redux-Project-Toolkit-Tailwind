import React from 'react'
import PhoneInput from '../PhoneInput/PhoneInput'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import { submitOrder, submitPhoneNumber } from '../../../requests'
import s from './SubmitForm.module.css'
import { useLocation } from 'react-router-dom';

export default function SubmitForm({ name, className }) {
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

    const location = useLocation();
    const submit = data => {
        location.pathname === '/' ? 
        submitPhoneNumber(data) : 
        submitOrder(data)
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