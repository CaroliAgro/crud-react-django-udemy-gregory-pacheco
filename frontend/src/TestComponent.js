import React from 'react';

export default class TestComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {owner: 'http://localhost:8000/users/3/', name: '', item_set: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  handleChange(event) {
    this.setState({owner: event.target.value});
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    var url = 'http://127.0.0.1:8000/list/' 
    const requestOptions ={
      method:'POST',
      headers: {'Content-Type': 'application/json', 'Authorization': 'Token ' + localStorage.getItem('token')},
      body: JSON.stringify({owner: this.state.owner, name: this.state.name, item_set:this.state.item_set })
    };
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
    

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Owner:
          <input type="text" value={this.state.owner} onChange={this.handleChange} />
          Nome da Lista:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}