const staffDatabase = [];

// Getting the form element
let formInput = document.getElementById('FormId');

let inputButton = document.getElementById('btn');

formInput.addEventListener("submit", addToArray);


function addToArray(e) {
    e.preventDefault(); 


    const newArray = {
       name: formInput['name'].value,
       position: formInput['position'].value,
       id: formInput['IdNumber'].value,
       joinDate: formInput['Joineddate'].value,
       expirationDate: formInput['expDate'].value,
       bloodGroup: formInput['blood'].value,
    }


    staffDatabase.push(newArray);
    
    addCards();
}


function addCards() {
    let newDom = document.getElementById("mainDiv");
    
    // Clear previous cards to avoid duplication
    newDom.innerHTML = "";


    for (let i = 0; i < staffDatabase.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "idBody");

        
        let nameTitle = document.createElement("p");
        nameTitle.setAttribute("class", "headerTitle");
        nameTitle.innerHTML = "Name: " + staffDatabase[i].name;
        newDiv.appendChild(nameTitle);

        let positionTitle = document.createElement("p");
        positionTitle.innerHTML = "Position: " + staffDatabase[i].position;
        newDiv.appendChild(positionTitle);

        let idNumber = document.createElement("p");
        idNumber.innerHTML = "ID Number: " + staffDatabase[i].id;
        newDiv.appendChild(idNumber);

        let joinDate = document.createElement("p");
        joinDate.innerHTML = "Joined Date: " + staffDatabase[i].joinDate;
        newDiv.appendChild(joinDate);

        
        let expDate = document.createElement("p");
        expDate.innerHTML = "Expires: " + staffDatabase[i].expirationDate;
        newDiv.appendChild(expDate);

    
        let bloodGroup = document.createElement("p");
        bloodGroup.innerHTML = "Blood Group: " + staffDatabase[i].bloodGroup;
        newDiv.appendChild(bloodGroup);

        newDom.appendChild(newDiv);
    }
}
