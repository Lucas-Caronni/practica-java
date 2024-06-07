document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('.contact-form');
    let fullName = document.getElementById('fullName');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let password = document.getElementById('password');
    let rePassword = document.getElementById('rePassword');

    let fullNameError = document.querySelector('.invalid-feedback.fullName');
    let emailError = document.querySelector('.invalid-feedback.email');
    let phoneError = document.querySelector('.invalid-feedback.phone');
    let passwordError = document.querySelector('.invalid-feedback.password');
    let rePasswordError = document.querySelector('.invalid-feedback.rePassword');

    function validateField(field, errorElement, validationFn) {
        field.addEventListener('input', function() {
            validationFn();
        });
        field.addEventListener('blur', function() {
            validationFn();
        });
        field.addEventListener('focus', function() {
            errorElement.textContent = '';
        });
    }

    function validateFullName() {
        if (fullName.value.length === 0) {
            fullNameError.textContent = 'El nombre completo es obligatorio.';
            return false;
        }
        return true;
    }

    function validateEmail() {
        if (email.value.length === 0) {
            emailError.textContent = 'El correo electrónico es obligatorio.';
            return false;
        }
        return true;
    }

    function validatePhone() {
        if (phone.value.length === 0) {
            phoneError.textContent = 'El teléfono de contacto es obligatorio.';
            return false;
        } else if (phone.value.length < 8) {
            phoneError.textContent = 'El teléfono de contacto debe tener al menos 8 caracteres.';
            return false;
        }
        return true;
    }

    function validatePassword() {
        if (password.value.length === 0) {
            passwordError.textContent = 'La contraseña es obligatoria.';
            return false;
        } else if (password.value.length <= 3) {
            passwordError.textContent = 'La contraseña debe ser mayor a 3 caracteres.';
            return false;
        }
        return true;
    }

    function validateRePassword() {
        if (rePassword.value.length === 0) {
            rePasswordError.textContent = 'Repetir la contraseña es obligatorio.';
            return false;
        } else if (password.value !== rePassword.value) {
            rePasswordError.textContent = 'Las contraseñas deben coincidir.';
            return false;
        }
        return true;
    }

    validateField(fullName, fullNameError, validateFullName);
    validateField(email, emailError, validateEmail);
    validateField(phone, phoneError, validatePhone);
    validateField(password, passwordError, validatePassword);
    validateField(rePassword, rePasswordError, validateRePassword);

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from submitting

        let isValid = true;

        // Clear previous error messages
        fullNameError.textContent = '';
        emailError.textContent = '';
        phoneError.textContent = '';
        passwordError.textContent = '';
        rePasswordError.textContent = '';

        // Validate Full Name
        if (!validateFullName()) isValid = false;

        // Validate Email
        if (!validateEmail()) isValid = false;

        // Validate Phone
        if (!validatePhone()) isValid = false;

        // Validate Password
        if (!validatePassword()) isValid = false;

        // Validate Repeat Password
        if (!validateRePassword()) isValid = false;

        if (isValid) {
            form.submit();  
        }
    });
});
