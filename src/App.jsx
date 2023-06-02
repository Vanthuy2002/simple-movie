import './App.css';
import 'swiper/css';
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
