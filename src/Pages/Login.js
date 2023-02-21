import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Form } from 'react-bootstrap';

const initialState = {
    Username: '',
    Password: ''
}

const Login = () => {

    const [values, setValues] = useState(initialState)
    const navigate = useNavigate()

    const handlechange = (e) => {
        const { name, value } = e.target
        setValues((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const onsubmit = (e) => {
        e.preventDefault()
        if (values.Username === 'testuser' && values.Password === 'test123') {
            setTimeout(() => {
                navigate('/moviesdata')
            }, 4000)
        } else {
            console.log('error')
        }
    }

    const toastmsg = () => {
        if (values.Username === 'testuser' && values.Password === 'test123') {
            toast.success('Login Successful!', {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            });
        } else {
            toast.error('Invalid Credentials', {
                position: "top-center",
                autoClose: 3000,
                theme: "light",
            });
        }
    }

    return (
        <>
            <div className='main d-flex  flex-column justify-content-center align-items-center  '>
                
                <Form onSubmit={onsubmit} className='element rounded p-4 '>
                <h2 className=' text-center bg-white rounded' >Login</h2>    
                <Form.Group className='mb-3' >
                        <Form.Label >Username</Form.Label>
                        <Form.Control type='text' name='Username' onChange={handlechange} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label >Password</Form.Label>
                        <Form.Control type='password' name='Password' onChange={handlechange} />
                    </Form.Group>
                    <Button type="submit" onClick={toastmsg} className="p-1 w-100">Submit</Button>
                </Form>
                <ToastContainer />
            </div>
        </>
    )
}
export default Login
