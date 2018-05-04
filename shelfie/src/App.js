import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';



class App extends Component {
  constructor(){
    super()
    this.state={
      list: ['https://http.cat/404', 'shoes', '25.99'],
      // [
      //   { imgURL:'https://http.cat/100', productName:'tofu', price:'5.99'},
      //   { imgURL:'https://http.cat/400', productName:'fluffy', price:'46.00'},
      //   { imgURL:'https://http.cat/404', productName:'roger', price:'25.00'}],
      image_url: '',
      productName: '',
      price: ''
    }
    this.cancelHandler = this.cancelHandler.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res=>{
      this.setState({
        list: res.data
      })
    })
  }

  deleteProduct(id){
    axios.delete(`/api/inventory/${id}`).then(res=>{
      this.setState({
        list: res.data
      });
    });
  }

  imgHandler(val){
    this.setState({
      image_URL: val
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
      image_url: '',
      productName: '',
      price: ''
    })
  }

  render() {
        //   let convertObj = Object.keys(list).map(function(key){
        //     return[Number(key), list[key]];
        // });
    return (
      <div className="App">
        <Header/>
        <Dashboard items={this.state.list}/>
        <Form start={this.componentDidMount}/>
        <input onChange={(event)=>this.imgHandler(event.target.value)} type='text'/>
        <input onChange={(event)=>this.productHandler(event.target.value)} type='text'/>
        <input onChange={(event)=>this.priceHandler(event.target.value)} type='text'/>
        <button onClick={this.cancelHandler}>Cancel</button>
        <button onClick={this.createProduct} >Add</button>
      </div>
    );
  }
}

export default App;
