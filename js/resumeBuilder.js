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

var work = {};
work.id = 1;
work.title = "Engineer apprentice";
work.employer = "Societe General Insurance";
work.years = 1.5;
work.location = "La Défense";

var education = {};
education["id"] = 1;
education["school"] = "ITESCIA";
education["years"] = 1.5;
education["degree"] = "Master";
education["location"] = "Cergy";

var education2 = {
    "schools": [{
            "id": 1,
            "name": "CNAM",
            "location": "home",
            "degree": "2 years post high school graduate",
            "major": ["ComputerSci"],
            "graduationYear": 2013
        }, {
            "id": 2,
            "name": "CNAM",
            "location": "cergy",
            "degree": "Bsc",
            "major": ["ComputerSci"],
            "graduationYear": 2014
        }, {
            "id": 3,
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

var formattedWorkStart = HTMLworkStart.replace("%data%", work["id"]);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work["employer"]);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work["title"]);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work["location"]);


var formattedSchoolStart = HTMLschoolStart.replace("%data%", education.id);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.school);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.degree);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.location);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#workExperience").append(formattedWorkStart);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkLocation);

$("#education").append(formattedSchoolStart);
$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolLocation);
$("#education").append(formattedSchoolDegree);