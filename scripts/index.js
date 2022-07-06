console.log("heeeey");

function validateForm() {
    let x = document.forms["submit_task"]["task_name"].value;
    if (x == "") {
	alert("AAAAAAAAAAAAAAA");
	return false;
    }
    else
    {
	console.log(x);
	//create a task object with "done" bool and "string" name
    }
}

