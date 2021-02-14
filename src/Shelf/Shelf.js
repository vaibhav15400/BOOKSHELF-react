import React ,{Component} from 'react';
import { Route,Link } from "react-router-dom";
import './Shelf.css';
import BookAdd from  './BookSearch/BookAdd';
import Intro from './Intro/Intro';
import Aux from '../hoc/Auxi';
import Logo from '../component/Logo/Logo';
import Books from './BookList/Books';


class Shelf extends Component{
    render(){
        return (
            <Aux >
                <div className ="Shelf">
                    <header>
                        <nav>
                            <ul className="Color">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to={{
                                pathname:'/books',
                                hash:'submit',
                                search:'?quick-submit=true'
                                }}>BOOK LIST</Link></li>
                            <li><Link to='/book-add'>BOOK ADD</Link></li>

                            </ul>
                        </nav>
                    </header>
                </div>
                <div className='Stylelogo'>
                    <Logo />
                </div>
                <Route path='/' exact component={Intro} />
                <Route path='/book-add' exact component={BookAdd} />
                <Route path='/books' exact component={Books} />
            </Aux>

        );
    }
}

export default Shelf;