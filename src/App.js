import InvoiceForm from './components/InvoiceForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {

  
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100">
      <div className='container'>
        <InvoiceForm/>
      </div>
    </div>
  );
}

export default App;
