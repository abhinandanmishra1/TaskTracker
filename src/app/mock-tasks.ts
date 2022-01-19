// As this array is not a predefined data structures 
// hence when I have to take it as an input then it will give an error
// @Input() Task:data_type????
// For that we have to create a data type
// We will create a class in which data type of this structure will be 
// defined
// TASK datatype
import { Task } from "./TASK";
// it's an array of task
export const TASKS :Task[]=[
    {
        id:1,
        text:'Contest Codeforces',
        date:'24 Jan',
        reminder:true
    },{
        id:2,
        text:'Codeforces Practice',
        date:'Today,19 Jan',
        reminder:false
    },{
        id:3,
        text:' Learn Angular and complete this app',
        date:'Before 4pm,Today',
        reminder:false
    }
]


// {
    //   "id": 5,
    //   "text": "This is a test case2 used for deletion",
    //   "date": "Delete Me",
    //   "reminder": false
    // }