import './App.css';
import 'swiper/css';
import 'react-toastify/dist/ReactToastify.min.css';
import Routing from './Routes/Routing';
import Message from './components/Toast/Message';

function App() {
  return (
    <div className='App'>
      <Routing></Routing>
      <Message />
    </div>
  );
}

export default App;
