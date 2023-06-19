import React from 'react';
import { toast } from 'react-toastify';

const ErrorHanler = () => {
  return <>{toast.error('Something has broken, try again')}</>;
};

export default ErrorHanler;
