import './App.css';
import {MyProfilPhoto} from "./Component/Profile/ProfilPhoto";
import {MyFullName} from "./Component/Profile/FullName";
import { MyAddress } from "./Component/Profile/Address";


function App() {
  return (
    <div className='App'>
        <div className='App-header'>
          <MyProfilPhoto />
          <MyFullName />
          <MyAddress />        
        </div>
    </div>
   
  );
}

export default App;
