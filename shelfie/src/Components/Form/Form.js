import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            price: '',
            image_url: ''
        }
    }
    createProduct(props){
        const {name, price, image_url}= this.state
        axios.post('/api/product', {name, price, image_url}).then(res=>{
            this.setState({
                name: res.data.name,
                price: res.data.price,
                image_url: res.data.image_url
            })
        })
        this.props.start();
    }

    render(props){
        return(
            <div>Form</div>
        )
    }
}