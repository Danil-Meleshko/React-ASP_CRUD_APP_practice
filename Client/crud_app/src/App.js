import './styles/App.css';
import CRUD from './CRUD';
import Header from './Header';

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
