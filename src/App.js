import './App.scss';
import Header from './components/header/header';
import MyRoutes from './routes/routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="main-container ">
      <Header></Header>
      <MyRoutes></MyRoutes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
