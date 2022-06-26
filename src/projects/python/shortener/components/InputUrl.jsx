import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { set } from '../slices/setSlice';

export const InputUrl = () => {
  const dispatch = useDispatch();

  const [url, setUrl] = useState('');

  const handleChange = ( e ) => {
    setUrl(e.target.value);
  }

  const fetchHandler = ( ) => {
    fetch( "https://34.122.183.83:6758/shortener/?url=" + url )
      .then(res => {
        if (!res.ok) {
          throw new Error("HTTP status " + res.status);
        }
        return res.json();
      }).then(json => {
        const state = {
          url: json.url,
          truely: true,
        }
        dispatch(set(state));
      })
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();
    fetchHandler();
  }

  return (
    <>
      <div className='shorter'>
          <h2 className='subtitle'>Paste the URL to be shortened</h2>
          <div className='input_zone'>
            <form onSubmit={ handleSubmit }>
              <input
                type='text'
                placeholder='Paste the URL to be shortened'
                onChange={ handleChange }
              />
              <button
                type='submit'
                className='btn'
              >Short</button>
            </form>
          </div>
      </div>
    </>
  )
}
