import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
