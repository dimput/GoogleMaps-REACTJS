import React from 'react';
import logo from './logo.svg'
import './bootstrap.css'

class Product extends React.Component {
    render(){
        return (
            <a href="hehe" className="col-3 item-product">
                <div className="content-item">
                    <img src={logo} alt="logo" className="text-center"></img>
                    <h4 className="text-center judul-product">{this.props.judul}</h4>
                    <h6 className="text-center harga-product">Rp {this.props.harga}</h6>
                </div>
            </a>
        )
    }
}

export default Product