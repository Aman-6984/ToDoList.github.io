const form=document.getElementById('form')
const input=document.getElementById('input-field')
const to_do_task=document.getElementById('task-list')

//variables to keep count of the activity
var total=0;
var completed=0;
var pending=0;

//event listener when the any task is added in the list
form.addEventListener('submit',(e)=>{
    console.log('working');
    e.preventDefault();
    const task=input.value;
    if(!task){
        alert('please input the task')
        return;
    }
    total++;
    pending++;

    const task_list=document.createElement('div')
    task_list.classList.add('task')

    const box=document.createElement('input')
    box.type='checkbox'
    
    const display=document.createElement('input')
    display.type='text'
    display.value=task;
    display.setAttribute('id','display-field')
    display.setAttribute('readonly','readonly')

    task_list.appendChild(box)
    task_list.appendChild(display)


    const editbtn=document.createElement('button')
    editbtn.classList.add('button')
    editbtn.innerHTML='Edit'
    task_list.appendChild(editbtn)

    const dltbtn=document.createElement('button')
    dltbtn.classList.add('button')
    dltbtn.innerHTML='Delete'
    task_list.appendChild(dltbtn);

    to_do_task.appendChild(task_list)

    document.getElementById('total').innerHTML='Total task:'+total;
    document.getElementById('pending').innerHTML='Pending: '+pending;
    document.getElementById('completed').innerHTML='Completed: '+completed;

 //adding functionality to edit button   
    editbtn.addEventListener('click',()=>{
        if(box.checked==true){
            return;
        }
        if(editbtn.innerHTML=='Edit'){
            editbtn.innerHTML='Save'
            display.removeAttribute('readonly')
        }
        else{
            editbtn.innerHTML='Edit'
            display.setAttribute('readonly','readonly')
        }
    })

    //additng the functionality on checkbox to show the task is completed
    box.addEventListener('click',()=>{
        if(box.checked==true){
            display.style.backgroundColor='black';
            display.style.color='white'
            pending--;
            completed++;
            document.getElementById('pending').innerHTML='Pending: '+pending;
            document.getElementById('completed').innerHTML='Completed: '+completed;
        }
        else{
            display.removeAttribute('style')
            pending++;
            completed--;
            document.getElementById('pending').innerHTML='Pending: '+pending;
            document.getElementById('completed').innerHTML='Completed: '+completed;
        }

    })

    //adding functionality to the deletebutton
    dltbtn.addEventListener('click',()=>{
        if(box.checked==true){
            completed--;
            document.getElementById('completed').innerHTML='Completed: '+completed;
        }
        if(box.checked==false){
            if(pending>0){
                pending--;
            }
            document.getElementById('pending').innerHTML='Pending: '+pending;
        }
        total--;
        document.getElementById('total').innerHTML='Total task:'+total;
        to_do_task.removeChild(task_list)
    })
    input.value=''
    
})
