import React from 'react';

import './style.css';
export function Input(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className='form-group mt-10'>
        <input className='form-control' onChange={props.onChange} {...props} />
      </div>
    </form>
  );
}

export function TextArea(props) {
  return (
    <div className='form-group mt-10'>
      <textarea className='form-control' rows='20' {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div>
      <button
        type='submit'
        {...props}
        style={{ float: 'right', marginBottom: 10 }}
        className='btn btn-success'
      >
        {props.children}
      </button>
    </div>
  );
}
