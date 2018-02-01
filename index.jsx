import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            
                <BrowserRouter>
                <div>
                    
                    <Link to ="/">Home</Link>
                    <Link to ="/about">Home</Link>
                    <Link to ="/services">Home</Link>

                    
                    <Route path="/about" component ={About}/>
                    <Route path="/services" component ={Services}/>
<h1>This is homepage</h1>
                  </div>
                </BrowserRouter>


            

        )
    }
}

class About extends Component {
    render() {
        return (
            <BrowserRouter> <h1>This is About</h1></BrowserRouter>
           
        )
    }
}

class Services extends Component {
    render() {
        return (
            <h1>This is Services</h1>
        )
    }
}

ReactDOM.render(<Home />, document.getElementById("root"))