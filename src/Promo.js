import React, { Component }  from 'react'
import './bootstrap.css'

class Promo extends Component {
    render() {
        return (
            <div className="col-4 item-pembayaran">
                <div className="Promo-item">
                    <img src={this.props.gambar} alt="promo"></img>
                    <h6 className="text-center">{this.props.tag}</h6>
                </div>
            </div>
        );
    }
}

export default Promo;