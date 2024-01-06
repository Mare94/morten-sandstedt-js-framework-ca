import { useState } from "react";
import { ReactDOM } from "react-dom/client";

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
                type="text"
                name ="username"
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