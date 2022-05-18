import { useFormik } from 'formik'
import { useEffect } from 'react';
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { login } from '../store/userSlice';
import { useDispatch } from 'react-redux';

const initialValues = {
    email: '',
    password: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Nie poprawny format.').required('wymagane'),
    password: Yup.string().required('To pole jest wymagane.')
})

export const Login = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('login')
    }, [])

    const onSubmit = (values) => {
        dispatch(login({
            email: formik.values.email,
            pass: formik.values.password
        }))
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div className='form-wrapper'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Zaloguj się</h2>
                <div className='form-control'>
                    <p>Email:</p>
                    <input type="text" id="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>
                <div className='form-control'>
                    <p>Hasło:</p>
                    <input type="password" id="password" {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                </div>
                <button type='submit'>Submit</button>
            </form>
            <Link to='/register' className='register-btn'>Zarejestruj się</Link>
        </div>
    )
}
