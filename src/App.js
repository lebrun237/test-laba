import './App.css';
import HeaderReima from './components/headerreima';

function App() {
  return (
    <>
    <video playsInline autoPlay muted id="bgvid">
    <source src="/bgv.mp4" type="video/mp4"/>
    </video>
    <div className="App">
      <HeaderReima></HeaderReima>
      <div className="body">
        <h1>REIMA STUDIO</h1>
        <p>Rendre notre imagination réel d'une facon inimaginable</p>
      </div>
    </div>
  
    
   
    </>
  );
}

export default App;

/*
 <div id="anim"></div>
    { bodymovin.loadAnimation({
      container: document.getElementById('anim'),
      rendeer: 'svg',
      autoplay: true,
      path: 'data.json'
      }) }
    
*/