import React, { Component, useState } from 'react';

import { Container, Row, Button } from "react-bootstrap";




import useApi from '../hooks/useApi'


export default function LiveNews( {text}) {



  const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=33670a8619134e64bae86e09a7d9d57c';


    
 const { loading, data } = useApi(url)





  return (
   

    
      
        <div className="live-news-widget-wrap">
        
          <div className="live-news-widget grid-limit">
          
            <div className="live-news-widget-stairs left red">
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
            </div>
        
            <div className="live-news-widget-stairs right blue">
            <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
              <div className="live-news-widget-stair"></div>
            </div>
            
            <div className="live-news-widget-title-wrap d-flex align-items-center">
              <img className="live-news-widget-icon" src="./img/live-news-icon.png" alt=""/>
              <p className="live-news-widget-title mb-0">Live News</p>
            </div>
          
            <div id="lineslide-wrap1" className="live-news-widget-text-wrap">
            
            
  

            <div className="skills live-news-widget-text">

            {data?.map(value=>(
                 <>
               
                  <span  className="live-title me-1"> {value.title}:</span> 

                  <span>{value.description.substring(0,90)}...</span> 

                  <span className="separator"><span className="separator-bar">/</span><span className="separator-bar">/</span></span> 

                 </>
              ))} 


            
            </div>
      


             
                
    
              
              {/* {data?.map(value=>(
                 <>  <p className="live-news-widget-text marquee"><span>{value.title}</span></p></>
              ))}  */}

             
           
              
             
       
            </div>
          
          </div>
      
        </div>

        
  );
}

