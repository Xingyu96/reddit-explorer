import logo from './logo.svg';
import './App.css';
import ProfileViewer from './ProfileViewer/ProfileViewer'

function App() {
  return (
    <div className="App">
      <section className="hero is-info">
        <div className="hero-body">
          <p className="title">
            Reddit Explorer
          </p>
          <p className="subtitle">
            An application to explore reddit data
          </p>
        </div>
      </section>
      <ProfileViewer/>
    </div>
  );
}

export default App;
