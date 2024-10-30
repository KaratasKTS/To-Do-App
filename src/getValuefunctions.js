 export function getvalues( value1, value2, value3, value4, value5,value6){ //add select project here 
    const title =  value1.value;
    const project =  value2.value;
    const date =  value3.value;
    const description =  value4.value;
    const priority =  value5.value;
    const projectSelectVal = value6.value;
    
    return{ title, project, date, description, priority, projectSelectVal}
    
    }
    export function getProjectValues( value1, value2,value3 ){
      const title =  value1.value;
      const date =  value2.value;
      const description =  value3.value;
      return{ title, date, description}
      
      }