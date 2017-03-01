import "isomorphic-fetch";

const DOUBAN_API = 'https://api.douban.com/v2/book/';

const BookAPI = {
  _simpleGet: (url, resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          resolve({notFound: true});
        }
        resolve(response.json());
      })
      .catch(reject);
  },

  _simplePost: (data, url, resolve, reject) => {
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status == 409) {
        resolve({ createdMessage: 'has already been taken' });
      }
      else if (response.status !== 201) {
        resolve({ notCreated: true });
      }
      resolve(response.json());
    }).catch(reject);
  },

  _simplePut: (data, url, resolve, reject) => {
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data)
    }).then((response) => {
      if (response.status !== 200) {
        resolve({ notCreated: true });
      }
      resolve(response.json());
    }).catch(reject);
  },

  _simpleDelete: (url, resolve, reject) => {
    fetch(url, {
      method: "DELETE",
      headers: { "content-type": "application/json" }
    }).then((response) => {
      if (response.status !== 204) {
        resolve({ notDeleted: true });
      }
      resolve(response);
    }).catch(reject);
  },

  getNewlyBookInfo: (id) => new Promise((resolve, reject) => {
    BookAPI._simpleGet(DOUBAN_API + id, resolve, reject);
  })
};

export default BookAPI;
