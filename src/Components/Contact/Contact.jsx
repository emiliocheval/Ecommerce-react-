import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [confirmation, setConfirmation] = useState(null);

    const onSubmit = async (data) => {
        // Handle form submission logic
        console.log(data);

        // For demonstration purposes, assume successful form submission
        setConfirmation('Message Sent!');
    };

    return (
        <div className='contact-container'>
            <h1 className='contact-title'>Contact Us</h1>
            <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                <label className='contact-label'>
                    Namn:
                    <input
                        type='text'
                        name='name'
                        {...register('name', {
                            required: 'Namn är obligatoriskt',
                            minLength: {
                                value: 2,
                                message: 'This field should contain at least 2 characters'
                            }
                        })}
                        className='contact-input'
                    />
                    {errors.name && <p className='contact-error'>{errors.name.message}</p>}
                </label>
                <label className='contact-label'>
                    E-postadress:
                    <input
                        type='email'
                        name='email'
                        {...register('email', { required: 'This field is required and should be a valid email adress' })}
                        className='contact-input'
                    />
                    {errors.email && <p className='contact-error'>{errors.email.message}</p>}
                </label>
                <label className='contact-label'>
                    Meddelande:
                    <textarea
                        name='message'
                        {...register('message', { required: 'This field is required' })}
                        className='contact-input'
                    />
                    {errors.message && <p className='contact-error'>{errors.message.message}</p>}
                </label>
                <button type='submit' className='contact-button'>Skicka</button>
            </form>
            {confirmation && <p>{confirmation}</p>}
        </div>
    );
};

export default Contact;
