import './App.css';
import ClassComp from './components/ClassComp';
import FunctionComp from './components/FunctionComp';
import CounterComp from './components/CounterComp';
import ToggleImage from './components/ToggleImage';
 import ChangeImage from './components/ChangeImage';
import FormValComp from './components/FormValComp';

function App() {
  return (
    <div className="App">
      <ClassComp fname="Girish" lname="kumar" email="girish@gmail.com" contact={9078788998} city="Chennai"/>
      <FunctionComp fname="Girish" lname="kumar" email="girish@gmail.com" contact={990987898} city="Chennai"/> 
      <CounterComp/> 

       <ToggleImage/> 
       <ChangeImage/>
       <FormValComp/> 

    </div>
  );
}

export default App;
