export default function Validation(data){
    let errors = {};

    if (!data.email.includes("@")){
        errors.e1 = "Email no es valido."
    }
    if (!data.email){
        errors.e2 = "Ingrese Email."
    }
    if (data.email.length > 35){
        errors.e3 = "El maximo son 35 caracteres."
    }
    if (!/\d/.test(data.password)){
        errors.p1 = "Debe incluir numeros."
    }
    if (data.password.length < 6){
        errors.p2 = "Debe contener un minimo de 6 caracterres."
    }
    if (data.password.length > 10){
        errors.p3 = "Debe contener un maximo de 10 caracteres."
    }
    return errors
};