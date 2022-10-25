import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'
import InputForm from '../components/InputForm'
import { logIn } from '../services/userService'

function LogIn() {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const [alertVariant, setAlertVariant] = useState<string>('danger')
    const [alertText, setAlertText] = useState<string>('')

    const submit = () => {
        logIn(username, password)
            .then((v) => {
                setAlert("User logged in successfully", 'success')
                window.location.reload();
            })
            .catch((e) => {
                setAlert(e.code, 'danger')
            })
    }

    const setAlert = (text: string, variant: string) => {
        setAlertText(text)
        setAlertVariant(variant)
    }

    const showAlert = () => alertText ? true : false

    return (
        <div className='container p-2 text-monaco'>
            <h1 className='text-center'>Log In</h1>
            <form>
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

export default LogIn