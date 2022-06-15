import { useFormik } from 'formik'
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { login } from '../store/userSlice';
import { useDispatch } from 'react-redux';
import background from '../assets/bg.jpg'
import { useFirstRender } from '../hooks';
import { inputsUI } from '../ui/inputsUI';


const initialValues = {
    email: '',
    password: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Nie poprawny format.').required('To pole jest wymagane.'),
    password: Yup.string().required('To pole jest wymagane.').matches(/^.{6,}$/, "Minimum 6 znaków")
})

export const Login = () => {

    const dispatch = useDispatch()
    const isFirstRender = useFirstRender()

    useEffect(() => {

        inputsUI(formik, isFirstRender)

    })

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
