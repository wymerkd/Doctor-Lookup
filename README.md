
# _Doctor Lookup_

#### _A web application that allows a user to search for doctors in the Portland, OR are via the Better Doctor API, 11/22/2019_

#### By _**Kyle Wymer**_

## Description

_This project demonstrates my current skills and understanding of HTML, CSS, Bootstrap 4, Javascript, jQuery, Webpack, and APIs. The application consists of an input field where a user can search by inputting symptoms or a doctor's name. After searching, the application will incorporate the Better Doctor API to return a list of doctors that meet the search query. The doctor's name, phone number, address, website, and whether or not they are accepting new patients will all be returned to the user._


## Specifications

|  Behavior | Input  | Output  |
|---|---|---|
| Application takes a user's inputted name and returns a list of doctor's| John | List of doctor's names containing "John"|
| Application takes a user's inputted symptom and returns a list of doctor's that can treat symptom| fever | List of doctor's that can treat a "fever"|
| If the API call is unsuccessful, the user will be alerted.| response.ok === false| "There was an error handling your request: 401 Unauthorized"|
| If search results do not match any doctors in the database, the user is informed.| Bob | "No doctors meet the criteria"|


## Setup/Installation Requirements
* _Clone or download the repository from GitHub_
* _Visit the Better Doctor API site and click “Get a free API key”_
* _Create an .env file in the root of this directory_
* _Open the .env file and add the following:  API_KEY = YOUR API KEY_
* _In the terminal, run $ npm install_
* _In the terminal, run $ npm run start_


## Known Bugs

_No known bugs_

## Support and contact details

_Please contact Kyle Wymer, at wymerkd@gmail.com if support is needed_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap 4_
* _JavaScript_
* _jQuery_
* _Webpack_
* _Better Doctor API_

### License

*Copyright <2019> <Kyle Wymer, Epicodus>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*
