import './App.css';
import {useState} from "react";

// TODO: Implement Profile Pic Upload feature
function App() {
  const [ userName, setUserName] = useState('')
  const [ fullName, setFullName] = useState('')
  const [ bio, setBio] = useState('')
  const [ url, setUrl] = useState('')
  return ( 
    <div className="App">
      <div className="info">
        <label>Username</label>
        <input type="text" onChange={(event) => {setUserName(event.target.value); }} />
        <label>Full name</label>
        <input type="text" onChange={(event) => {setFullName(event.target.value); }} />
        <label>Bio</label>
        <input type="text" onChange={(event) => {setBio(event.target.value); }} />
        <label>Website Url</label>
        <input type="text" onChange={(event) => {setUrl(event.target.value); }} />
        <button> Add User </button>
      </div>
    </div>) ;
}

export default App;
