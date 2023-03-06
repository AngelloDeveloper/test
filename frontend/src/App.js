import './App.css';

//components
import Form from './components/form';
import CardList from './components/cardList';

function App() {
  return (
    <div className="App">
        <div className='container-fluid p-4'>
          <div className="row mt-4">
            <div className="col-12">
              <h2 className='text-center'>Crud Platos</h2>
            </div>
          </div>
          <div className="row mb-4">
            <div className='col-8'>
            <div style={{overflowY: 'scroll', height: '500px'}}>
              <div className='row'>
                  <div className='col-3 mb-4'>
                    <CardList />
                  </div>
                  <div className='col-3 mb-4'>
                    <CardList />
                  </div>
                  <div className='col-3 mb-4'>
                    <CardList />
                  </div>
                  <div className='col-3 mb-4'>
                    <CardList />
                  </div>
                  <div className='col-3 mb-4'>
                    <CardList />
                  </div>
                  <div className='col-3 mb-4'>
                    <CardList />
                  </div>
                  <div className='col-3 mb-4'>
                    <CardList />
                  </div>
                  <div className='col-3 mb-4'>
                    <CardList />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4'>
              <Form />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
