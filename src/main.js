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
        $('#name').append(` Name: ${response.data[i].profile.first_name}`);
      }
    }
  });
});
