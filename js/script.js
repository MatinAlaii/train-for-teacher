var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  input1 = document.getElementById("input1").value;
  console.log(input1);
  input2 = document.getElementById("input2").value;
  console.log(input2);
  let div3;
  div3 = input1 + " " + input2;
  document.getElementById("div3").innerHTML = div3;
});
