import React, { Component } from 'react'

 let users = {name: '' , email: ''}
export default class Main extends Component {
    constructor(props){
        super(props); 
        this.state = {
            clients:[users], 
        }
    }
   
        
            

        onChangeValue = (event) => {
            this.setState({[event.target.name]: event.target.value })
          };


          handleSubmit = (event) => {
              event.preventDefault()
               this.setState(this.state.clients.users.name)
               this.setState(this.state.clients.email)
              console.log(this.state.clients)
          }

           
    render() {
       let CLIENTS = Object.keys(this.state.clients).map((clients, index) => (
            <li key={index}>Name:{clients.name} email: {clients.email}</li> 
            
        )) 

        return (
            <div>
                
                   {CLIENTS}
                
            <form  onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    onChange={this.onChangeValue}
                    placeholder = 'name'
                    name= 'name'
                />
                <input
                    type="text"
                    
                    onChange={this.onChangeValue}
                    placeholder = 'email'
                    name = 'email'
                />

                

                <button onClick={this.handleSubmit}
                type="button">Add
                </button>
                </form>
                
            </div>
        )
    }
}
