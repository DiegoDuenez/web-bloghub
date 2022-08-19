import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import logo from '../../img/logo.png';

import Input from '../Input/input';
import Button from '../Button/button';
import Navbar from '../Navbar/navbar';
import Card from '../Card/card';

import axios from 'axios';

import Background from "../Background/background";

import '../../global/global.css';
import './blog.css';
import DocTitle from "../DocTitle/doctitle";


class Blog extends React.Component{

    state = {
        blog: [],
    }


    async componentWillMount() {
        const id = this.props.params.id;
       
        const res = await axios.get('http://127.0.0.1:8000/api/Post/'+id)
        .then((response) => {
            console.log(response)
            let array_response = [response.data.PostList];
            this.setState({
                blog: array_response[0],
            });
            
          });
          console.log(this.state.blog)
          //console.log(res);
    }  

   render(){
    //const {id} = this.props.match.params;
    return(
        <div className="blog">
            <DocTitle pageTitle={"Blog "  }/>
            <Navbar></Navbar>
            <div className="blog__container">
                
                <div className="blog__main">
                    <div className="blog__header">
                        <div className="blog__user">
                        </div>
                        <h2><span style={{color: 'var(--verde)'}}>#</span> {this.state.blog.title} </h2> 
                    </div> 
                    <div className="blog__body">
                        <p>
                            {this.state.blog.description}
                         </p>
                     </div>
                    <div className="blog__footer">
                        <p className="blog__text blog__text--inline">@{this.state.blog.user_id}</p>
                        <p className="blog__fecha blog__text--inline">{this.state.blog.created_at}</p>
                    </div>
                </div>  

                <h3>Comentarios (1)</h3>

                <div className="comentario">
                    <div className="comentario__user"></div>
                    <div className="comentario__contenido">
                        <p className="comentario__username">@markzuckenberg <span className="comentario__text--gray">1 week ago</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio quod explicabo eveniet beatae, a, nobis enim doloribus hic id, eum quibusdam asperiores accusamus rerum vel suscipit blanditiis? Totam, consectetur?</p>
                    </div>
                </div>

                <div className="comentario">
                    <div className="comentario__user"></div>
                    <div className="comentario__contenido comentario__contenido--end">
                        <textarea className="comentario__textarea" placeholder="Agrega un comentario..."></textarea>
                        <Button  type="submit" classes="button--verde" text="Comentar"/>
                    </div>
                </div>




            </div>

        </div>
    )
   }

}

export default Blog;