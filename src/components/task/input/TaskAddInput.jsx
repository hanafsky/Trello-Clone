import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TaskAddInput = ({
    inputText, 
    setInputText, 
    taskList, 
    setTaskList
  }) => {
  const handleSubmit = (e) => {
    const taskId = uuidv4();
    e.preventDefault();
    // console.log(e);
    if(inputText==="") {
      return;
    }
    //カードを追加する。
    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: taskId,
        draggableId: `task-${taskId}`,
      },
    ]);
    setInputText("");
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='add a task' className='taskAddInput' 
        onChange={handleChange}
        value={inputText}
        />
      </form>
    </div>
  )
}
