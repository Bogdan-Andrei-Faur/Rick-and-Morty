import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav"
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Home from "./components/Home/Home"
import Detail from "./components/Detail/Detail"
import axios from 'axios';
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites"

function App() {
   const [characters, setCharacters] = useState([]);
   const {pathname} = useLocation();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/user/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   function logOut(){
      setAccess(false);
      navigate("/");
   }

   useEffect(() => {
      !access && navigate("/");
      // eslint-disable-next-line
   }, [access]);

   function onSearch(id){
      axios(`http://localhost:3001/character/${id}`)
         .then((response) => {
         if (response.data.name && !characters.find((char) => char.id === response.data.id)) {
            setCharacters((oldChars) => [...oldChars, response.data]);
            
         }
      })
      .catch((err) => window.alert("No characters with this ID!"));
   }

   const onClose = function(id){
      setCharacters(
         characters.filter((char) => {
            return char.id !== Number(id)
         })
      )
   }

   return (
      <div className='App'>
         {pathname !== "/" && <Nav onSearch={onSearch} logOut={logOut}/>}
            <Routes>
               <Route path="/" element={<Form login={login}/>}/>
               <Route path="/home" element={<Home characters={characters} onClose={onClose}/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/detail/:id" element={<Detail/>}/>
               <Route path='/favorites' element={<Favorites/>}/>
               <Route path="*" element={<Error/>} />
            </Routes>
      </div>
   );
}

export default App;