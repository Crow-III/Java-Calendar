// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  // Select all time-block elements
  var timeBlocks = $('.time-block');

  // Loop through each time block
  timeBlocks.each(function () {
    var timeBlock = $(this);
    var textarea = timeBlock.find('textarea');
    var saveButton = timeBlock.find('button');
 
    // Retrieve the note from local storage and populate the textarea
    var note = localStorage.getItem(timeBlock.attr('id')); // Use the time block ID as the key
    if (note) {
      textarea.val(note); // Use 'val' to set textarea content
    }

    // Set up the click event handler for the save button within this time block
    saveButton.on('click', function () {
      // Get the value of the textarea
      var updatedNote = textarea.val();

      // Update the local storage with the new note for this time block
      localStorage.setItem(timeBlock.attr('id'), updatedNote);
    });
  });
});

function hourTracker() {
  // Get current number of hours.
  var currentHour = dayjs().hour();

  // Loop over time blocks
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Check the time and add the classes for background indicators
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
hourTracker();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?



  // TODO: Add code to display the current date in the header of the page.
 


 var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY, h:mm:ss a'));



