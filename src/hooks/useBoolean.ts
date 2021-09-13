import {useCallback, useState} from 'react';
const useBoolean = (): [
  showModal: boolean,
  onShowModal: () => void,
  onHideModal: () => void,
] => {
  const [showModal, setShowModal] = useState(false);
  const onShowModal = useCallback(() => {
    setShowModal(true);
  }, []);
  const onHideModal = useCallback(() => {
    setShowModal(false);
  }, []);

  return [showModal, onShowModal, onHideModal];
};

export default useBoolean;
