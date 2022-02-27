var tasks =[" ", " ", " ", " ", " ", " ", " ", " ", " "];
const timeIndexDiff = 9;

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
    
  // if nothing in localStorage, create a new object to track all task status arrays
    if (!tasks) {
    console.log("no tasks");
    tasks =[" ", " ", " ", " ", " ", " ", " ", " ", " "];

    //if there is an array, go ahead and place them in their respective spots
    } else for (var i=0; i<tasks.length; i++) {
        console.log(tasks[i]);
        // $("#index-" + i).append("<p>");
        $("#index-" + i).find("p").text(tasks[i]);
        auditTask($("#index-" + i).find("p"));
    }

   $("#currentDay").text("Today is " + moment().format("dddd, MMMM Do YYYY, h:mm a"));
};

//SAVE TASKS
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//ACTIVATE SAVE BUTTONS
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
    if (!text) {
        text = " ";
    };
    // get the task's index
    var index = $(this).closest("div").attr("id");
    index = index.slice(-1);
    index = JSON.parse(index);
    tasks[index] = text;
    saveTasks();
    
    // recreate p element
    var taskP = $("<p>")
    // .removeClass("highlight")
    .text(text);
    
    // replace textarea with p element
    $(this).replaceWith(taskP);

    // Pass task's p element into auditTask() to check due date
    auditTask($(taskP));
});

var auditTask = function(taskEl) {
    // get date from task element
    var date = $(taskEl).parent().attr("id");
    date = date.slice(-1);
    date = JSON.parse(date);
    date = date + timeIndexDiff;
    var now = moment().hour();
    var elder = $(taskEl).parent();
    
    // remove any old classes from element
    $(taskEl).removeClass("past present future");
    
    // apply new class if task is near/over due date
    if (now > date) {
        $(elder).addClass("past");
    } else if (now < date) {
        $(elder).addClass("future");
    } else if (now === date) {
        $(elder).addClass("present");
    }
};

setInterval(function () {
    debugger;
    $(".middle .highlight").each(function(el) {
        auditTask(el);
    });
    $("#currentDay").text("Today is " + moment().format("dddd, MMMM Do YYYY, h:mm a"));
}, 1000*60);

// load tasks for the first time
loadTasks();

// $(".log-slot").on("click", function() {

//     if ($(this).children().length > 0) {
//         return;
//     } 

//     var text = " "
//     var textInput = $("<textarea>")
//     .addClass("highlight")
//     .val(text);

//     $(this).append(textInput);
//     textInput.trigger("focus");
// });