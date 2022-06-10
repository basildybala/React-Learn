import {Component} from "react";
import './App.css';
import Todo from './components/todo'
import Count from './components/Counter'

// function App() {
//   return (
//     <div className="App">
//       <h1>Haiii</h1>
      
//     </div>
//   );
// }

class App extends Component{
  state={
    my:'Helooo Am Basil'
  }
  render(){
    return(
      <div className="App">
      <h1>{this.state.my}</h1>
      <Todo />
      <Count />
    </div>
    )
  }
}

export default App;
