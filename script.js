

 /*add*/

  function clearDisplay()
 {
  document.getElementById('display').value = '';
 }
 function displayAC()
 {
   document.getElementById( 'display' ).value='0';//ASCII value of AC is
 }

  function display(value)
 {
  document.getElementById('display').value += value;
 }

 function calculate()
 {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}



