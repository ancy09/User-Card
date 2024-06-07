import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UserInfo from './UserInfo';

function App() {
  const [username, setUsername] = useState("");
  const [userdetails, setUserdetails] = useState([]);
  const getDetails = (username) => {
    console.log(`Name entered is ${username}`);
   fetch(`https://api.github.com/users/${username}`)
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
    setUserdetails(data);
  })
  };
  return (
    <>
    <div className='container'>
      <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)}/>
      <button onClick={()=>getDetails(username)}>Show Card</button>
      
    </div>
   <div className='card' >
     <img src={userdetails.avatar_url} alt={`$(username)'s avatar`}/>
    <h4>{userdetails.name}</h4>
   </div>
    </>
  );
}

export default App;
