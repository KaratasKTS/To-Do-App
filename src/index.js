import './styles.css';
import * as getValuefunctions from './getValuefunctions.js';
import * as DOMfunction from './DOMFunctions.js';



//BUTTONS
const newTaskDT = document.getElementById('newTaskDT');
const submitDT = document.getElementById('idbtnDT');
const closeModalDT = document.getElementById('closedailyTaskModal');

//dailytask toggles
const dailyTaskModal = document.querySelector('.dailyTaskModal');
const overlay = document.querySelector('.overlay');
const dailyTaskholder = document.querySelector('.dailyTaskholder');

// daily task modal inputs
const titleDT = document.getElementById('titleDT');
const projectInput = document.getElementById('Projects');
const DueDateDT = document.getElementById('DueDateDT');
const DescriptionDT = document.getElementById('DescriptionDT');
const priorityDT = document.getElementById('priorityDT');
const selectProject = document.getElementById('selectProject');

//EDIT MODAL buttons 
const buttonEM = document.getElementById('buttonEM');
const submitButtonEM = document.getElementById('idbtnEM');
const HeadingEM = document.querySelector('.editHeading');

//EDIT MODAL inputs and labels
const titleEM = document.querySelector('.titleEM');
const titleEMinput = document.getElementById('titleEM');

const projectEM = document.querySelector('.projectEM');
const projectEMinput = document.getElementById('projectEM');

const DueDateEMlabel = document.querySelector('.DueDateEM');
const DueDateEM = document.getElementById('DueDateEM');

const descriptionEditLabel = document.getElementById('DescriptionidLabel');
const descriptioneditInput = document.getElementById('DescriptionEM');

const priorityEM = document.getElementById('priorityEM');




//project inout 


//projects modal
const projects = document.querySelector('.Project');
const newProject = document.getElementById('newProject');
const NewProjectclosebutton = document.getElementById('closeNewProject');
const editModal = document.querySelector('.editModal');
const submitNewProject = document.getElementById('submitNewProject')

//project inputs
const titlePR = document.getElementById('titlePR');
const DueDatePR = document.getElementById('DueDatePR');
const DescriptionPR = document.getElementById('DescriptionPR');

//container for nodes 
const bigDailyTaskholder = document.querySelector('.content4');
const newProjectHolder = document.querySelector('.newProjectHolder');
//gets the values adn pass them in the DOMfunctions for process

submitDT.addEventListener('click', (event)=>{
    event.preventDefault();
   
    const values = getValuefunctions.getvalues(titleDT, projectInput,DueDateDT,DescriptionDT,priorityDT,selectProject);
     //add select project here 
    DOMfunction.showNewDailyTask(dailyTaskholder, values, bigDailyTaskholder,newProjectHolder);
})

submitNewProject.addEventListener('click', (event)=>{
    event.preventDefault();
   
    const values = getValuefunctions.getProjectValues(titlePR,DueDatePR,DescriptionPR);
    DOMfunction.showNewProject(newProjectHolder, values);
})


//open modal DT 
newTaskDT.addEventListener('click', openNewDailyTask);
closeModalDT.addEventListener('click', closeDailyTaskModal);

//open close newproject 
newProject.addEventListener('click', openNewProject);
NewProjectclosebutton.addEventListener('click', closeNewProject);

//open modal function 
function openNewDailyTask(){
    dailyTaskModal.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeDailyTaskModal(){
    dailyTaskModal.classList.remove('active');
    overlay.classList.remove('active');
}
//open edit modal 
function openEditModal(){
    editModal.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeEditModal(){
    editModal.classList.remove('active');
    overlay.classList.remove('active');
}


function openNewProject(){
    projects.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeNewProject(){
    projects.classList.remove('active');
    overlay.classList.remove('active');
}


/*event listener on the edit button (ON THE BIG CONTAINER) parent, container 
using event delegation  
Opens the modal with the values of the box clicked */

let editVal;
bigDailyTaskholder.addEventListener('click', function displayEditValuess(event) {

    if (event.target.matches('.dailyTaskEdit')) {
        let values = DOMfunction.showEditModal(event);
        console.log("testing" ,values);

        HeadingEM.textContent = values[2].textContent;
        
        projectEM.textContent = values[2].textContent;
        projectEMinput.value = values[2].textContent;


        DueDateEMlabel.textContent = "Due Date :" + values[3].textContent;
        DueDateEM.value = values[3].textContent;

        descriptionEditLabel.textContent = `Description: `;
        descriptioneditInput.value = values[4].getAttribute('desccont') || ''; 
       
        priorityEM.label = values[5].value;

        if (values[1].hasAttribute('atr')) {
            titleEMinput.setAttribute('atr', values[1].getAttribute('atr'));
        }
        if (values[2].hasAttribute('atr')) {
            projectEMinput.setAttribute('atr', values[2].getAttribute('atr'));
        }
        if (values[3].hasAttribute('atr')) {
            DueDateEM.setAttribute('atr', values[3].getAttribute('atr'));
        }
        if (values[4].hasAttribute('atr')) {
            descriptioneditInput.setAttribute('atr', values[4].getAttribute('atr'));
            descriptioneditInput.setAttribute('desccont', descriptioneditInput.value);    
        }
        if (values[5].hasAttribute('atr')) {
            priorityEM.setAttribute('atr', values[5].getAttribute('atr'));
        }
        let store = [projectEMinput, titleEMinput,   DueDateEM, descriptioneditInput, priorityEM];
        
        editVal = store;
        console.log("return", store);
        openEditModal();
    }
});

/*get the input values, if input values attribute and dom node attributes match, 
create nodes
append inputs value to the dom element with the matching attribute*/

submitButtonEM.addEventListener('click', pushEdits);
buttonEM.addEventListener('click' , closeEditModal )

function pushEdits(){
   let iterate = [
    document.querySelectorAll('.dailyTaskTitle'),
    document.querySelectorAll('.dailytaskproject'),
    document.querySelectorAll('.dailyTaskDate'),
    document.querySelectorAll('.dailyTaskDescription'),
    document.querySelectorAll('.dailyTaskPriority')
];

    for(let i=0; i < iterate.length; i++){
        let storageAtr = editVal[i].getAttribute('atr')
        for(let j = 0; j < iterate[i].length; j++){
            
            let iterateAtr = iterate[i][j].getAttribute('atr');
            
            if(iterateAtr === storageAtr && i !== 1 ){
                iterate[i][j].textContent = editVal[i].value;
            } 
            if(i === 3){
                iterate[3][j].setAttribute('desccont', editVal[3].value)
                let slice = editVal[3].value;
                let sliced = slice.slice(0,10) + "...";
                iterate[i][j].textContent = sliced;
            } 
        }     
    } 
}
   


function checkbox(event){
if(event.target.matches(".dailyTaskCheck")){
    let child = event.target;
    let parent = child.parentNode;
    let atr = parent.getAttribute('atr');
    
    let getAttributes = document.querySelectorAll(`[atr="${atr}"]`).forEach(Element =>{
        Element.classList.add("checked");
    })

    
}}

document.addEventListener("click",checkbox);


