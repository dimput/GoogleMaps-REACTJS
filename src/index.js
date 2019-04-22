import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/*
function getMahasiswa(mahasiswa){
    return 'Nama : '+mahasiswa.nama+' Nim : '+mahasiswa.nim;
}

const mahasiswi = {
    nama : 'Bill Gates',
    nim : '12761',
    angkatan : 2019
}

function getStatus(mahasiswa){
    if(mahasiswa.angkatan < 2019) {
        return "Mahasiswa Baru";
    }
    else {
        return "tidak Tahu Anjing!";
    }
}

const element = <h1>Hi !, {getMahasiswa(mahasiswi)}, anda adalah {getStatus(mahasiswi)}</h1>

ReactDOM.render(element, document.getElementById('root'));
*/

/*
function timeku(){
    const element = (
        <div>
            <h1>Waktu Indonesia Barat</h1>
            <h2>waktu : {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
};

setInterval(timeku,1000);
*/

/**
 * Component dan Props
 */

 /*
function Product(props){
    return (
    <div><h1>{props.judul}</h1><h3>Harga : {props.harga}</h3></div>);
}

const element = <Product judul = "koleksi Avengers" harga="100.000"/>

ReactDOM.render(element, document.getElementById('root'));
*/


/*
class Product extends React.Component {
    render(){
        return (
            <div><h1>{this.props.judul}</h1><h3>Harga : {this.props.harga}</h3></div>
        )
    }
}

const element = <Product judul = "koleksi Avengers" harga="100.000"/>
ReactDOM.render(element, document.getElementById('root'));
*/


// const element = <App/>
ReactDOM.render(<App/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
