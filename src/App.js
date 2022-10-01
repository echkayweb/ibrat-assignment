import './App.scss';
import Navigation from './components/navigation/navigation';
import SlideAnimation from './components/slide-animation/slide-animation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <hr />
      <SlideAnimation>
        <h2>Workout</h2>
      </SlideAnimation>
    </div>
  );
}

export default App;
