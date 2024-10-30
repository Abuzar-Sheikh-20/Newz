import React from 'react'
import loading from './loading.gif'

const Spinner = ()=> {

    return (
      <div className='my-5 text-center'>
        <img src={loading} alt="" style={{ width: '100px'}} />
      </div>
    )
}

export default Spinner
