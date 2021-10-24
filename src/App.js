
import './App.css';
import Landing from './componenets';
import ReactGA from 'react-ga' ;
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import ProjectDesc from './pages/project';

ReactGA.initialize("G-X28P09E27C")


function App() {
useEffect(()=>{
  ReactGA.pageview(window.location.pathname + window.location.search);
})
  return (

    <div>
    {/* <ProjectDesc/> */}
      <Landing/>
   </div>
  
  );
}

export default withRouter(App) ;
