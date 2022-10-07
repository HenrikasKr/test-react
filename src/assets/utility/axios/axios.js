function postData(event) {
    axios.post('http://localhost:5291/api/Contact', { 
        "ContactName": document.getElementById("ContactName").value,
        "ContactEmail": document.getElementById("ContactEmail").value,
        "ContactSubject": document.getElementById("ContactSubject").value,
        "ContactMessage": document.getElementById("ContactMessage").value,
        "ContactDate" : "Date.now"
  
 });
    axios.post('http://localhost:5291/api/Mail', {
        "to": "",
        "subject": document.getElementById("ContactSubject").value,
        "body": `<h3>From:</h3> ${document.getElementById("ContactEmail").value} <br>
                 <h4>Name:</h4> ${document.getElementById("ContactName").value} <br>
                 <h4>Message:</h4> ${document.getElementById("ContactMessage").value}`
    }).then(() => 
    {
        swal({
            title: "Message sent successfully!",
            type: "success" 
        }).then(function(){
            location.reload()
        })
    }).catch((error)=> {
        swal("Something went wrong!" , `${error.message}` , "error")
        .then(function(){
            location.reload()
        })
    })
}