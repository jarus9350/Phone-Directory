import React, { Component } from 'react';
import FetchContacts from './fetchContacts';
import axios from './axios-phone';
import Auxiliary from './hoc/auxiliary';
import './App.css';

class App extends Component {
  state = {
    employerId: 0,
    name:"",
    phoneNumber:0,
  }

  addContact = ()=> {
    const newContact = {
      id: this.state.employerId,
      name: this.state.name,
      number: this.state.phoneNumber
    }
    axios.post('/phoneDirectory.json',newContact)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  idHandler=(e)=>{
    this.setState({employerId: e.target.value});
  }

  nameHandler=(e)=>{
    this.setState({name: e.target.value});
  }

  contactHandler=(e)=>{
    this.setState({phoneNumber: e.target.value});
  }
  render() {
    return (
      <Auxiliary>
      <div className="App-header"> 
      <h1>phone directory</h1>
      <form>
        <label>
          employer id:
          <input type="number"  value = {this.state.employerId} onChange={this.idHandler}/>
        </label>
        <label>
          Name:
          <input type="text"  value = {this.state.name} onChange={this.nameHandler}/>
        </label>
        <label>
          number:
          <input type="number"  value = {this.state.phoneNumber} onChange={this.contactHandler}/>
        </label>
      </form>
      <hr></hr>
      <button onClick={this.addContact}>Add employee</button>
      </div>
      <hr></hr>
      <FetchContacts/>
      </Auxiliary>
    );
  }
}

export default App;

