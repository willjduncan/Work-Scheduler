# Work Day Scheduler
Challenge Week 5

## Description

AS AN employee with a busy schedule

I WANT to add important events to a daily planner

SO THAT I can manage my time effectively

This assignment is aimed at combining my JavaScript skills with all the new Third-Party APIs I've been introduced to over the past week, including JQuery, Moment.js, and Bootstrap. With their aid, I should create an interactive daily planner that reacts to time, clicking, and saving. By completing the assignment I will gain greater familiarity with using different libraries, searching documentation, and writing code with different grammar. 

The planner, once completed, can help keep the user organized and on top of their daily activities and responsibilities. The planner will be arranged so that it should be able to include additional hours at little extra coding cost. 

My job is to build the website so that:

GIVEN I am using a daily planner to create a schedule

WHEN I open the planner

THEN the current day is displayed at the top of the calendar

WHEN I scroll down

THEN I am presented with time blocks for standard business hours

WHEN I view the time blocks for that day

THEN each time block is color-coded to indicate whether it is in the past, present, or future

WHEN I click into a time block

THEN I can enter an event

WHEN I click the save button for that time block

THEN the text for that event is saved in local storage

WHEN I refresh the page

THEN the saved events persist

I began with looking over the code already in place, familiarizing myself with the classes and double-checking API sourcing. Once done, I started by adding all the HTML divs I planned to use, and began styling them, using the first two rows to test my code before applying it further down the page. 

Once done with the styling and blocking, I turned my attention to javaScript. 
<!-- First, I wrote the basic HTML, including the introduction and a few empty divs that I'd fill later on. I added a little bit of CSS next to give it a basic, but pleasant appearance. Then I created my questions, forming it in an array. 

Next, I added a timer that would start once the Begin button was clicked. From there, I focused on finding a way to run through my array. I initially tried a for loop, but I couldn't manage to find a way to get the for loop to wait for a response click before moving on to the next question. Instead, I dissembled the for loop and made the quiz move on to the next array object by adding one to the index variable and calling the createChoice function again. This worked. 

Once the test was able to run through each question through clicking answer choices, I set up conditions to tell the user whether their answers were right or wrong, and created a variable to add up points. 

From there, I created the endgame function, which would tell the user their score and have them submit their initials. I found a way to save the first submission to localStorage, but struggled to find a way to arrange the stored names and scores in order of highscore. After much debugging and confusion, I realized it was a mislocated bracket causing the issues. 

After I solved that, I added the final touches to the high score page, making sure I could retrieve those stored scores. From there, I cleaned up the code, added aspects like subtracting time for wrong questions, and added more CSS to give the new elements an acceptable aesthetic. 


Now, when the user goes on, they see a home screen from which they can either begin the quiz or visit the high score page. The quiz runs through every question, logging the correct and wrong answers and keeping track of both the score and the time. When the quiz is finished, either by time-default or by completion, the user is told their score and is prompted to submit it, where it will be stored along with previous scores. If the player wishes to play again, there is a button redirecting them to the opening title.   -->


<!-- ## Installation

My repository on GitHub is named code-quiz. The link to this repository is below.

[git@github.com:willjduncan/code-quiz.git](git@github.com:willjduncan/code-quiz.git)


The link to the live website is below: 

[https://willjduncan.github.io/code-quiz/](https://willjduncan.github.io/code-quiz/)


## Usage

Screenshots are shown of the HTML, CSS, and JavaScript pages, all built from scratch. 

![screenshot of HTML](/assets/images/Screenshot-HTML.png)
![screenshot of CSS](/assets/images/Screenshot-CSS.png)
![screenshot of JavaScript](/assets/images/Screenshot-JavaScript.png)


Screenshots are also provided of the quiz in its main forms: the beginning, mid-quiz, the score submission, and highscore page. Note how the high scores are in order, how the question choices are highlighted, and the presence or lacketherof of the timer.

![screenshot of Start](/assets/images/Screenshot-Intro.png)
![screenshot of Questions](/assets/images/Screenshot-Question.png)
![screenshot of Endgame](/assets/images/Screenshot-Endgame.png)
![screenshot of Highscore Page](/assets/images/Screenshot-Highscore.png) -->

## Credits

No classmates or instructors were used in the making of this website. The coding boot camp Professional README Guide found at https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide was used as a template for this README. The license was picked from [https://choosealicense.com/](https://choosealicense.com/), as suggested by the README Guide aforementioned. The WHEN/THEN section of this README was taken directly from the homework assignment Acceptance Criteria. The Taskmaster Pro project of Module 5 and the in-class assignments of week 5 were both used as examples. Stack Overflow, MDN Web Docs, W3, and Google were critical to my success. 

## License

MIT License

Copyright (c) [2022] [Will Duncan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.






<!-- 1. Have the save buttons work -->
<!-- 2. change colors for time -->
3. do ReadMe
<!-- 4. Double check guidelines -->
<!-- 5. find a way to auditTask more often -->
6. refactor code to prevent index