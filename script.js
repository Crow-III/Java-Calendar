$(document).ready(function () {
  // Select all time-block elements
  var timeBlocks = $('.time-block');

  // Loop through each time block
  timeBlocks.each(function () {
    var timeBlock = $(this);
    var textarea = timeBlock.find('textarea');
    var saveButton = timeBlock.find('button');

    // Retrieve the note from local storage and populate the textarea
    var note = localStorage.getItem(timeBlock.attr('id'));
    if (note) {
      textarea.val(note);
    }

    // Set up the click event handler for the save button within this time block
    saveButton.on('click', function () {
      // Get the value of the textarea
      var updatedNote = textarea.val();

      // Update the local storage with the new note for this time block
      localStorage.setItem(timeBlock.attr('id'), updatedNote);
    });
  });

  function hourTracker() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      var ampm = $(this).attr("id").split("-")[2];

      if (ampm === "pm") {
        blockHour += 12;
      }

      if (blockHour < currentHour) {
        $(this).addClass("past").removeClass("present future");
      } else if (blockHour === currentHour) {
        $(this).addClass("present").removeClass("past future");
      } else if (blockHour > currentHour) {
        $(this).addClass("future").removeClass("past present");
      }
    });
  }

  // Call hourTracker initially and then update every minute
  hourTracker();
  setInterval(hourTracker, 60000);

  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY, h:mm:ss a'));
});
