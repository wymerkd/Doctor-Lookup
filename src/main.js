
import { Doctors } from './../src/doctor.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#submit-form').submit(function(event) {
    event.preventDefault();
    const userSymptom = $("#user-symptom").val();
    
    (async () => {
      let getDoctors = new Doctors();
      const response = await getDoctors.findDoctors(userSymptom);
      showDoctors(response);
    })();

    function showDoctors(response) {
      if (response.data.length === 0) {
        $('.results').text("No doctors meet the criteria");
      } else {
        for (let i = 0; i < response.data.length; i++) {
          $('.results').append(`Name: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}<br>
          Address: ${response.data[i].practices[0].visit_address.street} ${response.data[i].practices[0].visit_address.city}, ${response.data[i].practices[0].visit_address.state} ${response.data[i].practices[0].visit_address.zip}<br>
          Phone: ${response.data[i].practices[0].phones[0].number}<br>`);
          if (response.data[i].practices[0].website === undefined) {
            $('.results').append(`Website: Not Available <br>`);
          } else {
            $('.results').append(`Website: ${response.data[i].practices[0].website}<br>`);
          }
          if (response.data[i].practices[0].accepts_new_patients === true) {
            $('.results').append(`Currently accepting new patients <br> <hr> <hr>`);
          } else {
            $('.results').append(`Not currently accepting new patients <br> <hr>`);
          }
        }
      }
    }
    $('#user-symptom').click(function() {
      $('.results').empty();
    });
  });
});
