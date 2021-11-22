function one(){
    document.getElementById("numbers").value
    += 1
  }
  function two(){
    document.getElementById("numbers").value
    += 2
  }
  function three(){
    document.getElementById("numbers").value
    += 3
  }
  function four(){
    document.getElementById("numbers").value
    += 4
  }
  function five(){
    document.getElementById("numbers").value
    += 5
  }
  function six(){
    document.getElementById("numbers").value
    += 6
  }
  function seven(){
    document.getElementById("numbers").value
    += 7
  }
  function eight(){
    document.getElementById("numbers").value
    += 8
  }
  function nine(){
    document.getElementById("numbers").value
    += 9
  }
  function zero(){
    document.getElementById("numbers").value
    += 0
  }
  function dot(){
    document.getElementById("numbers").value
    += '.'
  }
  function clr(){
    document.getElementById("numbers").value = ""
  }
  function div(){
    document.getElementById("numbers").value
    += '/'
  }
  function mult(){
    document.getElementById("numbers").value
    += '*'
  }
  function sub(){
    document.getElementById("numbers").value
    += '-'
  }
  function add(){
    document.getElementById("numbers").value
    += '+'
  }
  function calc(){
    let a = eval(document.getElementById("numbers").value)
    document.getElementById("numbers").value = a
  }