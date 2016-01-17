/*
 This is empty on purpose! Your code to build the resume will go here.
 */


/** --------------------------------------------------------------------------------------------------------------------
 * Data definition
 * ---------------------------------------------------------------------------------------------------------------------
 */
var bio = {
    'name': 'John DOE',
    'role': 'Front-end Apprentice',
    'contacts': {
        'mobile': '650-555-5555',
        'email': 'john@example.com',
        'github': 'johndoe',
        'twitter': '@johndoe',
        'location': 'Paris'
    },
    'picture_url': '??',
    'welcomeMessage': 'Hi, I\'m G. Glad to see you here !',
    'skills': ['awsomeness', 'delivering things', 'cryogenic sleep', 'saving the universe'],
    'bioPic': 'images/4951697-maxresdefault.jpg'
};

var education = {
    'schools': [{
        'name': 'CNAM',
        'location': 'paris',
        'degree': '2 years post high school graduate',
        'major': ['ComputerSci'],
        'graduationYear': 2013
    }, {
        'name': 'CNAM',
        'location': 'cergy',
        'degree': 'Bsc',
        'major': ['ComputerSci'],
        'graduationYear': 2014
    }, {
        'name': 'ITESCIA',
        'location': 'cergy',
        'degree': 'master',
        'major': ['ComputerSci'],
        'graduationYear': 2015
    }
    ],
    'onlineCourses': [
        {
            'title': 'Javascript Crash Course',
            'school': 'Udacity',
            'dates': 2016,
            'url': 'http://www.udacity.com/course/ud804'
        }
    ]
};

var work = {
    jobs: [
        {
            'employer': 'SG',
            'title': 'engineer in apprenticeship',
            'dates': 'January 3000 - Future',
            'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ' +
            'vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ' +
            'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,' +
            ' qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi ' +
            'tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis ' +
            'nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?' +
            ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,' +
            ' vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            'location': 'Paris'
        },
        {
            'employer': 'Thales',
            'title': 'engineer in apprenticeship',
            'dates': 'January 2999 - December 3000',
            'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ' +
            'vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ' +
            'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,' +
            ' qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi ' +
            'tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis ' +
            'nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?' +
            ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,' +
            ' vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            'location': 'Paris'
        }
    ]
};

var projects = {
    'projects': [
        {
            'title': 'Becoming super-hero for fun !',
            'dates': '2014 - Now',
            'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ' +
            'laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae ' +
            'vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, ' +
            'sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,' +
            ' qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi ' +
            'tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis ' +
            'nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?' +
            ' Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,' +
            ' vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            'images': [
                'images/saitama_12295.jpg',
                'images/image52.png'
            ]
        }
    ]
};

/** --------------------------------------------------------------------------------------------------------------------
 * Definition of display methods
 * ---------------------------------------------------------------------------------------------------------------------
 */

/**
 * @description Display jobs
 */
work.display = function () {
    work.jobs.forEach(function(job) {
        var formattedWorkStart = HTMLworkStart;
        var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', job['employer']);
        var formattedWorkTitle = HTMLworkTitle.replace('%data%', job['title']);
        var formattedWorkLocation = HTMLworkLocation.replace('%data%', job['location']);
        var formattedDates = HTMLworkDates.replace('%data%', job['dates']);
        var formattedDescription = HTMLworkDescription.replace('%data%', job['description']);

        $('#workExperience').append(formattedWorkStart);
        $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
        $('.work-entry:last').append(formattedDates);
        $('.work-entry:last').append(formattedWorkLocation);
        $('.work-entry:last').append(formattedDescription);
    });
};


/**
 * @description Display schools
 */
education.display = function () {
    education.schools.forEach(function(school) {
        var formattedSchoolStart = HTMLschoolStart;
        var formattedSchoolName = HTMLschoolName.replace('%data%', school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', school.graduationYear);
        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);

        $('#education').append(formattedSchoolStart);
        $('.education-entry:last').append(formattedSchoolName);
        $('.education-entry:last').append(formattedSchoolDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedSchoolLocation);
    });
};

/**
 * @description Display the personal information
 */
bio.display = function() {
    // Header information declaration

    // Person
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    // Contacts
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedTwitter);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedLocation);

    // Header adding information to the DOM
    var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);
    $('#header').append(formattedPic);


    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        bio.skills.forEach(function(skill){
            var formattedSkill = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkill);
        });
    }
};

/**
 * @description Display projects
 */
projects.display = function() {
    projects.projects.forEach(function(project) {
        var formattedProjectStart = HTMLprojectStart;
        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
        var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);

        $('#projects').append(formattedProjectStart);
        $('.project-entry:last').append(formattedProjectTitle);
        $('.project-entry:last').append(formattedProjectDates);
        $('.project-entry:last').append(formattedProjectDescription);

        project.images.forEach(function(image) {
            var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
            $('#projects').append(formattedProjectImage);
        });
    });
};

/**---------------------------------------------------------------------------------------------------------------------
 * Fill the page with data
 * ---------------------------------------------------------------------------------------------------------------------
 */
bio.display();
projects.display();
work.display();
education.display();

// Adding internationalisation button in the page
/**
 * @description Return a name in 'Firstname Lastname' format.
 * @param {string} name - The unformatted name.
 * @returns {string} Formatted name.
 */
function inName(name) {
    var firstName = name.split(' ')[0];
    var lastName = name.split(' ')[1];
    return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' +
        lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
}

$('#main').append(internationalizeButton);

// Adding the map
$('#mapDiv').append(googleMap);