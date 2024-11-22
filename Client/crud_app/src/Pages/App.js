import '../styles/App.css';
import CRUD from '../Elements/CRUD';
import Header from '../Elements/Header';

function App() {
  return (
    <>
      <Header />
      <div className='Body'>
        <div className="App">
          <CRUD />
        </div>
      </div>
    </>
  );
}

export default App;
