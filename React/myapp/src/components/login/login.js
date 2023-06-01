import { useEffect, useState } from 'react';
import Header from '../header/header';
import './login.css';

const Form = () => {

    const [firstName, setFirstName] = useState(' ');
    const [lastName, setLastName] = useState(' ');
    const [isValid, setIsValid] = useState(true);

    const fullName = firstName + ' ' + lastName;

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    }

    useEffect(() => {
        if (firstName.length >= 20 || firstName.length === null) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [firstName]);

    useEffect(() => {
        if (lastName.length >= 10 || lastName.length === null) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [lastName]);

    return (
        <>
            < Header />
            <div className='form'>
                <div className='firstname'>
                    <label>First Name : </label>
                    <input type='text' value={firstName} onChange={handleFirstNameChange} style={isValid ? { borderColor: 'green' } : { borderColor: 'red' }} />
                </div>

                <div className='lastname'>
                    <label>Last Name : </label>
                    <input type='text' value={lastName} onChange={handleLastNameChange} style={isValid ? { borderColor: 'green' } : { borderColor: 'red' }} />
                </div>

                <p>Your User ID will be : {fullName}</p>
            </div>
        </>
    )
}

export default Form;