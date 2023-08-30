function changeTemp()
{
  var inputTempVariable = document.getElementById('input-temp').value;
  document.getElementById('current-temp').innerHTML = inputTempVariable;
  alert("temperature event");
}

