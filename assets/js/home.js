var checkboxes = document.querySelectorAll("input[type=checkbox]");
var delete_button=document.getElementById('checku');

//creating array of checked check-boxes
function getChecked() {
  var checked = [];

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    if (checkbox.checked) checked.push(checkbox.value);
  }
  return checked;
}

//delete button action

delete_button.addEventListener('click',function(){
  
  var checked = getChecked();

  var data;
  var temp="";

  for(i of checked){
    temp=temp+"id"+"="+i+"&";
  }

data="?"+temp;

//creating the link after the confimation ;)

  var str = "Press Again!";
  var result = str.link("http://localhost:8000/delete-task/"+data);
  document.getElementById("checku").innerHTML = result;
});
 