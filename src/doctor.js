export class Doctors {
  async getDoctors() {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=or-portland&skip=0&limit=10&user_key=f42c94ad008bb7ce74679e9d77369825`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
