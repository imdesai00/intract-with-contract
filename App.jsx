import { Link, Route,Routes } from "react-router-dom"
// import Home from './components/home.js'
import Form from './components/form.js'

function App() {

  return (
    <div className="app">
      {/* <Link to="/">Home</Link> */}
      <Link to="/"></Link>
      <Routes>
        {/* <Route extct path='/' element={<Home/>}></Route> */}
        <Route extct path='/' element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
