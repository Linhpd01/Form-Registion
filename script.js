const  form = document.getElementById('form')
const  Fullname = document.getElementById('Fullname')
const  birthday = document.getElementById('birthday')
const  Phone = document.getElementById('Phone')
const  Email = document.getElementById('Email')
const  Password = document.getElementById('Password')

function showSuccess(input){
  const formControl = input.parentElement;
  formControl.className = 'form-group success';
}

function showError(input,message){
  const formControl = input.parentElement;
  formControl.className = 'form-group error';
  const small= formControl.querySelector('small');
  small.innerHTML = message;
}
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// check Required
function checkRequired(inputArr) {
  inputArr.forEach(function(input){
    if(input.value.trim()===''){
      showError(input,`${getFieldName(input)} is required`)
    }
    else{
      showSuccess(input)
    }
  });
}
function checkLength(input,min,max){
  if(input.value.length < min){
    showError(input,`${getFieldName(input)} must be at least ${min} characters`);
  }
  else if(input.value.length >max){
    showError(input,`${getFieldName(input)} must be less than ${max} characters`);
  }
  else{
    showSuccess(input);
  }
}

form.addEventListener('submit',function(e){
  e.preventDefault();
  checkRequired([Fullname,birthday,Phone,Email,Password]);
  checkLength(Fullname,3,10);
});