var nums = []


function maior() {
  nums.push(Number(document.getElementById('num1').value))
  nums.push(Number(document.getElementById('num2').value))
  nums.push(Number(document.getElementById('num3').value))
  alert(Math.max(...nums))
}

function ordenar() {
  nums.push(Number(document.getElementById('num1').value))
  nums.push(Number(document.getElementById('num2').value))
  nums.push(Number(document.getElementById('num3').value))
  
  console.log(nums.sort(function(a, b) {return b-a}).reverse())
  alert(nums.sort(function(a, b) {return b-a}).reverse())
}
