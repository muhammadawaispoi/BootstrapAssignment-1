function showDiolog(){
  document.getElementById("inputbtn").innerHTML = "";
  document.getElementById("outputbtn").innerHTML = "";
}


document.getElementById("alert1").onclick = function () {
  alert("M Awais")
  document.getElementById("inputbtn").innerHTML = "M Awais" ;

}

// alert Number 
document.getElementById("alertn").onclick = function () {
  let number = 7
  alert(number)
  document.getElementById("outputbtn").innerHTML = " ";
  document.getElementById("inputbtn").innerHTML = number
}

// show variables 
document.getElementById("showvn").onclick = function () {
  document.getElementById("inputbtn").innerHTML = " ";
  document.getElementById("outputbtn").innerHTML = "<ul class='text-start'><li>A variable name can't contain spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, userAlert and myVar are legal.</li><li>Capital letters are fine, but be careful. Variavle names are case sensitive. A rose is not a Rose. If you assign the string 'Floribandas' to the variable rose, and then ask JavaScript for the value assigned to Rose, you'll come up empty.</li></ul>"
}

// show camelCase 
document.getElementById("showce").onclick = function () {
  document.getElementById("inputbtn").innerHTML = " ";
  document.getElementById("outputbtn").innerHTML = "weAreLearningJavaScript";
}

document.getElementById("plus").onclick = function(){
  let a = 30;
  let b= 25;
  let sum = a+b;
  document.getElementById("inputbtn").innerHTML = `a = ${a} <br/> b = ${b} <br/> a + b`
  document.getElementById("outputbtn").innerText = `  ${sum}`

}
// Subtract 2 Numbers

document.getElementById("sub2n").onclick = function(){
 
  let a = 30;
  let b= 25;
  let sub = a-b;
  document.getElementById("inputbtn").innerHTML = `a = ${a} <br/> b = ${b} <br/>a - b `
  document.getElementById("outputbtn").innerText = ` ${sub}`
}

// Multiply 2 Numbers

document.getElementById("mul2n").onclick = function(){
 
  let a = 30;
  let b= 25;
  let mul = a*b;
  document.getElementById("inputbtn").innerHTML = `a = ${a} <br/> b = ${b} <br/> a * b`
  document.getElementById("outputbtn").innerText = `  ${mul}`
}

// Divide 2 Numbers

document.getElementById("divd2n").onclick = function(){
 
  let a = 30;
  let b= 25;
  let divd = a/b;
  document.getElementById("inputbtn").innerHTML = `a = ${a} <br/> b = ${b} <br/> a / b `
  document.getElementById("outputbtn").innerText = ` ${divd}`
}

// Calculate Some Numbers 

document.getElementById("calsn").onclick = function(){
  // let statement = 15 / 3 + 23 * 4 - (3 + 6)
  let a = 45
  let b = 5
  let c = 10
  let d = 7
  let f = 8
  let cal = a/b+c*d-(b+f)
  document.getElementById("inputbtn").innerHTML =  `a = ${a} <br/> b = ${b} <br/> c = ${c} <br/> d = ${d} <br/> f = ${f} <br/> a/b+c*d-(b+f)`;
  document.getElementById("outputbtn").innerHTML =` ${cal}`
}