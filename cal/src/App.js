import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sender from './Components/Sender/Sender';
import YaIcon from './Components/YaIcon/YaIcon';
import YaIntro from './Components/YaIntro/YaIntro';
import YaSubmit from './Components/YaSubmit/YaSubmit';

function App(props) {
  return (
    <>
    <Routes>
      <Route path='/' element={<YaIcon/>} />
    </Routes>
    <YaIntro/>
    <Sender/>
    <YaSubmit/>
    </>
  );
}

export default App;
