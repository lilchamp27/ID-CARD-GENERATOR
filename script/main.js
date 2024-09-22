// calling the form Id
let formInput = document.getElementById('formId')
console.log(formInput)

// calling the ids for the form
let inputName = document.getElementById('nameInput');
let inputPosition = document.getElementById('positionInput');
let inputIdnumber = document.getElementById('idNumberInput');
let inputJoindate = document.getElementById('joinDateInput');
let inputExpdate = document.getElementById('expDateInput');
let inputBlood = document.getElementById('bloodInput');

// Calling the id of the button
let inputButton = document.getElementById('btn');

function addToarray(e) {
    e.preventDefault();
    console.log("form submit")

    const newArray = {
       name: formInput.name.value,
       postion: formInput.postion.value,
        id : formInput.IdNumber.value,
         joinDate : formInput.Joineddate.value,
        expirationDate:  formInput.expDate.value,
        bloodGroup: formInput.blood.value,
    
    }

    staffInfo.push(newArray)
    addcards()
    
    

}

formInput.addEventListener("submit", addToarray);