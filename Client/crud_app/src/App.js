import './styles/App.css';
import CRUD from './CRUD';
import Header from './Header';
import Training from './Training';

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
