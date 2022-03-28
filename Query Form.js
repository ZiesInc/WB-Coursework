const fname = document.getElementById("fname")
const email = document.getElementById("email") 
const address = document.getElementById("jaddress")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener('submit',(e) => {
	let messages = []
	if (fname.value === '' || fname.value == null){
		messages.push("Name is Required")
	}
	if (messages.length > 0){
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
	}
    if(email.value ==='' || email.value == null){
        messages.push("Email is Required")
    }
    if (messages.length > 0){
		e.preventDefault()
		errorElement.innerText = messages.join(', ')
    }    
})

function showAndClearField(myFormRef){
    //let name = document.f1.fname.value;
    //alert(name);

    let dname = myFormRef.fname.value;
    let gname = myFormRef.jaddress.value;
    let ename = myFormRef.email.value;
    

    if(gname==""){
        alert("Details Should be filled out");
    }
    else{
        alert(gname);
        myFormRef.jaddress.value = "";

    }

    if (dname==""){
        alert("Name Must be Filled Out");
    }
    else{
        alert(dname)
        myFormRef.fname.value ="";
    }	
    
    if(ename==""){
        alert("Emaail Must be Filled out")
    }
    else{
        alert(ename)
        myFormRef.ename.value="";
    }
}					