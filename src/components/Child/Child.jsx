import React, { Component } from 'react'

export default class Child extends Component {
   constructor(){
     super();
     console.log("mounting");
   }
   componentWillUnmount(){
    console.log("will it");
   }
   componentDidMount(){
    console.log("did it");
   }
  render() {
      console.log("render er");
      console.log(this.props);
      console.log(this.props.productInfo);
      let{category,desc,id,name,onsale,price}=this.props.productInfo;
    return (
        <>
          <div className='col-lg-4 text-center my-3'>
            <div className='product'>
              <h3>ID:{id}</h3>
              <h3>NAME:{name}</h3>
              <h3>CATE:{category}</h3>
              <h3>price:{price}</h3>
              <button onClick={()=>this.props.deleteprod(this.props.productInfo)} className='btn btn-primary mx-3'>Delete</button>
              <button onClick={()=>this.props.updateprod(this.props.productInfo)} className='btn btn-warning'>Update</button>
            </div>
          </div>
      </>
    )
  }
}
