<!DOCTYPE html>
<html>
<head>
<script>
function confirmInput() {
  fname = document.forms[0].fname.value;
  alert("Hello " + fname + "! Welcome to our Github!");
}
</script>
</head>
<body>

<form onsubmit="confirmInput()" action="https://github.com/Seagull1239/softwareEngines">
  Enter your name: <input id="fname" type="text" size="20">
  <input type="submit">
</form>

</body>
</html>
