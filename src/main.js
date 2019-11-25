import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(document).ready(function() {
  $('#symptom-button').click(function() {
    const userSymptom = $("#user-symptom").val();
    console.log(userSymptom);
  });
});
