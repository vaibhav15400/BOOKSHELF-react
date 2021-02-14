import React,{ Component } from 'react';
import Aux from '../../hoc/Auxi';
import BookShow from './book/BookShow';


class Books extends Component {
    render(){  
        return(
            <Aux >
                <div className="Book">
                   <BookShow />
                </div>
            </Aux>
        );
    }
}



export default Books;