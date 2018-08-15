import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

class App extends Component {
    componentDidMount() {
        document.body.className=''
    }
    render() {
        return(
            <div>
                <h1>React Universal Blog</h1>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/work'>Work</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            {this.props.children}
            </div>
        )
    }
}

class Pages extends Component {
    render() {
        return(
            <div>
                <h2>Home</h2>
                <div>Some Home Page Content Here</div>
            </div>
        )
    }
}

class Work extends Component {
    render(){
        return(
            <div>
                <h2>Work</h2>
                <div>Some Work Page Content Here</div>
            </div>
        )
    }
}

class Contact extends Component {
    render(){
        return(
            <div>
                <h2>Contact</h2>
                <div>Some Contact Page Content Here</div>
            </div>
        )
    }
}

class noMatch extends Component {
    render(){
        return(
            <div>
            <h2>No Match!</h2>
            <div>404 error</div>
            </div>
        )
    }
}

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
    <Route path='about' component={About}/>
    <Route path='work' component={Work}/>
    <Route path='contact' component={Contact}/>
    <Route path='*' component={NoMatch}/>
    </Route> 
)