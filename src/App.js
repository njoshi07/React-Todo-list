import './App.css';

import Todos from "./component/Todos";


function App() {
   const doList = [
           {id: 1, name:"Do Coding", completed: true},
           {id: 2, name:" Workout ", completed: true},
           {id: 3, name:"Take a Walk", completed: true}
    ]
  return (
    <div className="App">
         <Todos TodosList = {doList}/>
        
    </div>
  );
}

export default App;
