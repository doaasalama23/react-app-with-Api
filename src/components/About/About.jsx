import { Component } from 'react';
import { Link , Outlet } from 'react-router-dom';
import style from './About.module.css';
export default class About extends Component
{
  state={
    name:"doaaaaa",
    age:30,
    count:0
  }
  changeCount=()=>{
    let myCount=this.state.count;
    myCount=1445;
    this.setState({count:myCount})
  }
  changeName=()=>{
    let myName=this.state.name;
    myName='mariem';
    this.setState({name:myName})
  }
  render(){
    return (
      <>
      <h1 className={`bg-danger ${style.test}`}>doaa salama</h1>
      <div className='row'>
      <div className='col-md-3'>
        <nav>
          <ul>
            <li>
              <Link to='projects'>projects</Link>
            </li>
            <li>
              <Link to='services'>services</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='col-md-9'>
        <Outlet/>
      </div>
      </div>
      {/* <h1 className='bg-warning text-center'>Remember copy and paste لادين له</h1> */}
        {/* <h2>name:{this.state.name}</h2>
        <h2>count:{this.state.count}</h2>
         <h2 className={style.test}>الله</h2>
         <button onClick={this.changeCount} className='btn btn-primary mx-3'>click me</button>
         <button onClick={this.changeName} className='btn btn-warning'>click me</button> */}
      </>
    )
    
  }
}