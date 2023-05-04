const form = document.getElementById('form');

function stringifyFormData(fd) {
  const data = {};
  for (let key of fd.keys()) {
    data[key] = fd.get(key);
  }
  return JSON.stringify(data, null, 4);
}

const handleSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const stringified = stringifyFormData(data);
  console.log(stringified);
};


form.addEventListener('submit', handleSubmit);

handleSubmit 
// Path: public\main.js
// Compare this snippet from utils\index.js:
// function setMainView(view){
//    return {
//     footer: 'partials/footer',
//     header: 'partials/header',
//     main: 'partials/main/${view}'
//    }
// }
//
// module.export = { setMainView }
//
// // Path: views\index.html
//
//
