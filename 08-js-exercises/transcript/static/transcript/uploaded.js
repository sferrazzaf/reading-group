$(document).ready(function() {
    var transcript1 = document.getElementById("transcript-1");
    if (transcript1.getAttribute("data-student-id") == "1") {
       var gradeFail = document.getElementsByClassName("grade fail");
       for (var i = 0; i < gradeFail.length; i++) {
           var grade = gradeFail[i];
           grade.style.backgroundColor = "aaffaa";
           }
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
       // var chemcourse = document.getElementsByClassName("course").getElementsByClassName("code");
       // console.log(chemcourse)
       // console.log(chemcourse[0])
       // for (var i = 0; i < courses.length; i++) {
       //    if (courses[i].innerHTML == "CHEM101") {
       }
    }
})
