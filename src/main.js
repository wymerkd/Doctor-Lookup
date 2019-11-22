import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#symptom-form').submit(function(event) {
    event.preventDefault();
    let userSymptom = $("#userSymptom")
    console.log(userSymtom)
  });
});
