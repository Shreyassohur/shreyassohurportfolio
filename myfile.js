
function validateForm(){
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

    if (name.value == "" || email.value == "" || message.value == "") {
      alert("Fill all the required fields");

    }else {
      alert("Success");
    }
}



  var fullImgBox = document.getElementById("fullImgBox");
  var fullImg = document.getElementById("fullImg");

  function openFullImg(pic){
    fullImgBox.style.display ="flex";
    fullImg.src = pic;
  }

  function closeFullImg() {
    fullImgBox.style.display = "none";
  }
