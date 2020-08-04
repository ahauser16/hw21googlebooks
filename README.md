## Title: Unit 21 - Google Books


### Table of Contents

* [Project Summary](#Project-Summary)
* [Instructions](#Instructions)
* [Installation [n/a]](#installation)
* [Usage [n/a]](#usage)
* [Credits [n/a]](#credits)
* [License [n/a]](#license)
* [Acceptance Criteria & Assignment Objectives](#checklist)
* [Badges [n/a]](#badges)
* [Contributing](cContributing)
* [Tests [n/a]](#tests)
----
#### Project Summary

In this activity, you'll create a new React-based Google Books Search app. This assignment requires you to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. You'll also use Node, Express and MongoDB so that users can save books to review or purchase later.

#### Instructions


### Instructions

* This application requires at minimum 2 pages, check out the following mockup images for each page:

  * [Search](Search.png) - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  * [Saved](Saved.png) - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

1. Start by using the 07-Ins_Mern example as a base for your application.

2. Add code to connect to a MongoDB database named `googlebooks` using the mongoose npm package.

3. Using mongoose, then create a Book schema.

4. At a minimum, books should have each of the following fields:

* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `image` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API

* Creating `documents` in your `books` collection similar to the following:

    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```

5. Create a layout similar to the mockups displayed above. This should be a SPA (Single Page Application) that uses [`react-router-dom`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

* The layout should include at least two React Components for each page `Search` and `Saved`.

* Feel free to try out alternative CSS framework to Bootstrap.

6. Add the following Express routes for your app:

* `/api/books` (get) - Should return all saved books as JSON.

* `/api/books` (post) - Will be used to save a new book to the database.

* `/api/books/:id` (delete) - Will be used to delete a book from the database by Mongo `_id`.

* `*` (get) - Will load your single HTML page in `client/build/index.html`. Make sure you have this _after_ all other routes are defined.

* Deploy your application to Heroku once complete. **You must use Create React App** and current versions of React and React-Router-Dom for this assignment.

- - -

### Bonus Live Updates to Saved Books

* Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an book. Your message should include the title of the saved book.

  * Say you have multiple browsers open, each one visiting your site. If you save an book in one browser, then all of your browsers should notify you that a new book was saved.

  * [Socket.io NPM package](https://www.npmjs.com/package/socket.io)


----
#### Installation

n/a


#### Usage 

n/a

----

#### Credits

1. Solo project

2. Tools/resources used: 
  - [Bootstrap][1]
  - [Openweathermap.org][2]
  - [Jquery.com][3] 

3.	Tutorials used: 
  - [MDN AJAX: Getting Started][4]
  - [Ajax Tutorial][5] 
  - [Jquery - Events][6]
  - [Jquery - DOM manipulation][7]
  - [Steps for an AJAX Operation][8]



#### License

n/a

----

#### Homework Acceptance Criteria Assignment Objectives
###### feature description
###### checklist status
###### issues (if applicable)

* [1. Weather-Dashboard-&-Inputs](#heading)
* [2. City-Search-with-search-history](#heading-1)
* [3. Displayed-Weather-Data](#heading-2)
* [4. UVI](#heading-3)
* [5. Five-day-forecast](#heading-4)
* [6. search-history-w/-links](#heading-5)
* [7. dash-opens-with-last-search](#heading-6)

##### 1. Weather-Dashboard-&-Inputs


###### feature description: a weather dashboard with *form inputs*
- [ ] incomplete
- issues: The first openweathermap API call (with 'latitude' and 'longitude' as its arguments) executes when the user approves a geolocation request.  The second API call (with 'City name') is supposed to execute when the user triggers a form-submit event, however, I can't get the second API call to work.

##### 2. City-Search-with-search-history


###### feature description: when a user searches for a city then they are presented with current and future conditions for that city and that city is added to the search history
- [ ] incomplete
- issues: See issue 1 above.


##### 3. Displayed-Weather-Data

###### when a user views the current weather conditions for a city then they are presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
- [x] complete

##### 4. UVI

###### feature description: when a user views the UV index then they are presented with a color that indicates whether the conditions are favorable, moderate, or severe
- [x] complete

##### 5. Five-day-forecast

###### feature description: when a user views the future weather conditions for a city then they are presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
- [ ] incomplete
- issues: This feature is partially complete in that it provides the requested info but only when the geolocation request is approved.  See issue 1 above.

##### 6. search-history-w/-links

###### feature description: when a user clicks on a city in the search history then they are again presented with current and future conditions for that city
- [ ] incomplete
- issues: See issue 1 above.  Also, due to time constraints I could not research how to keep the information in local storage.

##### 7. dash-opens-with-last-search

###### feature description: when a user opens the weather dashboard they are presented with the last searched city forecast
- [ ] incomplete
- issues: See issue 1 above.  Also, due to time constraints I could not research how to keep the information in local storage.

----

#### Badges

n/a

#### Contributing

[Contributor Covenant](https://www.contributor-covenant.org/)

#### Tests

n/a
###### [link references]

[1]: https://getbootstrap.com/
[2]: https://openweathermap.org/
[3]: https://api.jquery.com/
[4]: https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
[5]: https://www.tutorialspoint.com/ajax/index.htm
[6]: https://www.tutorialspoint.com/jquery/jquery-events.htm
[7]: https://www.tutorialspoint.com/jquery/jquery-dom.htm
[8]: https://www.tutorialspoint.com/ajax/ajax_in_action.htm
[9]: https://www.contributor-covenant.org/
