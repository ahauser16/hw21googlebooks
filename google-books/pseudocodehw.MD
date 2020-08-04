I tried to pseudocode the search ability using the assignments as a guide but was unable get code to work.


  code challenge: a self invoking function 'getBooks' that when called executes a code block which passes input from the user 'q', the otherwise empty string, through a getBooks function located within the API.js module...
  
  QQQ-what is the point of this?  Does it ultimately serve as a router or did it allow the author to D.R.Y.?///QQQ
  AAA-we're passing the input from the user to then get books from the Google API-is this right?AAA//

  ...that passes q through an anonymous function that when called returns/outputs an axios-get request, (promise based get request) that takes in (as a parameter) the key/value pair { q: "title:" + q }, which is routed to: '/api/google'...
  
  QQQ-the purpose of this is include the value q within the promise based request but for what purpose?
  
  ...where the get request (promise-based) containing { q: "title:" + q }---is routed either to: root'/' or [[[--- how does the .get(googleController.findAll); execute???QQQ]]]...

  ...I assume the data that we've been following, namely q, is passed through the findAll function located in googleController which defines the method findAll which (i)searches the google books API and only returns the entries we have not saved and (ii) makes sure that the books returned from the API all contain a title, author, link, description, and image...

  QQQ---so googleController filters out duplicates and provides error handling, correct???---QQQ

  ...when findAll executes it takes in a request [QQQis this q?] and in its response executes a code block that defines request as { query : params }; then an axios-get request (or a volumes search) is made to the google API while still holding params [[[QQQ which is essentially { q: "title:" + q } ??? QQQ]]]

https://developers.google.com/books/docs/v1/using for documentation for upcoming code

  .then we filter the results using the google API methods (or key word search) for title, author, description...

  .then we take what matched and we look through the DB and finds the value of the first element in the array that satisfied the provided testing function which is ???

  .then we filter out the googleID
  .then we pass the results into a res.json 