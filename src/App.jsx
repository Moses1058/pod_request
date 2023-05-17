import logo from './assets/desktop/logo.svg';
import Logos from './Logos';
import Input from './Input';
import './App.css';

function App() {


  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h1>Publish your podcasts <span>everywhere.</span></h1>
      <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
      <Logos />
      <Input />
    </div>
  )
}

export default App
