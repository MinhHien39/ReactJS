
import './App.css';
import {useState} from 'react'

function App() {
  const [job , setJob] = useState('');
  const [jobs , setJobs] = useState([]);

  const handleAdd =() => {
    setJobs(prev => [...prev , job])
    setJobs('')
  }
  
  return (
    <div style ={{padding:32}} className="App">

      <input value={job} 
      onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      
      <ul>
        {jobs.map((job,index) =>(
          <li key ={index}>
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
