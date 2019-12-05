export class Doctors {
  async findDoctors(userSymptom) {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${userSymptom}&location=or-portland&skip=0&user_key=${process.env.API_KEY}`);

    if(response.ok === true) {
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } else {
      alert("There was an error handling your request: " + response.status + " " + response.statusText);
    }
  }
}
