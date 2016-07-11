'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

$(() => {
  $('#application-x-www-form-urlencoded').on('submit', (event) => {
    let getFormFields = require('../../lib/get-form-fields');

    event.preventDefault();

    $.ajax({
      method: 'POST',
      // url: 'http://httpbin.org/post',
      url: 'http://localhost:3000/uploads',
      data: getFormFields(event.target),
    })
    .done((data) => console.log(data))
    .fail((error) => console.error(error))
    ;
  });

  $('#multipart-form-data').on('submit', (event) => {
    event.preventDefault();

    $.ajax({
      method: 'POST',
      // url: 'http://httpbin.org/post',
      url: 'http://localhost:3000/uploads',
      data: new FormData(event.target),
      contentType: false,
      processData: false,
    })
    .done((data) => console.log(data))
    .fail((error) => console.error(error))
    ;
  });
});
