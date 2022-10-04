import {createI18n} from "vue-i18n";

const i18n = createI18n({
    locale: 'pt',
    messages: {
        pt: {
            password: 'Senha',
            create_account: "Criar conta",
            food_info: "Alimentação",
            physical_activity: "Atividade Física",
            diabetic_foot: "Pé diabético",
            chat_doris: "Quero falar com a Dóris",
            home: "Página Inicial",
            exit: "Sair",
            language: "Idioma"
        },
        es: {
            password: 'Contrasenã',
            create_account: "Crear cuenta",
            food_info: "Alimentación",
            physical_activity: "Actividad física",
            diabetic_foot: "Pie Diabético",
            chat_doris: "Quiero chatear con Dóris",
            home: "Página de inicio",
            exit: "Salir",
            language: "Idioma"
        }
    }
})

export default i18n