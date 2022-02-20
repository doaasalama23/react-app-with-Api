import React, { Component } from 'react'
import Child from '../Child/Child.jsx';
export default class Parent extends Component {
    state={
        producs:
          [
           {id:0,name:"iphone",category:"mobile",desc:"test",onsale:true,price:1000},
           {id:1,name:"iphone",category:"mobile",desc:"test",onsale:true,price:1000},
           {id:2,name:"iphone",category:"mobile",desc:"test",onsale:true,price:1000},
           {id:3,name:"iphone",category:"mobile",desc:"test",onsale:true,price:1000},
           {id:4,name:"iphone",category:"mobile",desc:"test",onsale:true,price:1000},
           {id:5,name:"iphone",category:"mobile",desc:"test",onsale:true,price:1000},
           {id:6,name:"iphone",category:"flash",desc:"test",onsale:true,price:1000},
          ]
    }
    deleteProduct=(current)=>{
      let producs=this.state.producs;
      let currentindex=producs.indexOf(current);
      producs.splice(currentindex,1);
      this.setState({producs})
    }
    updateProduct=(current)=>{
      let producs=this.state.producs;
      current.price--;
      this.setState({producs})
    
    }
  render() {
    return (
        <>
        <div className='row'>
          {this.state.producs.map((product,index)=><Child key={index} productInfo={product} deleteprod={this.deleteProduct} updateprod={this.updateProduct}/>)}
          {/* <Child productInfo={this.state.producs[0]}/>
          <Child productInfo={this.state.producs[1]}/>
          <Child productInfo={this.state.producs[2]}/>
          <Child productInfo={this.state.producs[3]}/>
          <Child productInfo={this.state.producs[4]}/>
          <Child productInfo={this.state.producs[5]}/> */}
        </div>
        </>
    )
  }
}
