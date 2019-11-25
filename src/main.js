import { Doctors } from './../src/doctor.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#submit').click(function() {
    const userSymptom = $("#user-symptom").val();
    const doctorName = $('#doctor-name').val();
    $('#location').val("");
    console.log(userSymptom);

    (async () => {
      let getDoctors = new Doctors();
      const response = await getDoctors.findDoctors(doctorName, userSymptom);
      showDoctors(response);
    })();

    function showDoctors(response) {
      for (let i = 0; i < response.data.length; i++) {
        $('.results').append(`Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name} Phone: ${response.data[i].practices[0].phones[0].number} Website: ${response.data[i].practices[0].website} Address: ${response.data[i].practices[0].visit_address.street} ${response.data[i].practices[0].visit_address.city}, ${response.data[i].practices[0].visit_address.state} ${response.data[i].practices[0].visit_address.zip} Accepting new patients: ${response.data[i].practices[0].accepts_new_patients} <br>`);
      }
    }
  });
});
