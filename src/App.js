import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavMenu from'./component/menu';
import './component/menu.css';



const Nav=[
  {title:'Home',
href:'#'},
{title:'Services',href:'#',drop:['For entrepreneurs','For students','For hobbies']},
{title:'Contact',href:'#'}

]
function App() {
  return (
    <div className="App">
      
      <NavMenu Nav={Nav}/>
  </div>
  )
    
}

export default App;
