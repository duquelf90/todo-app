import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='container bg-gray-700 mt-20 p-8 rounded-md text-white mx-auto'>
      <main>
        <Outlet />
      </main>
      <ToastContainer autoClose={4000} />
    </div>


  );
};

export default App;
