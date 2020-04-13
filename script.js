//var jumbotron = document.querySelector(".jumbotron");
//var lead = document.querySelector(".lead");

// var currentDate = 

var containerDiv = document.getElementsByClassName("container");
var timeTable = document.querySelector("time-table");

var contentInput = document.querySelectorAll(".content-input");
var time = document.querySelectorAll("#time");
var localStorage = window.localStorage;

// Initialize each time slot
// Iterate over all table rows (TR)...
$('table.time-table tr').each(function(index) {
    
    // Find the text area child of this current row.
    var textarea = $(this).find('textarea');
    // Use each text area's ID as the storage key.
    var storageKey = textarea.attr('id');
   
    // Retrieve any previously localStorage value using this
    // textarea's ID as the storage key.
    var storedContent = localStorage.getItem(storageKey);
    // Set the value of any stored content.
    textarea.val(storedContent);
    
    // Find the save button child of this current row.
    var saveButton = $(this).find('.svBtn');
    // Add a "click" handler to the button
    saveButton.click(function(index) {
        // Save local storage using the current row's
        // text area's ID for the key, its value as the value. 
        localStorage.setItem(storageKey, textarea.val()); 
    });
});