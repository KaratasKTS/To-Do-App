export function showNewDailyTask(place, data, bigplace, projectPlace) {
    let projectTaskBox = document.createElement('div');
    let taskBox  =  document.createElement('div');
    let bigTaskBox  =  document.createElement('div');
    let check = document.createElement('input');
    let titleDT  =  document.createElement('div');
    let project  =  document.createElement('div');
    let dateDT  =  document.createElement('div');
    let DescriptionDT  =  document.createElement('div');
    let priorityDT  =  document.createElement('div');
    let editDT = document.createElement('div');
    editDT.textContent = "Open";
    
    
    let dynamicID = () => { return Math.floor(Math.random() * 9999); };

    // Set IDs and classes for the task boxes
    //editSvg.id = dynamicID();
    bigTaskBox.id = dynamicID();
    taskBox.id = dynamicID();
    bigTaskBox.className = "bigdailyTaskBox";
    taskBox.className = "dailyTaskBox";
    projectTaskBox.className = "projectbox";
    
    
    // Set IDs 
    check.id = dynamicID();
    titleDT.id = dynamicID();
    project.id = dynamicID();
    DescriptionDT.id = dynamicID();
    dateDT.id = dynamicID();
    priorityDT.id = dynamicID();

    // classes
    editDT.classList.add('dailyTaskEdit', 'hover');
    check.className = "dailyTaskCheck";
    titleDT.className = "dailyTaskTitle";
    project.className = "dailytaskproject";
    dateDT.className = "dailyTaskDate";
    DescriptionDT.className = "dailyTaskDescription";
    priorityDT.className = "dailyTaskPriority";

    // Set content 
     //add select project here 
     if(data.projectSelectVal !== "None"){
        check.type = 'checkbox';
        titleDT.textContent = "Title: " + data.title;
        project.textContent=  data.projectSelectVal;
        dateDT.textContent = "Due Date: " + data.date;
        DescriptionDT.textContent = "Description: " + data.description;
        priorityDT.textContent = `Priority: ${data.priority}`;
     } else{
        check.type = 'checkbox';
        titleDT.textContent = "Title: " + data.title;
        project.textContent=   data.project;
        dateDT.textContent = data.date;
        DescriptionDT.textContent = "Description: " + data.description;
        priorityDT.textContent = `Priority: ${data.priority}`;
       
    }

    // set attributes
    const boxAttribute = dynamicID();

    editDT.setAttribute('atr', dynamicID());
    bigTaskBox.setAttribute('atr', boxAttribute);
    projectTaskBox.setAttribute('atr', boxAttribute);
    taskBox.setAttribute('atr', boxAttribute);
    titleDT.setAttribute('atr',dynamicID());
    project.setAttribute('atr', dynamicID());
    dateDT.setAttribute('atr',dynamicID());
    DescriptionDT.setAttribute('atr',dynamicID());
    DescriptionDT.setAttribute('desccont', data.description);
    priorityDT.setAttribute('atr',dynamicID() );

    // Append elements to taskBox
    taskBox.appendChild(titleDT);
    taskBox.appendChild(priorityDT);
    place.appendChild(taskBox);
    /* IF SELECT PROJECT VALUE !== "None"{append the select value as project
    else {
    run the code block below ]}}
    */
    if(project.textContent !== ""   ){
    let pjTaskboxClone = projectTaskBox.cloneNode(true); 
    let PROJECTClone = project.cloneNode(true); 
    let selectProjectClone = project.cloneNode(true); 
    let pjedit =  editDT.cloneNode(true);
    pjTaskboxClone.appendChild(PROJECTClone);
   
    projectPlace.appendChild(pjTaskboxClone);
    let option = document.createElement('option');
    option.text = selectProjectClone.textContent;
    option.value = selectProjectClone.textContent;
    option.setAttribute('atr',selectProjectClone.getAttribute('atr'))
    selectProject.add(option);


    }

    // Clone 
    let checkclone = check.cloneNode(true);
    let titleClone = titleDT.cloneNode(true);
    let projectClone = project.cloneNode(true);
    let dateClone = dateDT.cloneNode(true);
    let descriptionClone = DescriptionDT.cloneNode(true);
    let priorityClone = priorityDT.cloneNode(true);
    let editclone = editDT.cloneNode(true);
    let operateStr = descriptionClone.textContent;
    let string  = operateStr.slice(0,20) + "...";
    descriptionClone.textContent = string;
    

    // Append 
    bigTaskBox.appendChild(checkclone);
    bigTaskBox.appendChild(projectClone);
    bigTaskBox.appendChild(titleClone);
    bigTaskBox.appendChild(dateClone);
    bigTaskBox.appendChild(descriptionClone);
    bigTaskBox.appendChild(priorityClone);
    bigTaskBox.appendChild(editclone);

    // Append bigTaskBox to bigplace
    bigplace.appendChild(bigTaskBox);
}


export function showNewProject(place, data) {
    let ProjectTaskBox  =  document.createElement('div');
    let bigTaskBox  =  document.createElement('div');
    let check = document.createElement('input');
    let titlePR  =  document.createElement('div');
    let datePR  =  document.createElement('div');
    let DescriptionPR  =  document.createElement('div');
    let editPR = document.createElement('div');
    editPR.textContent = "Edt";
    
    
    let dynamicID = () => { return Math.floor(Math.random() * 9999); };

    // Set IDs and classes for the task boxes
    //editSvg.id = dynamicID();
    bigTaskBox.id = dynamicID();
    ProjectTaskBox.id = dynamicID();
    bigTaskBox.className = "bigdailyTaskBox";
    ProjectTaskBox.className = "dailyTaskBox";
    
    // Set IDs 
    check.id = dynamicID();
    titlePR.id = dynamicID();
    DescriptionPR.id = dynamicID();
    datePR.id = dynamicID();
   

    // classes
    editPR.classList.add('projectEdit');
    titlePR.className = "projectTitle";
    datePR.className = "projectDate";
    DescriptionPR.className = "projectDescription";
    
    titlePR.textContent = "Project: " + data.title;
    datePR.textContent = data.date;
    DescriptionPR.textContent = data.description;
    const boxAttribute = dynamicID();
   
    //  attributes
    editPR.setAttribute('atr', dynamicID());
    ProjectTaskBox.setAttribute('atr', boxAttribute);
    titlePR.setAttribute('atr',dynamicID() );
    datePR.setAttribute('atr',dynamicID() );
    DescriptionPR.setAttribute('atr',dynamicID());
    DescriptionPR.setAttribute('desccont', data.description);
   
    let option = document.createElement('option');
    option.text = data.title;
    option.value = data.title;
    selectProject.add(option);
  

    // Append elements to taskBox

    ProjectTaskBox.appendChild(titlePR);
    ProjectTaskBox.appendChild(editPR);
    place.appendChild(ProjectTaskBox);

 

  
}

export let newTaskModalInputs
export function showEditModal(par) {
    let container = par.target;
    let parent = container.parentElement;
    let storeNodes = Array.from(parent.children);

    let clean =  storeNodes.filter(child => child !== container);
    newTaskModalInputs = clean;
    

    return clean;
    
   
  
}









