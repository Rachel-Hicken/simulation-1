import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';



class App extends Component {
  constructor(){
    super()
    this.state={
      list: [
        { imgURL:'https://http.cat/100', productName:'tofu', price:'5.99'},
        { imgURL:'https://http.cat/400', productName:'fluffy', price:'46.00'},
        { imgURL:'https://http.cat/404', productName:'roger', price:'25.00'}
      ],
      imgURL: '',
      productName: '',
      price: ''
    }
    this.cancelHandler = this.cancelHandler.bind(this);
  }

  imgHandler(val){
    this.setState({
      imgURL: val
    })
  }

  productHandler(val){
    this.setState({
      productName: val
    })
  }

  priceHandler(val){
    this.setState({
      price: val
    })
  }

  cancelHandler(){
    this.setState({
      imgURL: '',
      productName: '',
      price: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard items={this.state.list}/>
        <Form/>
        <Header/>
        <input onChange={(event)=>this.imgHandler(event.target.value)} type='text'/>
        <input onChange={(event)=>this.productHandler(event.target.value)} type='text'/>
        <input onChange={(event)=>this.priceHandler(event.target.value)} type='text'/>
        <button onClick={this.cancelHandler}>Cancel</button>
        <button>Add</button>
      </div>
    );
  }
}

export default App;
