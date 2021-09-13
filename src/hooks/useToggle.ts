import {useCallback, useState} from 'react';
const useToggle = (): [showModal: boolean, onToggle: () => void] => {
  const [showModal, setShowModal] = useState(false);
  const onToggle = useCallback(() => {
    setShowModal(prev => !prev);
  }, []);

  return [showModal, onToggle];
};

export default useToggle;
