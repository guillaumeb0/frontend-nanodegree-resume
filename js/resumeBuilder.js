/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "John Doe",
    "role": "Front-end Apprentice",
    "contacts": {
        "mobile": "650-555-5555",
        "email": "john@example.com",
        "github": "johndoe",
        "twitter": "@johndoe",
        "location": "Paris"
    },
    "picture_url": "??",
    "welcomeMessage": "Hi, I'm G. Glad to see you here !",
    "skills": ["awsomeness", "delivering things", "cryogenic sleep", "saving the universe"],
    "bioPic": "??"
};

var education = {
    "schools": [{
        "name": "CNAM",
        "location": "home",
        "degree": "2 years post high school graduate",
        "major": ["ComputerSci"],
        "graduationYear": 2013
    }, {
        "name": "CNAM",
        "location": "cergy",
        "degree": "Bsc",
        "major": ["ComputerSci"],
        "graduationYear": 2014
    }, {
        "name": "ITESCIA",
        "location": "cergy",
        "degree": "master",
        "major": ["ComputerSci"],
        "graduationYear": 2015
    }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Crash Course",
            "school": "Udacity",
            "dates": 2016,
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
};


var work = {
    jobs: [
        {
            "employer": "SG",
            "title": "engineer in apprenticeship",
            "dates": "January 3000 - Future",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque " +
            "laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae " +
            "vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, " +
            "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est," +
            " qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi " +
            "tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis " +
            "nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?" +
            " Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur," +
            " vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            "location": "Paris"
        },
        {
            "employer": "Thales",
            "title": "engineer in apprenticeship",
            "dates": "January 2999 - December 3000",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque " +
            "laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae " +
            "vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, " +
            "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est," +
            " qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi " +
            "tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis " +
            "nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?" +
            " Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur," +
            " vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            "location": "Paris"
        }
    ]
};

var projects = {
    "project": [
        {
            "title": "Sample project 1",
            "dates": "2014",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque " +
            "laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae " +
            "vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, " +
            "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est," +
            " qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi " +
            "tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis " +
            "nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?" +
            " Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur," +
            " vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            "images": [
                "http://i2.wp.com/www.lyricsrise.com/wp-content/uploads/2015/06/galantis-louder-harder-better-ly.jpg?resize=1920%2C1080",
                "http://static.stereogum.com/uploads/2015/02/Galantis-Gold-Dust.jpg"
            ]
        }
    ]
};

// Definition of display methods
work.display = function () {
    for (var i in work.jobs) {
        var formattedWorkStart = HTMLworkStart;
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i]["employer"]);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i]["title"]);
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i]["location"]);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i]["dates"]);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i]["description"]);

        $("#workExperience").append(formattedWorkStart);
        $(".work-entry:last").last().append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").last().append(formattedDates);
        $(".work-entry:last").last().append(formattedWorkLocation);
        $(".work-entry:last").last().append(formattedDescription);
    }
};

education.display = function () {
    for (var i in education.schools) {
        var formattedSchoolStart = HTMLschoolStart;
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].graduationYear);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

        $("#education").append(formattedSchoolStart);
        $(".education-entry:last").last().append(formattedSchoolName);
        $(".education-entry:last").last().append(formattedSchoolDegree);
        $(".education-entry:last").last().append(formattedSchoolDates);
        $(".education-entry:last").last().append(formattedSchoolLocation);
    }
};

bio.display = function() {
    // Header information declaration

    // Person
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    // Contacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedLocation);

    // Header adding information to the DOM
    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (var i in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

projects.display = function() {
    for (var i in projects.project) {
        var formattedProjectStart = HTMLprojectStart;
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);

        $("#projects").append(formattedProjectStart);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        for (var j in projects.project[i].images) {
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[i].images[j]);
            $("#projects").append(formattedProjectImage);
        }
    }
};

bio.display();
projects.display();
work.display();
education.display();

// Adding internationalisation button in the page
function inName(name) {
    var formattedFirstName = "";
    var formattedLastName = "";
    var formattedName = "";
    var firstName = name.split(" ")[0];
    var lastName = name.split(" ")[1];

    formattedFirstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    formattedLastName = lastName.toUpperCase();
    formattedName = formattedFirstName + " " + formattedLastName;

    return formattedName;
}
console.log("test :" + inName(bio.name));
$("#main").append(internationalizeButton);

// Adding the map
$("#mapDiv").append(googleMap);