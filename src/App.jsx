import './App.css'
import {Provider} from 'react-redux';
import store from './Redux/store';
import Comp1 from './Components/Comp1';
function App() {


  return (
    <Provider store={store}>
       <div>
    <Comp1/>
     </div>
    </Provider>
   
  )
}

export default App
