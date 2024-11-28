import '../styles/App.css';
import CRUD from '../Components/CRUD';
import Header from '../Components/Header';

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
