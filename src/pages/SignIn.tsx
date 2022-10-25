import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import { User } from '../models/login'
import { signIn } from '../services/userService'
import InputForm from '../components/InputForm'

const AVATAR = "https://www.melivecode.com/users/cat.png"

function SignIn() {
    const [fname, setFname] = useState<string>('')
    const [lname, setLname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [passwordver, setPasswordver] = useState<string>('')

    const [alertVariant, setAlertVariant] = useState<string>('danger')
    const [alertText, setAlertText] = useState<string>('')

    const submit = () => {
        if (password !== passwordver) {
            setAlert("Password mismatch", 'danger')
            return
        }

        const user: User = {
            fname,
            lname,
            username,
            password,
            email,
            avatar: AVATAR
        }

        signIn(user)
            .then((v) => {
                setAlert("User successfully created", 'success')
                window.location.reload();
            })
            .catch((e) => {
                setAlert(JSON.stringify(e), 'danger')
            })
    }

    const setAlert = (text: string, variant: string) => {
        setAlertText(text)
        setAlertVariant(variant)
    }

    const showAlert = () => alertText ? true : false

    return (
        <div className='container p-2 text-sans'>
            <h1 className='text-center'>Sign In</h1>
            <form>
                <InputForm
                    className='form-group m-2'
                    fieldName='First Name'
                    fieldId='fname'
                    fieldType='text'
                    setter={setFname}
                />
                <InputForm
                    className='form-group m-2'
                    fieldName='Last Name'
                    fieldId='lname'
                    fieldType='text'
                    setter={setLname}
                />
                <InputForm
                    className='form-group m-2'
                    fieldName='Email'
                    fieldId='email'
                    fieldType='email'
                    setter={setEmail}
                />
                <InputForm
                    className='form-group m-2'
                    fieldName='Username'
                    fieldId='username'
                    fieldType='text'
                    setter={setUsername}
                />
                <InputForm
                    className='form-group m-2'
                    fieldName='Password'
                    fieldId='password'
                    fieldType='password'
                    setter={setPassword}
                />
                <InputForm
                    className='form-group m-2'
                    fieldName='Password confirmation'
                    fieldId='passwordver'
                    fieldType='password'
                    setter={setPasswordver}
                />
                <Alert variant={alertVariant} show={showAlert()}>
                    {alertText}
                </Alert>
                <div className='text-center'>
                    <Button
                        variant='dark'
                        className='m-2'
                        onClick={submit}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn