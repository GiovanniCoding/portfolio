import React from 'react'
import { useSelector } from 'react-redux'

import { InputUrl } from './components/InputUrl'
import { ShowUrl } from './components/ShowUrl'

import "./scss/main.scss"

export default function Shortener() {

  const isURL = useSelector((state) => state.set.isURL);

  return (
    <>
      <h1 className='title'>Short URL</h1>
      { isURL ? <ShowUrl /> : <InputUrl /> }
    </>
  )
}
