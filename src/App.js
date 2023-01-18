import './App.css';
import Header from './header';
import AddButton from './addButton';// to be added later
import React from 'react';
function App() {
  var [to_do_items,to_do_changer] = React.useState([])
  function addItem(){
    to_do_changer(to_do_items =>{ return [...to_do_items,"hi"]}
    )
  }
  var items_to_be_rendered = to_do_items.map(item => <p>{item}</p>)
  return (
    <div className='app'>
      <Header/>
    <button className='addButton' onClick={addItem}>Add item</button>
    {items_to_be_rendered}
    </div>
  );
}

export default App;
