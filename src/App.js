import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Components/pages/Auth';
import Dashboard from './Components/pages/Dashboard';
import Profile from './Components/pages/Profile';
import {useEffect, useState} from 'react';


function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const url = localStorage.getItem("user");
    url && JSON.parse(url) ? setUser(true) : setUser(false);

  },[]);
  
  
  useEffect(() => {
    localStorage.setItem("user", user);

  },[user]);

  return <Routes>

            {!user && (
                <Route path='/' element={<Auth  authenticate={() => setUser(true)}/>} />
            )}



            {user && <>
              <Route path='/profile' element={<Profile  logout={() => setUser(false)} />} />
              
              <Route path='/dashboard' element={<Dashboard  />} />

            </>}

            <Route path='*' element={<Navigate to={ user ? "/profile" : "/"}  />} />


  </Routes>
}

export default App;
