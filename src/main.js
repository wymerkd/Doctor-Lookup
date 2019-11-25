import { Doctors } from './../src/doctor.js';
import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#symptom-button').click(function() {
    const userSymptom = $("#user-symptom").val();
    console.log(userSymptom);

    (async () => {
      let getDoctors = new Doctors();
      const response = await getDoctors.findDoctors();
      showDoctors(response);
    })();

    function showDoctors(response) {
      
    }


  });
});
