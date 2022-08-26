import { useFormik } from 'formik'
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/userSlice';
import background from '../assets/bg.jpg'
import { useFirstRender } from '../hooks';
import { inputsUI } from '../ui/inputsUI';
import { LoginCredentials } from '../models/User';
import { AppDispatch } from '../store';
import { useDispatch } from 'react-redux';

const initialValues: LoginCredentials = {
    email: '',
    password: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Nie poprawny format.').required('To pole jest wymagane.'),
    password: Yup.string().required('To pole jest wymagane.').matches(/^.{6,}$/, "Minimum 6 znaków")
})

export const Login = () => {

    const useAppDispatch: () => AppDispatch = useDispatch
    const dispatch = useAppDispatch()
    const isFirstRender = useFirstRender()
    const navigate = useNavigate()

    useEffect(() => {
        // behaviour of login/register fields UI
        inputsUI(formik, isFirstRender)
    })

    const onSubmit = (values: LoginCredentials) => {
        dispatch(login({
            email: formik.values.email,
            password: formik.values.password
        })).unwrap().then((e) => {
            navigate('/browse')
        }).catch((e) => {
            console.log(e);
        })
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <>
            <div className='signup-overlay'>
                <img className='signup-overlay__image' src={background} alt="" />
                <div className='signup-overlay__dark'></div>
            </div>
            <div className='signup-container'>
                <div className='signup-container__inner'>
                    <form className='signup-container__form' onSubmit={formik.handleSubmit}>
                        <h2>Zaloguj się</h2>
                        <div className='signup-container__control'>
                            <input type="text" id="email" {...formik.getFieldProps('email')} />
                            <label htmlFor="email">Email</label>
                            {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                        </div>
                        <div className='signup-container__control'>
                            <input type="password" id="password" {...formik.getFieldProps('password')} />
                            <label htmlFor="password">Hasło</label>
                            {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                        </div>

                        <Button type='submit' variant="contained" color='primary'>Zaloguj się</Button>

                    </form>
                    <p>Nie masz jeszcze konta w serwisie Netflix?</p>
                    <Link to='/register'>Zarejestruj się.</Link>
                </div>
            </div>
        </>
    )
}
