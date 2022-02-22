import React, { Component } from 'react'
import axios from 'axios'
import style from './Contact.module.css'
export default class Contact extends Component {
    state={
        articles:[]
    }
    getsports=async()=>{
        let {data}=await axios.get('https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=cdd5fee5efdc48b4aed69c35912ea32f');
        console.log(data);
        this.setState({articles:data.articles});
      }
      componentDidMount(){
        this.getsports();
      }
      render(){
        return(
          <>
         <h2 className='bg-dark text-white text-center'>ان شاء الله هبقى حد مهم جدا فى الرياكت</h2>
          <div className='row'>
            {this.state.articles.length>0?this.state.articles.map((article,index)=>
              <div key={index} className='col-md-4 my-3'>
                <img className={`${style.imgh} w-100`} src={article.urlToImage}></img>
                <h5>{article.title}</h5>
              </div>
            ):<div className='min-vh-100 d-flex justify-content-center align-items-center'>
                <i className='fa fa-spinner fa-spin fa-5x'></i>
                </div>}
          </div>
         </>
         )
      }
    }