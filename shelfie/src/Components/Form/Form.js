import React, {Component} from 'react';

export default class Form extends Component{
    constructor(){
        super()
        this.state={
            
        }
    }
    createProduct(props){
        const {name, price, image_url}= this.state
        axios.post('/api/product', {name, price, image_url}).then(res=>{
            this.setState({

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