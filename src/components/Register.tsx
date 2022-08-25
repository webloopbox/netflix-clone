import { useFormik } from 'formik'
import { useEffect } from 'react';
import * as Yup from 'yup'
import { register } from '../store/userSlice';
import background from '../assets/bg.jpg'
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom'
import { useFirstRender } from '../hooks';
import { inputsUI } from '../ui/inputsUI';
import { RegisterCredentials } from '../models/userCredentials';
import { useAppDispatch } from '../store';

const initialValues = {
    email: '',
    password: '',
    comfirmPassword: ''
}

const validationSchema = Yup.object({
    email: Yup.string().email('Nie poprawny format.').required('wymagane'),
    password: Yup.string().required('To pole jest wymagane.').matches(/^.{6,}$/, "Minimum 6 znaków"),
    comfirmPassword: Yup.string().required('To pole jest wymagane.').oneOf([Yup.ref("password"), null], "Podano inną wartość").matches(/^.{6,}$/, "Minimum 6 znaków"),
})

export const Register = () => {

    const dispatch = useAppDispatch()
    const isFirstRender = useFirstRender()
    const navigate = useNavigate()

    const onSubmit = (values: RegisterCredentials) => {
        console.log('submitted', values);
        dispatch(register({
            email: formik.values.email,
            password: formik.values.password,
            comfirmPassword: formik.values.comfirmPassword
        })).unwrap().then(() => {
            navigate('/browse')
        })
    }

    useEffect(() => {
        inputsUI(formik, isFirstRender)
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return <>
        <div className='signup-overlay'>
            <img className='signup-overlay__image' src={background} alt="" />
            <div className='signup-overlay__dark'></div>
        </div>
        <div className='signup-container'>
            <div className='signup-container__inner'>
                <form className='signup-container__form' onSubmit={formik.handleSubmit}>
                    <h2>Zarejestruj się</h2>
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
                    <div className='signup-container__control'>
                        <input type="password" id="comfirmPassword" {...formik.getFieldProps('comfirmPassword')} />
                        <label htmlFor="comfirmPassword">Potwierdź hasło</label>
                        {formik.touched.comfirmPassword && formik.errors.comfirmPassword ? <div className='error'>{formik.errors.comfirmPassword}</div> : null}
                    </div>

                    <Button type='submit' variant="contained" color='primary'>Zarejestruj się</Button>

                </form>
                <Link to='/login'>Wróć</Link>
            </div>
        </div>
    </>
}
