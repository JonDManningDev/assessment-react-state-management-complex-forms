import React, { useState } from "react";

function RSVPForm() {

    const defaultFormState = {
        name: "",
        age: "",
        newMember: false,
        comment: "",
    };

    const [formData, setFormData] = useState({...defaultFormState});

    const handleChange = ({target}) => {
        const value = target.type === "checkbox" ? target.checked : target.value;
        setFormData({
            ...formData,
            [target.name]: value,
        });
    };

    const handleSubmit = (event) => {
        const { name, age, newMember, comment } = formData;
        event.preventDefault();
        console.log(name, age, newMember, comment);
        setFormData({...defaultFormState});
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Enter your name
                <input 
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />
            </label>
            <label htmlFor="age">
                What is your age?
                <select 
                    id="age"
                    name="age"
                    onChange={handleChange}
                    value={formData.age}
                >
                    <option value="">Select an option</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                    <option value="0-19">0-19</option>
                    <option value="20-39">20-39</option>
                    <option value="40-59">40-59</option>
                    <option value="60+">60+</option>
                </select>
            </label>
            <label htmlFor="newMember">
                New member? Please check box.
                <input 
                    id="newMember"
                    type="checkbox"
                    name="newMember"
                    onChange={handleChange}
                    checked={formData.newMember}
                    value="newMember"
                />
            </label>
            <label htmlFor="comment">
                Add comment:
                <input 
                    id="comment"
                    type="text"
                    name="comment"
                    onChange={handleChange}
                    value={formData.comment}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default RSVPForm;
