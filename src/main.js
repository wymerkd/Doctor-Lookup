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
      $('#name').text(`Name: ${response.data[0].profile.first_name} ${response.data[0].profile.last_name}`);
    }
  });
});
