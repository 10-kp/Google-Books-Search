import React from 'react';
import '../index.css';
import Button from 'react-bootstrap/Button';
// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
export function DeleteBtn(props) {
  return (
    <Button
      id='deleteBtn'
      variant='primary'
      type='submit'
      {...props}
      role='button'
      tabIndex='0'
    >
      Delete
    </Button>
  );
}
export function SearchBtn(props) {
  return (
    <Button
      id='searchBtn'
      variant='primary'
      type='submit'
      {...props}
      role='button'
      tabIndex='0'
    >
      Search
    </Button>
  );
}
export function ViewBtn(props) {
  return (
    <Button
      id='viewBtn'
      variant='primary'
      type='submit'
      {...props}
      role='button'
      tabIndex='0'
    >
      View More Details
    </Button>
  );
}

export function SaveBtn(props) {
  return (
    <Button
      id='saveBtn'
      variant='primary'
      type='submit'
      {...props}
      role='button'
      tabIndex='0'
    >
      Save To Reading List
    </Button>
  );
}
