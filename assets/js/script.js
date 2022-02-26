var tasks = {};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    
  // if nothing in localStorage, create a new object to track all task status arrays
  if (!tasks) {
      tasks = {};
    }
    
    // loop over object properties
    // $.each(tasks, function(list, arr) {
    //     // then loop over sub-array
    //     arr.forEach(function(task) {
    //         createTask(task.text, list);
    //     });
    // });

   $("#currentDay").text("Today is " + moment().format("dddd, MMMM Do YYYY, h:mm a"));
};

//SAVE TASKS
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".btn").on("click", function() {

});


//TOGGLE EDIT 
$(".log-slot").on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .addClass("highlight")
    .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});


//FINISH EDIT
$(".log-slot").on("blur","textarea",function(){
    // get the textarea's current value/text
    var text = $(this)
    .val()
    .trim();
    
    // get the task's position in the list of other li elements
    var index = $(this)
    .closest(".log-slot")
    .index();
    
    tasks[index].text = text;
    saveTasks();
    
    // recreate p element
    var taskP = $("<p>")
    .removeClass("highlight")
    .text(text);
    
    // replace textarea with p element
    $(this).replaceWith(taskP);
});


var auditTask = function(taskEl) {
    // get date from task element
    var date = $(taskEl).find("span").text().trim();
    
    // convert to moment object at 5:00pm
    var time = moment(date, "L").set("hour", 17);
    
    // remove any old classes from element
    $(taskEl).removeClass("list-group-item-warning list-group-item-danger");
    
    // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
        $(taskEl).addClass("list-group-item-danger");
    } else if (Math.abs(moment().diff(time, "days")) <= 2) {
        $(taskEl).addClass("list-group-item-warning");
    }
};

setInterval(function () {
    $(".card .list-group-item").each(function(index, el) {
        auditTask(el);
    });
    $("#currentDay").text("Today is " + moment().format("dddd, MMMM Do YYYY, h:mm a"));
}, 1000*60);

// load tasks for the first time
loadTasks();