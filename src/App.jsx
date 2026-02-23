import { useState } from 'react'
import './App.css'


function App() {
 const [teachers, setTeachers] = useState(['Data', 'Reyes', 'Yolanda']);
 const [name, setName] = useState('Sofia');
 const [newName, setNewName]= useState('');
 const changeName = (e) => {e.preventDefault();
     if(newName.trim() !== ''){
        setName(newName);
        setTeachers([...teachers,newName])
        setNewName('');
      }
};

 const deleteTeacher = (indextoDelete) => {
 const sweepTeachers = teachers.filter((_ , index) => index !== indextoDelete);
 setTeachers(sweepTeachers)
}; return (
    <div>
        <h2>Teacher Name: {name}</h2>
        <ul>
            {teachers.map ((t, index) => (
               <li key={index}> 
    <button onClick={() => setName(t)}>{t}</button>
    <button onClick={() => deleteTeacher(index)}>Delete</button>
  </li>
            ))}
        </ul>
        <form onSubmit={changeName}>
  <input 
    type="text" 
    placeholder="add a name" 
    value={newName} 
    onChange={(e) => setNewName(e.target.value)} 
  />
  <button type="submit">Add</button>
</form>
    </div>
  );
}

export default App
