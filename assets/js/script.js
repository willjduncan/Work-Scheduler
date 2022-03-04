var tasks =[" ", " ", " ", " ", " ", " ", " ", " ", " "];
const timeIndexDiff = 9;

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    
  // if localStorage returns null, place a space in the array to get the textInput to work
    if (!tasks) {
    tasks =[" ", " ", " ", " ", " ", " ", " ", " ", " "];

    //if there is an array, go ahead and place them in their respective spots
    } else for (var i=0; i<tasks.length; i++) {
        $("#index-" + i).find("p").text(tasks[i]);
        auditTask($("#index-" + i).find("p"));
    }
    //Give the time
   $("#currentDay").text("Today is " + moment().format("dddd, MMMM Do YYYY, h:mm a"));
};

//SAVE TASKS
var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

//ACTIVATE SAVE BUTTONS
$(".btn").on("click", function() {
    saveTasks();
});

//TOGGLE EDIT 
$(".log-slot").on("click", function() {
    var text = $(this).find("p")
    .text()
    .trim();
    //add input element
    var textInput = $("<textarea>")
    .addClass("highlight")
    .val(text);
    
    $(this).find("p").replaceWith(textInput);
    
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
    // saveTasks();
    
    // recreate p element
    var taskP = $("<p>")
    .text(text);
    
    // replace textarea with p element
    $(this).replaceWith(taskP);

    // Pass task's p element into auditTask() to check due date
    auditTask($(taskP));
});

//UPDATE COLORS
var auditTask = function(taskEl) {
    // get time from task element
    var date = $(taskEl).parent().attr("id");
    console.log(date);
    date = date.slice(-1);
    date = JSON.parse(date);
    //turn index into the hour it represents
    date = date + timeIndexDiff;
    var now = moment().hour();
    var elder = $(taskEl).parent();
    console.log("commence audit");
    
    // remove any old classes from element
    $(taskEl).removeClass("past present future");
    
    // apply new class depending on time
    if (now > date) {
        $(elder).addClass("past");
    } else if (now < date) {
        $(elder).addClass("future");
    } else if (now === date) {
        $(elder).addClass("present");
    }
};

// SET INTERVAL FOR UPDATING TIME AND COLORS
setInterval(function () {
    for (var i=0; i < tasks.length; i++) {
            var indexn = "index-" + i;
            var el = document.getElementById(indexn);
            var actualEl = $(el).find($("p"));
            auditTask(actualEl);
    }
    $("#currentDay").text("Today is " + moment().format("dddd, MMMM Do YYYY, h:mm a"));
}, 1000*30);

// ACTIVE LOAD TASKS
loadTasks();