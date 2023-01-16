import React from 'react'
import { Container, Row, Button } from "react-bootstrap";
import useApi from '../hooks/useApi'



export default function Center() {

    const url = 'https://newsapi.org/v2/everything?q=playstation&pageSize=3&sortBy=relevancy&apiKey=33670a8619134e64bae86e09a7d9d57c';
    const { loading, data } = useApi(url)



    return (
        
          <div className="center-content">


        {data?.map(value=>(
                 <div key={value.title} className='center-news-box mb-5'>

                    <div className='center-image mb-2'>
                        <img src={value.urlToImage}/>
                        <span className="sidebar-image-author">
                            {value.source.name}
                        </span>
                    </div>

                  <h3 className="center-news-title"> {value.title}</h3> 
                  <p className='center-news-meta'>

                   
                         By: <strong className="blue">{value.author}</strong> | {value.publishedAt}
                
                  
                  </p>

                  <p className='center-news-content'>
                    {value.description}
                  </p>


                 </div>
              ))} 


  
        
          </div>
  
          
    );
  }
  