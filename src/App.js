import React, {useState} from 'react';

import './App.css';
import Main from './components/Main'

function App() {

  const [clients, setClients] = useState([
    {
    name:'',
    email: '',}
  ])

  const addClient = ({name, email}) => {
    const newClients = [...clients, {name,email}];
    setClients(newClients);
  }

  const deleteClient = index => {
    const newClients = [...clients]; 
    newClients.splice(index, 1);
    setClients(newClients)
  }



  return (
    <div className="App">
      <header className="App-header">
       <Main></Main>
      </header>
    </div>
  );
}

export default App;
