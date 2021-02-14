import React,{ Component } from 'react';
import BookList from '../BookList.json';
import './book.css';
import Aux from '../../../hoc/Auxi';


class Books extends Component {

    render(){
          
        return(
            
                <div className="Book">
                    {BookList.map((BookDetail)=>{
                        return (     
                             <Aux>
                                     <div className='container'>
                                        <div className='card'>

                                                <img alt={'Books'} src={BookDetail.image} className='card__image'/>
                                            <div >
                                                    <h2 className='card_name'>{BookDetail.name}</h2>
                                                    <p className="btn draw-border">{BookDetail.author} </p>
                                                    <p className="btn draw-border">{BookDetail.user}</p>
                                                    
                                                </div> 
                                            </div>
                                    </div>
                            </Aux>
                        )})}
                </div>
                            
            );}}



export default Books;