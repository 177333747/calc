let input =document.querySelector('.input');
//выражение для возведения в степень
let power = "";
//вставка символа
function insert(num){
  if(input.textContent ==0){
    input.textContent="";
    input.textContent += num;
  }else
    input.textContent += num;
  }

  function clean(){
    input.textContent=''
    let power = "";
  }

  function back(){
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length-1);
    if(input.textContent ==0){
      input.textContent="";
    }
  }


  function equal(){
    let exp = input.textContent;
    if(input.textContent.includes('^')){
      let tmp = input.textContent.split('^');
      let num = eval(power);
      let pow = +tmp[1];
      input.textContent =Math.pow(num, pow);
      power= "";
      return;
    }
    if(exp){
      input.textContent = eval(exp);
    }
  }

function percent(){
  input.textContent=eval(input.textContent)/100;
}

//функция для констант
function constant(name){
  if(input.textContent ==0){
    input.textContent="";
  }
  if (name=="pi")
    input.textContent += Math.PI.toFixed(6);
  if(name=="e")
    input.textContent += Math.E.toFixed(6);
}

//для операций
function operation(name){
  if(name=="sqrt")
    input.textContent = Math.sqrt(eval(input.textContent));
  if(name=="sqr")
    input.textContent = Math.pow(eval(input.textContent), 2);
  if(name=="^-1")
    input.textContent = Math.pow(eval(input.textContent), -1);
  if(name="^"){
    power = input.textContent;
    input.textContent +="^";
  }
}

function factorial(n){
  return (n != 1) ? n * factorial(n-1) : 1;
}

function fact() {
  input.textContent = factorial(+eval(input.textContent));
}

function log(name){
  if(name=="lg"){
    input.textContent = Math.log10(eval(input.textContent).toFixed(6));
  }
  if(name=="lg"){
    input.textContent = Math.log(eval(input.textContent)).toFixed(6);
  }
}

//переключение с градусов на радианы
document.querySelector('.type').addEventListener('click', function(){
  if(document.querySelector('.type').textContent == "deg"){
    this.textContent = "rad";
    console.log('Градусы')
  }
  if(document.querySelector('.type').textContent == "rad"){
    this.textContent = "rad";
    console.log('Радианы')
  }
})

function f(name){
  if(name=='sin'){
    //в градусах
    if(document.querySelector('.type').textContent == "deg"){
      input.textContent =parseFloat(Math.sin(eval(input.textContent)/180*Math.PI).toFixed(6).toString());
    }
    //в радианах
    if(document.querySelector('.type').textContent == "rad"){
      input.textContent =parseFloat(Math.sin(eval(input.textContent)).toFixed(6).toString());
    }
  }
  if(name=='cos'){
    if(document.querySelector('.type').textContent == "deg"){
      input.textContent =parseFloat(Math.cos(eval(input.textContent)/180*Math.PI).toFixed(6).toString());
    }
    if(document.querySelector('.type').textContent == "rad"){
      input.textContent =parseFloat(Math.cos(eval(input.textContent)).toFixed(6).toString());
    }
  }
  if(name=='tan'){
    if(document.querySelector('.type').textContent == "deg"){
      input.textContent =parseFloat(Math.tan(eval(input.textContent)/180*Math.PI).toFixed(6).toString());
    }
    if(document.querySelector('.type').textContent == "rad"){
      input.textContent =parseFloat(Math.tan(eval(input.textContent)).toFixed(6).toString());
    }
  }
  if(name=='ctg'){
    if(document.querySelector('.type').textContent == "deg"){
      input.textContent =parseFloat(1/Math.tan(eval(input.textContent)/180*Math.PI).toFixed(6).toString());
    }
    if(document.querySelector('.type').textContent == "rad"){
      input.textContent =parseFloat(1/Math.tan(eval(input.textContent)).toFixed(6).toString());
    }
  }
}