import './App.css';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <section className="d-flex">
        <Toaster position="top-center" />
        <SideBar />
        <main className="container-fluid py-5 px-5">
          <Outlet />
        </main>
      </section>
    </>
  );
}

export default App;
