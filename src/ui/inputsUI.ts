import { Fields } from "../models/LoginFields"

// login/register labels transitions after onclick
export const inputsUI = (formik: any, isFirstRender: boolean) => {

    const inputs = document.querySelectorAll('.signup-container__control > input') as NodeListOf<HTMLElement>
    const labels = document.querySelectorAll('.signup-container__control > label') as NodeListOf<HTMLElement>

    const fields: Fields = {
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
        for (const prop in fields) {
            if (!fields[prop as keyof Fields]) continue
            if (fields[prop as keyof Fields].input !== document.activeElement && formik.values[fields[prop as keyof Fields].type] == '') {
                fields[prop as keyof Fields].label.style.transform = 'translate(25px, -50%)'
                fields[prop as keyof Fields].label.style.fontSize = '16px'
            }
        }
    }

    for (const prop in fields) {
        if (!fields[prop as keyof Fields]) continue
        if (formik.values[fields[prop as keyof Fields].type].length === 1) {
            labels[fields[prop as keyof Fields].key].style.transform = 'translate(15px, -15px)'
            labels[fields[prop as keyof Fields].key].style.fontSize = '12px'
        }
    }
}
