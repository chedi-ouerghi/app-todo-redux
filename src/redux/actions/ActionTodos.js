import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "../Type";


export const deletTodo=(id)=>{
    return{
        type:DELETETODO,
        payload: id ,
    };
};

export const doneTodo=(id)=>{
    return{
        type:DONETODO,
        payload:id,
    };
};
export const editTodo=(id,task)=>{
    return{
        type:EDITTODO,
        payload:{id,task}
    };
};
export const addtTodo=(task)=>{
    return{
        type:ADDTODO,
        payload:task,
    };
};