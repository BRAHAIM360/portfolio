
import './App.css';
import Landing from './componenets';
import ReactGA from 'react-ga' ;
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';


ReactGA.initialize("289157919")


function App() {
useEffect(()=>{
  ReactGA.pageview(window.location.pathname + window.location.search);
})
  return (

      <div>
       
         <Landing/>
      </div>
    
  
  );
}

export default withRouter(App) ;
