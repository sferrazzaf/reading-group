$(document).ready(function() {
    //Ex. 2 set code to only run for select student's transcript
    var transcript1 = document.getElementById("transcript-1");
    if (transcript1.getAttribute("data-student-id") == "1") {
       //Ex. 1 set "fail" boxes background to "pass" background color
       var gradeFail = document.getElementsByClassName("grade fail");
       for (var i = 0; i < gradeFail.length; i++) {
           var grade = gradeFail[i];
           grade.style.backgroundColor = "aaffaa";
           }
       //Ex. 3 hide gap in attendance
       var graduation = document.getElementsByClassName("graduation");
       graduation[0].innerHTML = "Graduated in: 2012-06-28";
       var semesters = document.getElementsByTagName("h2");
       for (var i = 0; i < semesters.length; i++) {
           if (semesters[i].innerHTML == "Semester of 2012-Fall") {
               semesters[i].innerHTML = "Semester of 2010-Fall";
           }
           if (semesters[i].innerHTML == "Semester of 2013-Spring") {
               semesters[i].innerHTML = "Semester of 2011-Spring";
           }
           if (semesters[i].innerHTML == "Semester of 2013-Fall") {
               semesters[i].innerHTML = "Semester of 2011-Fall";
           }
           if (semesters[i].innerHTML == "Semester of 2014-Fall") {
               semesters[i].innerHTML = "Semester of 2012-Spring";
           }
       }
       //Ex. 4 - set Chem101 grade to "B-"
       $(".code:contains(CHEM101)").parent().children(":contains(D+)").html("B-");
       //N.B above, calling html() with an argument on a jquery object sets the html
       //Ex. 5a, calculate semester averages
       //Define grade dictionary:
       var gradeDict = {
<<<<<<< HEAD
           'A+': 4.3,
           'A': 4.0,
           'A-': 3.7,
           'B+': 3.3,
           'B': 3.0,
           'B-': 2.7,
           'C+': 2.3,
           'C': 2.0,
           'C-': 1.7,
           'D+': 1.3,
           'D': 1.0,
           'D-': 0.7,
           'F': 0.0
           };
       //Calculate average per semester:
       console.log($(".period").find("td[class*='grade ']")) //selects all grades, need to select grade for each semester only
=======
           'A+': 4.33,
           'A': 4.00,
           'A-': 3.67,
           'B+': 3.33,
           'B': 3.00,
           'B-': 2.67,
           'C+': 2.33,
           'C': 2.00,
           'C-': 1.67,
           'D+': 1.33,
           'D': 1.00,
           'D-': 0.67,
           'F': 0.00
           };
>>>>>>> 885768290c7913db7fb701948631caee0bc15d98
    }
})
