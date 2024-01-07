import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';



function ContactForm() {
    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState("")

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        setTextarea(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Your Name:
                <input
                {...register('firstName', {
                    required: true,
                    minLength: 3,
                    maxLength: 30,
                })}
                type="text"
                name ="firstName"
                value={inputs.username || ""}
                onChange={handleChange}
                 />
            </label>
            <label>Email:
                <input
                type="email"
                name ="email"
                value={inputs.email || ""}
                onChange={handleChange} 
                />

            </label>
            <textarea value={textarea} onChange={handleChange} />

            <input type="submit" />

        </form>
    )






}

export default ContactForm();