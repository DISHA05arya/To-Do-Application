let inputfield=document.getElementById('inputfield');
let add=document.getElementById('add');
let todocontainer =document.getElementById('todocontainer');
add.addEventListener('click',function()
{     var paragraph=document.createElement('p')
      paragraph.innerHTML=inputfield.value;
      paragraph.classList.add('para');
      todocontainer.appendChild(paragraph)
      inputfield.value=" ";
      paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through';
      })
      paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph);
      })
    //console.log(inputfield.value)
})
