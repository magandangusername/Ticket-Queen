<script>
var currentDate = new Date();
var cDay = currentDate.getDate();
var cMonth = currentDate.getMonth() + 1;
var cYear = currentDate.getFullYear();
var input;
//   console.log("<b>" + cDay + "/" + cMonth + "/" + cYear + "</b>");
input="<b>" + cDay + "/" + cMonth + "/" + cYear + "</b>";
document.getElementById('daygetter').innerHTML=input;
</script>