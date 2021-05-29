var selectedRow = null

function onFormSubmit() {


    //validation
    if (validate()) {
        var formData = readFormData();
        console.log(formData)

        if (selectedRow == null) {
            insertNewRecord(formData)
        }
        else {
            updateRecord(formData)
        }
        resetForm()
    }

}


function readFormData() {

    //req.
    var formData = {}
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["empSalary"] = document.getElementById("empSalary").value;
    formData["empCity"] = document.getElementById("empCity").value;

    return formData;
}




function insertNewRecord(data) {

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.fullName

    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.empCode

    cell3 = newRow.insertCell(2)
    cell3.innerHTML = data.empSalary

    cell4 = newRow.insertCell(3)
    cell4.innerHTML = data.empCity

    cell4 = newRow.insertCell(4)
    cell4.innerHTML = `<a onClick = "onDelete(this)">DELETE</a><a onClick = "onEdit(this)">EDIT</a>`
}
function resetForm() {

    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empCity").value = "";
    selectedRow = null;


}

function onEdit(td) {

    selectedRow = td.parentElement.parentElement;

    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML
    document.getElementById("empSalary").value = selectedRow.cells[2].innerHTML
    document.getElementById("empCity").value = selectedRow.cells[3].innerHTML

}
function updateRecord(formData) {

    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.empSalary;
    selectedRow.cells[3].innerHTML = formData.empCity;

}
function validate() {

    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameerror").innerHTML = "fullName is required.."
    }
    else {

        document.getElementById("fullNameerror").innerHTML = ""
    }

    return isValid;
}

function onDelete(td) {

    if (confirm("are you sure want to delete record ??")) {

        row = td.parentElement.parentElement;
        console.log("row index", row.rowIndex)
        document.getElementById("employeeList").deleteRow(row.rowIndex);

    }


}




