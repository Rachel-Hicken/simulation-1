import React, {Component} from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component{

    render(props){
        let {items} = this.props;
        let currentList = items.map((el,i)=>{
           return<Product key={i} product={el}/>
        })
        return(
            <div>
                <p>Dashboard</p>
                <Product/>
                {currentList}
            </div>
        )
    }
}