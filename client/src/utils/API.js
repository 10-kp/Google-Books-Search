import axios from 'axios';

export default {
  // Gets books from Google API
  getBooks: function () {
    return axios.get('/api/books');
  },
  // Gets one book from mongodb
  getBook: function (id) {
    return axios.get('/api/books/' + id);
  },
  // Delete the book with given id
  deleteBook: function (id) {
    return axios.delete('/api/books/' + id);
  },
  // Saves book to the database
  saveBook: function (bookData) {
    return axios.post('/api/books', bookData);
  },
};
