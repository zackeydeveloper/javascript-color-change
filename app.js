let buttons=document.querySelectorAll('button');


buttons.forEach(item => {
item.addEventListener('click',(e)=>{
    switch(e.target.innerText){
        case 'Red':
            output.red();
            break;
        case 'Blue':
            output.blue();
            break;
        case 'Green':
            output.green();
            break;
        case 'Yellow':
            output.yellow();
            break;
        case 'Black':
            output.black();
            break;
        case 'Magenta':
            output.magenta();
        case 'Cyan':
            output.cyan();
            break;
        case 'Reset':
            output.reset();
            break;      
    };
});
item.addEventListener('mouseover',(ev)=>{
    ev.target.style.color=ev.target.innerText;
    });
item.addEventListener('mouseout',(ev)=>{
        ev.target.style.color='black';
    });


let output={
    temp:document.querySelector('#input'),
    red:()=>{
        output.temp.style.color='red';
    },
    blue:()=>{
         output.temp.style.color='blue';
    },
    green:()=>{
         output.temp.style.color='green';
    },
    yellow:()=>{
         output.temp.style.color='yellow';
    },
    black:()=>{
         output.temp.style.color='black';
    },
    magenta:()=>{
         output.temp.style.color='pink';
    },
    cyan:()=>{
         output.temp.style.color='cyan';
    },
    reset:()=>{
         output.temp.style.color='black';
    },
}
});