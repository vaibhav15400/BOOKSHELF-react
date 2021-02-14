import React, { Component } from "react";
import '../BookSearch/BookAdd.css'
import { Route,Link } from "react-router-dom";
import Intro from '../Intro/Intro';

export default class BookAdd extends Component {
    render() {
        return (<div className="form">
            <form >
                <h3>ADD A BOOK</h3>

                <div className="form-group">
                    <label>Book Name</label>
                    <input type="text" className="form-control" placeholder="Book name" />
                </div>

                <div className="form-group">
                    <label>Book Author  </label>
                    <input type="text" className="form-control" placeholder="Book Author" />
                </div>

                <div className="form-group">
                    <label>Book Image  </label>
                    <input type="text" className="form-control" placeholder="Enter Image " />
                </div>

                <div className="form-group">
                    <label>Book User   </label>
                    <input type="text" className="form-control" placeholder="Enter BookUser" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="btn draw-border">
                    Already registered <hr></hr>
                    <Link to='/'>Home</Link>
                       <Route path='/' exact component={Intro} />
                    
                </p>
            </form>
            </div>
        );
    }
}