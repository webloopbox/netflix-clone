import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    email: '',
    password: ''
}

const onSubmit = (values) => {
    console.log('submitted', values);
}

// const validate = (values) => {
//     let errors = {}

//     if (!values.email) {
//         errors.email = 'Pole nie może być puste.'
//     } else if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(values.email)) {
//         errors.email = 'Niepoprawny adres email.'
//     }

//     if (!values.password) {
//         errors.password = 'Pole nie może być puste.'
//     }

//     return errors
// }

const validationSchema = Yup.object({
    email: Yup.string().email('Nie poprawny format.').required('wymagane'),
    password: Yup.string().required('To pole jest wymagane.')
})

export const Login = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })

    // console.log("visited fields", formik.touched);

    return (
        <div className='form-wrapper'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Zaloguj się</h2>
                <div className='form-control'>
                    <input type="text" id="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>
                <div className='form-control'>
                    <input type="password" id="password" {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
