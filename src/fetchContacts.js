import React, { Component } from 'react';
import axios from './axios-phone';

class FetchContacts extends Component {
    state = {
      result : [],
    }


    componentDidUpdate(){
        axios.get('/phoneDirectory.json')
            .then((response) => {
                console.log(response.data);
                const fetchedResult = [];
                //this.setState({result: response.data})
                for(let key in response.data){
                    fetchedResult.push({
                        ...response.data[key],
                    })
                }
                this.setState({result:fetchedResult})
                // console.log(result);
            })
            .catch(error => {
                console.log(error)
            });
    }

    render() {
        return (
            <React.Fragment>
                <ul className="list-group">
                {this.state.result.map(listitem => (
                    <li className="list-group-item list-group-item-primary" key={listitem.id + listitem.name}>id : {listitem.id} | name: {listitem.name} | number: {listitem.number}</li>
                ))}
                </ul>
            </React.Fragment>
        )
        
    }
}

export default FetchContacts;


// {
//     headers: { 
//         'x-apikey': 'AIzaSyA81vI73Ec16Js42JEl3s6tkCHfCfKzRj0',
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//       },
//     }