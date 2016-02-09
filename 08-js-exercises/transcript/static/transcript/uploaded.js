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
        //Ex. 5a, calculate semester averages:
        //Define grade dictionary:
        var gradeDict = {
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
        //Recalculate Averages:
        //This could have been done in a more logical way had I realized I needed 2 elements from each table row. It works though.
        var allSemesters = $(".period");
        var gradeRunningTotal = 0;
        var weightRunningTotal = 0;
        var averageRunningTotal = 0
        for (var i = 0; i < allSemesters.length; i++) {
            var currentSemester = $(allSemesters[i]);
            var currentSemesterGrades =
            (currentSemester.find("td[class*='grade ']"));
            for (var g = 0; g < currentSemesterGrades.length -1; g++) {
                var currentCourseGradeLetter = currentSemesterGrades[g].innerHTML;
                var currentCourseGradeNumber = 
                (gradeDict[currentCourseGradeLetter]);
                //console.log("currentCourseGradeNumber = " + currentCourseGradeNumber)
                var currentGradeObject = $(currentSemesterGrades[g]);
                //Below, How can I just set currentCourseWeight to the innerHTML of the thing I'm trying to select, instead of selecting this object, then picking out the 0th element of all the stuff I found (which is only one object!), then finding its innerHTML? I need a jquery object so I can use .siblings, does that mean I will always wind up with something like this, and have to go back into the object with another line of code to extract some attribute?
                var someObject =
                $(currentGradeObject.siblings("td[class*='credits']"));
                var currentCourseWeight =
                parseInt(someObject[0].innerHTML, 10);
                gradeRunningTotal += (currentCourseGradeNumber * currentCourseWeight);
                //console.log("current course weight = " + currentCourseWeight)
                //console.log("gradeRunningTotal = " + gradeRunningTotal)
                weightRunningTotal += currentCourseWeight 
                //console.log("WeightRunningTotal = " + weightRunningTotal)
                if (g == currentSemesterGrades.length -2) {
                    //console.log(gradeRunningTotal)
                    //console.log(weightRunningTotal)
                    var currentSemesterAverage = gradeRunningTotal / weightRunningTotal;
                    //console.log("Average = " + currentSemesterAverage) 
                    currentSemesterGrades[g+1].innerHTML = currentSemesterAverage
                    gradeRunningTotal = 0
                    weightRunningTotal = 0
                    }
                }    
            //Ex. 5b recalculate overall average:
            }
            var allAverages = $(".average").find("td[class*='grade ']") 
                //console.log(allAverages)
                for (var a = 0; a < allAverages.length; a++) {
                    //console.log(allAverages[a].innerHTML)
                    averageRunningTotal += parseFloat(allAverages[a].innerHTML)
                    //console.log("averageRunningtotal = " + averageRunningTotal)
                    if (a == (allAverages.length -1)) {
                        var finalAverage = 
                        (averageRunningTotal / allAverages.length)
                        var displayedAverage = $(".gpa")
                        //console.log(displayedAverage[0].innerHTML)
                        displayedAverage[0].innerHTML = ("Overall GPA: " + finalAverage)
                        //console.log("ART = " + averageRunningTotal)
                        //console.log("AA.L = " + allAverages.length)
                       //console.log("Overall GPA: " + finalAverage)
                    }
                }
            
        }
})
