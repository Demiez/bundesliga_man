import React from 'react';

import Backdrop from './Backdrop';
import '../../assets/styles/Modal.scss';

const modal = (props) => {
  const { children, closeModal, show } = props;
  return (
    <>
      <Backdrop show={show} clicked={closeModal} />
      <div
        className="Modal"
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default modal;
