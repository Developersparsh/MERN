const userName= prompt("please enter your name:");

if(userName!==null && userName.trim()!==""){
  alert('Hello, ${userName}!');
}
else
{
  alert("you didn't enter a valid name.");
}

const x=prompt("enter first number");
const y=prompt("enter second number:");
if(x+y!==null)
  {
    alert((x+y))
  }
 else if(x-y!==null)
    {
      alert(x-y)
    }
    else
    {
      alert("error");
    }