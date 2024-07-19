import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import summeryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';


function App() {

const dispatch = useDispatch()

  const fetchUserDetails = async () => {

    try {
      const dataResponse = await fetch(summeryApi.currentUser.url, {
        method: summeryApi.currentUser.method,
        credentials: 'include',
      });

      if (!dataResponse.ok) {
        const errorResponse = await dataResponse.json();
        throw new Error(errorResponse.message || 'Failed to fetch user details')
      }

      const userData = await dataResponse.json()

      if (userData.success) {
        dispatch(setUserDetails(userData.data))
      }
      //console.log('data-user', userData);
       
      // Additional logic to handle the userData will be added here

      
    } catch (error) {
      console.error('Error fetching user details:', error);
      toast.error('Error fetching user details: ' + error.message);
    }
  };

  useEffect(() => {
    fetchUserDetails()
    
  }, []);

  return (
    <>
    
      <Context.Provider value={{ fetchUserDetails }}>
        <ToastContainer />
        <Header />
        <main className='min-h-[calc(100vh-120px)]'>
          <Outlet />
          
        </main>
        <Footer />
      </Context.Provider>
     
    </>
  );
}

export default App;
