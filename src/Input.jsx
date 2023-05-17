import { useState } from 'react';
import './input.css';

export default function Input() {
    const [validate, setValidate] = useState(true);
    const validation = (ss) => {
        if (ss == "") { return true; }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(ss);
    };
    return (
        <form className="input">
            <input type="mail" placeholder="Email address" onChange={(event) => {
                // console.log(event.target.value);
                // console.log(validation(event.target.value));
                if (validation(event.target.value)) {
                    setValidate(true);
                } else setValidate(false);
            }} />
            {!validate ? (<p className="error-text">Oops! Please check your email</p>) : null}
            <button type="submit" disabled={!validate}>Request Access</button>
        </form>
    )
}