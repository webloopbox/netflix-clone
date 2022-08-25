// login/register labels transitions after onclick

export const inputsUI = (formik, isFirstRender) => {

    const inputs = document.querySelectorAll('.signup-container__control > input')
    const labels = document.querySelectorAll('.signup-container__control > label')

    const base = {
        login: {
            key: 0,
            input: inputs[0],
            label: labels[0],
            type: 'email'
        },
        password: {
            key: 1,
            input: inputs[1],
            label: labels[1],
            type: 'password'
        },
        comfirmPassword: inputs[2] && {
            key: 2,
            input: inputs[2],
            label: labels[2],
            type: 'comfirmPassword'
        }
    }

    if (!isFirstRender) {
        for (const prop in base) {
            if (!base[prop]) continue
            if (base[prop].input !== document.activeElement && formik.values[base[prop].type] == '') {
                base[prop].label.style.transform = 'translate(25px, -50%)'
                base[prop].label.style.fontSize = '16px'
            }
        }
    }

    for (const prop in base) {
        if (!base[prop]) continue
        if (formik.values[base[prop].type].length === 1) {
            labels[base[prop].key].style.transform = 'translate(15px, -15px)'
            labels[base[prop].key].style.fontSize = '12px'
        }
    }
}
