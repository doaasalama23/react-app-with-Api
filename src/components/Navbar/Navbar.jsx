import { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component
{
  state={
    name:"doaaaaa",
    age:30
  }
  render(){
    return(
     
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <Link className="nav-link" to='home'>Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to='about'>About</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to='contact'>Contact</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to='gallery'>Gallery</Link>
                  </li>
              </ul>
            </div>
          </div>
</nav>
    
    )

      
  }
}