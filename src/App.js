import {Component} from "react";
import TodoApp from "./components/TodoApp/TodoApp";


// function App() {
//   return (
//     <div className="App">
//       <h1>Haiii</h1>
      
//     </div>
//   );
// }

class App extends Component{
 
  render(){
    return(
      <div className="App">
      <TodoApp />

    </div>
    )
  }
}

export default App;
