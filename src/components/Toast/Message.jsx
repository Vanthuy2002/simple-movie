import React from 'react';
import { ToastContainer } from 'react-toastify';

const Message = () => {
  return (
    <ToastContainer
      position='top-right'
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      theme='light'
    />
  );
};

export default Message;
