var tasks =[" ", " ", " ", " ", " ", " ", " ", " ", " "];

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
    }

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
});


var auditTask = function(taskEl) {
    // get date from task element
    var date = $(taskEl).find(id).value()
    console.log(date);
    
    // convert to moment object at 5:00pm
    var time = moment(date, "L").set("hour", 17);
    
    // remove any old classes from element
    $(taskEl).removeClass("bg-past bg-present bg-future");
    
    // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
        $(taskEl).addClass("bg-past");
    } else if (moment().hours === time) {
        $(taskEl).addClass(".bg-present");
    } else if(Math.abs(moment().diff(time, "hours")) <= 1) {
        $(taskEl).addClass("bg-future");
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