import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import CustomersPage from './customers/CustomersPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Header />
      <section className="d-flex">
        <Toaster position="top-center" />
        <SideBar />
        <main className="container-fluid py-4 px-4">
          <CustomersPage />
        </main>
      </section>
    </>
  );
}

export default App;
