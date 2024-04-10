import React, { useState } from 'react';
import { loginFields, signupFields } from './constants/signUpInForm.jsx';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-up logic here using formData
        console.log(formData);
    };

    return (
        <div className="flex justify-center items-center w-72 bg">
            <form onSubmit={handleSubmit} className="max-w-md w-full px-4">
                {signupFields.map((field, index) => (
                    <div key={index} className="mb-4">
                        <label htmlFor={field.id} className="block text-white text-sm font-bold mb-2">{field.labelText}</label>
                        <input
                            type={field.type}
                            id={field.id}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            autoComplete={field.autoComplete}
                            required={field.isRequired}
                            placeholder={field.placeholder}
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
            </form>
        </div>
    );
};

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-in logic here using formData
        console.log(formData);
    };

    return (
        <div className="flex justify-center w-72 items-center">
            <form onSubmit={handleSubmit} className="max-w-md w-full px-4">
                {loginFields.map((field, index) => (
                    <div key={index} className="mb-4">
                        <label htmlFor={field.id} className="block text-white text-sm font-bold mb-2">{field.labelText}</label>
                        <input
                            type={field.type}
                            id={field.id}
                            name={field.name}
                            value={formData[field.name]}
                            onChange={handleChange}
                            autoComplete={field.autoComplete}
                            required={field.isRequired}
                            placeholder={field.placeholder}
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                ))}
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign In</button>
            </form>
        </div>
    );
};

export { SignUp, SignIn };
