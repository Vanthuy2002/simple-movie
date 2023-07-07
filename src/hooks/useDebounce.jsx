import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const useDebounce = (initialValue, delay) => {
  const [debounceVal, setDebounceVal] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceVal(initialValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [initialValue, delay]);

  return debounceVal;
};

useDebounce.propTypes = {
  initialValue: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

useDebounce.defaultProps = {
  delay: 1000,
};

export default useDebounce;
