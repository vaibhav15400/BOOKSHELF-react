import React,{ Component } from 'react';
import BookList from './BookList.json';



class Books extends Component { 
    render(){
        const {BookDetail} = this.props
        return(
            <div>
            <h1>{BookDetail.author}</h1>
            <h2>{BookDetail.user}</h2>
            <p>{key=BookDetail.id}</p>
            </div>
        );
    }
}



export default Books;