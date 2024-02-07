const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const firstname = document.querySelector('.firstName');
    const lastname = document.querySelector('.lastName');
    const emailId = document.querySelector('.email');
    const password = document.querySelector('.password');
    
    if(firstname.value === ''){
        document.querySelector('.firstNameError').style.display = 'block';
        document.querySelector('.error-firstNameError').style.display = 'block';
        document.querySelector('.firstName').style.borderColor = ' hsl(0, 100%, 74%)';
    }else{
        document.querySelector('.firstNameError').style.display = 'none';
        document.querySelector('.error-firstNameError').style.display = 'none';
    }

    if(lastname.value === ''){
        document.querySelector('.lastNameError').style.display = 'block';
        document.querySelector('.error-lastNameError').style.display = 'block';
        document.querySelector('.lastName').style.borderColor = ' hsl(0, 100%, 74%)';
    }else{
        document.querySelector('.lastNameError').style.display = 'none';
        document.querySelector('.error-lastNameError').style.display = 'none';
    }
    if(emailId.value === ''){
        document.querySelector('.emailError').style.display = 'block';
        document.querySelector('.error-emailError').style.display = 'block';
        document.querySelector('.email').style.borderColor = ' hsl(0, 100%, 74%)';
    }else{
        document.querySelector('.emailError').style.display = 'none';
        document.querySelector('.error-emailError').style.display = 'none';
    }
    if(password.value === ''){
        document.querySelector('.passwordError').style.display = 'block';
        document.querySelector('.error-passwordError').style.display = 'block';
        document.querySelector('.password').style.borderColor = ' hsl(0, 100%, 74%)';
    }else{
        document.querySelector('.passwordError').style.display = 'none';
        document.querySelector('.error-passwordError').style.display = 'none';
    }

    if(firstname.value !== '' && lastname.value !== '' && emailId.value !== '' && password.value !== ''){
        alert("All input fields are filled");
        document.querySelectorAll('input').forEach(input=>{
            input.style.borderColor = 'hsl(154, 59%, 51%)';
        });
    }
});
