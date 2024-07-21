import logo from './logo.svg';
import './App.css';
import './style.css'
import NavBar from './components/NavBar';
import { Routes,Route } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetails from './components/BlogPostDetails';

function App() {
  return (
    <div className="App-body  w-full">
      <NavBar  />
    
      <Routes>
       <Route path="/BlogPost" element ={<BlogPostList/>} />
       <Route path="/BlogPost/post/:id" element ={<BlogPostDetails/>} />
      </Routes>
    </div>

    
  );
}

export default App;
