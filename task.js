const task=document.getElementById('task');
const description=document.getElementById('description');
const table=document.getElementById('table');
const button=document.getElementById('button');
const hours=document.getElementById('hours');
const min=document.getElementById('min');
const sec=document.getElementById('sec');

let startId;
let h=0;
let m=0;
let s=0;

button.addEventListener('click',startTimer)


function addTask()
{
    table.innerHTML+=`
    <tr>
    <td>${task.value}</td>
    <td>${description.value}</td>
    <td>${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}</td>
    </tr>`

    //resetting input fields
    task.value='';
    description.value='';
}

function startTimer()
{
    if(button.textContent=='Stop')
    {
        button.textContent='Start';
        clearInterval(startId);
        addTask();
        s=0;
        m=0;
        h=0;
        hours.textContent='00';
        min.textContent='00';
        sec.textContent='00';
        button.style.setProperty('background-color','chartreuse')
    }
    else
    {
        button.textContent='Stop';
        startId=setInterval(function()
        {
            sec.textContent=(++s).toString().padStart(2,'0');
            if(s>59)
            {
                s=0;
                min.textContent=(++m).toString().padStart(2,'0');
                if(m>59)
                {
                    m=0;
                    hours.textContent=(++h).toString().padStart(2,'0');
                }
            }
        },1000);
        button.style.setProperty('background-color','#FF3E30');
    }
    
}




