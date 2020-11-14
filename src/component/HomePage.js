import React, { useState, useEffect, Fragment } from 'react'
import AddItem from './AddItem';
import hero from '../img/hero.jpg'
import '../App.css'
import '../props.css'
  



function HomePage() {

  const [list, setList] = useState([]);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    if (loading) {
      let _list = [];
      for (let i = 0; i < 12; i++) {
        _list.push(<AddItem placeholder={true} />)
      }
      setList(_list);
    }
  }, list);      

     
  return (
    <React.Fragment>
    <div className="home-page  ">
      <div className="ad-list flex aic">
        {list}
      </div>
            <button className="load-more fontr c333 anim s20">Load More</button>
          <div className="app-ribbon flex  aic  ">
              <div className="img flex ">
                <img className='bl' src="//statics.olx.com.pk/external/base/img/phone-app.png" />
              </div>
              
              
              <div className="meta  "> 
                <h2 className="title fontb s34 color  ">
                  TRY OLX APP
                    </h2>
                <span><h2 className="slougan color font s18 color ">Buy, sell and find just about anything using the app on your mobile.</h2></span>    
              </div>
                            
                <div className='meta'><span>
                    <h2 className="slougan color font s18 color ">
                    Buy, sell and find just about anything using the app on your mobile.
                    </h2>
                    </span>       
              </div>
              
               
          </div>      
          
          <div className="links abs">
            <h2 className="title fontb s30 color ">Get your App Today</h2>
            <div className='flex as' >
            <a href="#" className='noul bl'>
                <img src=" //statics.olx.com.pk/external/base/img/appstore_2x.png" />
                </a>
                <a href="#" className='noul bl'>
                <img src=" //statics.olx.com.pk/external/base/img/playstore_2x.png" /> </a>
                    
              
                
                
              </div>    
            
            </div>
            <div className='hclr' />
      
        
    </div>
    </React.Fragment>
  );
}

export default HomePage;
  
  
  
  
  

  
  
  
  
