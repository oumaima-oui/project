import React from 'react'
import './Style.css';

function App() {
    return (
    <div>
    <div style={{border:"solid 1px black",maxidWth:"100vw"}}>
      <h1 className="title red">my page</h1>
      <br/>
      <img src={"/imageInSrc.jpg"}alt="imageInSrc"/>  
      <br/>
      <img src="/imageInPublic.jpg" alt="imageInPublic"/> 
      </div>
    <video width="320" height="240" controls>
      <source src="myVideo.mp4" type="video/mp4" />
    </video>
    </div>
    );
}
    
export default App;
