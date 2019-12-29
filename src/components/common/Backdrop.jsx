import React from 'react';

import '../../assets/styles/Backdrop.scss';

const backdrop = (props) => {
  const { clicked, show } = props;
  return (
    show ? <button type="button" className="Backdrop" onClick={clicked}> </button> : null
  );
};

export default backdrop;
