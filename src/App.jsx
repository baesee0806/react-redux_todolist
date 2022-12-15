import AddList from './component/AddList';
import Header from './component/Header'
import LayOut from './component/LayOut'
import ToDoList from './component/ToDoList'


function App() {
  return (
    <LayOut>
      <Header/>
      <AddList/>
      <ToDoList/>
    </LayOut>
  )
}

export default App;
