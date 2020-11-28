import React, {Component} from 'react';
import ListComponent from './ListComponent';
import TestComponent from './TestComponent';


export default class UserLists extends Component {
    
    state = {lists: [], loading: true}
    async componentDidMount(){
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      config.headers['Authorization'] = 'Token ' + localStorage.getItem('token')
      var url = 'http://127.0.0.1:8000/list/';
      const response = await fetch(url, config);
      const data = await response.json();
      this.setState({lists:data, loading:false})
      console.log(data)
    }

    render()
    {
        const listsApi = this.state.lists;
        return(
          <div>
            {listsApi.map(list => <ListComponent key={list.id} listName={list.name} items={list.item_set} />)}
            <TestComponent/>
          </div>
        )

    }
    
}