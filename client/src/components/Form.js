import React from 'react';

export default function Form(props) {
  return (
    <div className='container'>
      <form>
        <div className='form-group'>
          <label htmlFor='search'>
            <h2>Search for and save Books of Interest</h2>
          </label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name='search'
            type='text'
            className='form-control'
            placeholder='Search a Book'
            id='search'
          />
          <button
            onClick={props.handleFormSubmit}
            className='btn btn-light mt-4 mb-5'
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
