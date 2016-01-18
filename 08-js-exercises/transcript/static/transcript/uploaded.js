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
       }
       var codes = $(".code") //Find code for Chem 101
       for (var i = 0; i < codes.length; i++) {
           var currentCode = codes[i];
           if (currentCode.innerHTML == "CHEM101") { //Find parent of Chem 101
               var currentCode = $(currentCode)
               var currentCodeParentChildren = $(currentCode.parent().children())
               for (var i = 0; i < currentCodeParentChildren; i++) { //Find grade.pass of Chem 101 course
                   var currentChild = currentCodeParentChildren[i];
                   if (currentChild.innerHTML == "D+") {
                       currentChild.innerHTML = "B-";
                       console.log(currentChild.innerHTML)
                   }
               }
           }
       }
    }
})
