import * as yup from 'yup';

export class ValidationVars {
    constructor(stores) {
        this.users = stores.UsersStore.usersFromLocal
    }

    users = []

    fieldsRegSample = [ 
        {name: "secondName", nameForLegend: "Фамилия", type: 'text'}, 
        {name: "firstName", nameForLegend: "Имя", type: 'text'},
        {name: "login", nameForLegend: "Логин", type: 'text'}, 
        {name: "password", nameForLegend: "Пароль", type: 'password'}, 
        {name: "email", nameForLegend: "Электронная почта", type: 'email'}
    ]

    fieldsLoginSample   = [ 
        {name: "login", nameForLegend: "Логин", type: 'text'}, 
        {name: "password", nameForLegend: "Пароль", type: 'password'}
    ]

    regDataSample = {
        firstName: '',
        secondName: '',

        login: '',
        password: '',
    
        email: ''
    }

    loginDataSample = {
        login: '',
        password: ''
    }


    loginSchema = yup.object().shape({
        login: yup
            .string()
            .required("Поле обязательно к заполнению"),

        password: yup
            .string()
            .required("Поле обязательно к заполнению"),
    })

    regSchema = yup.object().shape({
        firstName: yup
            .string()
            .required("Поле обязательно к заполнению")
            .matches(/^([^0-9]*)$/, "Имя не должно содержать чисел"),

        secondName: yup
            .string()
            .required("Поле обязательно к заполнению")
            .matches(/^([^0-9]*)$/, "Фамилия не должна содержать чисел"),

        login: yup
            .string()
            .min(8, "Логин должен быть не меньше 8 символов")
            .max(16, "Логин должен быть не больше 16 символов")
            .test('isAvailableLogin', 'Логин занят', 
                (login) => {
                    const matches = this.users.find(user => user.login === login)

                    return !matches
            })
            .required("Поле обязательно к заполнению"),

        password: yup
            .string()
            .min(8, "Пароль должен быть не меньше 8 символов")
            .max(24, "Пароль должен быть не больше 24 символов")
            .required("Поле обязательно к заполнению"),

        email: yup
            .string()
            .email("Введите корректную почту")
            .required("Поле обязательно к заполнению"),
    })
}