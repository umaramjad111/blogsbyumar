import './App.css';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import { Routes , Route , useNavigate } from "react-router-dom"
import Detail from './pages/Detail';
import AddEditBlog from './pages/AddEditBlog';
import About from './pages/About';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import "react-toastify/dist/ReactToastify.css"
import Header from './components/Header';
import Authentication from './pages/Authentication';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

function App() {

  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
      navigate("/auth");
    })
  }

  useEffect(() => {
     auth.onAuthStateChanged((authUser) => {
      if(authUser){
        setUser(authUser)
      }
      else {
        setUser(null)
      }
     })
  }, [])

  


  return (
    <div className="App">
      <ToastContainer/>
      <Header setActive={setActive} active={active} user={user} handleLogout={handleLogout}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/auth' element={<Authentication setActive={setActive} setUser={setUser}/>} />
        <Route path='/create' element={<AddEditBlog/>} />
        <Route path='/edit/:id' element={<AddEditBlog/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
