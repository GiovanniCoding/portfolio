import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { GiHappySkull } from 'react-icons/gi';
import { MdOutlineContentCopy } from 'react-icons/md';

import { set } from '../slices/setSlice';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const ShowUrl = () => {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.set.url);
  const [openCopyMessage, setOpenCopyMessage] = useState( false );

  const handleSubmit = ( e ) => {
    const state = {
      url: '',
      truely: false,
    }
    dispatch(set({ state }));
  }

  const handleCopy = () => {
    navigator.clipboard.writeText( url );
    setOpenCopyMessage(true);
  }

  const handleCloseCopy = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenCopyMessage(false);
  };

  return (
    <>
      <div className='shorter'>
          <h2 className='subtitle'>Enjoy It <GiHappySkull /></h2>
          <div className='input_zone'>

          <Snackbar open={openCopyMessage} autoHideDuration={6000} onClose={handleCloseCopy}>
            <Alert onClose={handleCloseCopy} severity="success" sx={{ width: '100%' }}>
              Copied URL
            </Alert>
          </Snackbar>

            <span>{ url }</span>
            <button
              onClick={ handleCopy }
              className='copy_btn'
            >
              <MdOutlineContentCopy />
            </button>
            <button
              type='text'
              className='btn return_btn'
              onClick={ handleSubmit }
            >
              Shorten another URL
            </button>
          </div>
      </div>
    </>
  )
}
