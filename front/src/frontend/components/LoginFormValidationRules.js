export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = "Username is required";
    }
    if (!values.password) {
        errors.password = "Password is required";
    }
    if (values.email !== values.password){
        errors.password = "Passwoed is incorrect";
    }
    return errors;
}
