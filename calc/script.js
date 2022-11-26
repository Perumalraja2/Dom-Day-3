



function display(val){

    document.getElementById('result').value += val

    return val

}

function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}


function del()
{

   document.getElementById('result').value= document.getElementById('result').value.slice(0,-1)
    
  

}

function clearScreen(){

    document.getElementById('result').value ="0";


}


addEventListener('keydown',(event)=>{

	

if((event.key=="Backspace")||(event.key=="Delete"))
{
	 document.getElementById('result').value= document.getElementById('result').value.slice(0,-1)
}
  else if ((event.key=="Enter")||(event.key=="="))
  {
  	let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y
  }else if(event.key=="a")

alert("Enter vaild number")


  else
  {
  	document.getElementById('result').value+=event.key;
  }


})