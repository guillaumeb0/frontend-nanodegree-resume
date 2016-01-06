/*
 This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name": "Guillaume B.",
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
    "skills": ["it's", "a", "good", "question", "!"],
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


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
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

for (var i in work.jobs) {
    var formattedWorkStart = HTMLworkStart;
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i]["employer"]);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i]["title"]);
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i]["location"]);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i]["location"]);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i]["description"]);

    $("#workExperience").append(formattedWorkStart);
    $("#workExperience").append(formattedWorkEmployer);
    $("#workExperience").append(formattedWorkTitle);
    $("#workExperience").append(formattedWorkLocation);
    $("#workExperience").append(formattedDates);
    $("#workExperience").append(formattedDescription);
}

for (var i in education.schools) {
    var formattedSchoolStart = HTMLschoolStart;
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].graduationYear);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

    $("#education").append(formattedSchoolStart);
    $("#education").append(formattedSchoolName);
    $("#education").append(formattedSchoolDegree);
    $("#education").append(formattedSchoolDates);
    $("#education").append(formattedSchoolLocation);
}

for (var i in projects.project) {
    var formattedProjectStart = HTMLprojectStart;
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[i].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[i].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[i].description);

    $("#projects").append(formattedProjectStart);
    $("#projects").append(formattedProjectTitle);
    $("#projects").append(formattedProjectDates);
    $("#projects").append(formattedProjectDescription);

    for (var j in projects.project[i].images) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[i].images[j]);
        $("#projects").append(formattedProjectImage);
    }
}