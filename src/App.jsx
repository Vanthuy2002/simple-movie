import './App.css';
import 'swiper/css';
import 'react-toastify/dist/ReactToastify.min.css';
import Message from './components/Toast/Message';
import Routing from './Routes/Routing';

function App() {
  return (
    <div className='App'>
      <Routing></Routing>
      <Message />
    </div>
  );
}

export default App;
