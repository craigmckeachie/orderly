import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';

function App() {
  return (
    <>
      <Header />
      <section className='d-flex'>
        <SideBar />
        <main className="container-fluid py-4 px-4">
          <h3>Customers</h3>
          <hr />
        </main>
      </section>
    </>
  );
}

export default App;
