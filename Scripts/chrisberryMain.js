var chrisberryMain = (function() {

    function ProjectElement(title, description, additionalDescBullets, image, imageAlt, link, linkName, linkIcon, skills, year, timelineImage) {
        var self = this;
        self.title = title;
        self.description = description;
        self.additionalDescBullets = additionalDescBullets;
        self.image = image;
        self.imageAlt = imageAlt;
        self.link = link;
        self.linkName = linkName;
        self.linkIcon = linkIcon;
        self.skills = skills;
        self.year = year;
        self.timelineImage = timelineImage;

        self.githubLink = null;
        self.githubLinkText = viewOnGithubStr;
        self.githubLinkIcon = githubSVG;
    }

    var visitTheSiteStr = "Visit";
    var viewInPlayStoreStr = "View in the play store";
    var viewOnGithubStr = "View on github";
    
    var timelineStartUrl = "Images/Timeline/";
    var generalStartUrl = "Images/General/";

    var cogsSVG = timelineStartUrl + "cogs.svg";
    var webSVG = timelineStartUrl + "web.svg";
    var androidSVG = timelineStartUrl + "android.svg";
    var uniSVG = timelineStartUrl + "university.svg";

    var githubSVG = generalStartUrl + "github.svg";
    var globeSVG = generalStartUrl + "globe.svg";
    var playSVG = generalStartUrl + "play.svg";

    var gbc = new ProjectElement(
        "Great British Chefs",
        "Working as part of a small team we delivered a whole new site design and custom built CMS solution which will allow Great British Chefs to release stunning content on a fast and responsive site. Some key parts of the sites I handled included:",
        [
            "User registration and login (with Facebook integration)",
            "A complete user favouriting system (binder) which utilised HTML5 local storage alongside server storage so the site always felt fast",
            "User profile and settings",
            "A restaurant search web app",
            "Page recirculation",
            "Custom video players and image galleries",
            "Fast recipe filters",
            "Many page templates"
        ],
        "Images/GBC/GBCHome.png",
        "Great British Chefs Homepage",
        "http://www.greatbritishchefs.com",
        visitTheSiteStr,
        globeSVG,
        ["C# (inc. MVC)", "Javascript (inc. KnockoutJS)", "SQL", "CSS", "HTML"],
        "2015 - Present",
        cogsSVG);

    var houseOwage = new ProjectElement(
        "House owage web app",
        "Application I created to manage money with my housemates. It has solved the problem we had of tracking who owes who and provides useful information like payment histories.",
        [],
        "Images/HouseOwage/houseOwageScreenshot1.png",
        "Great British Chefs Homepage",
        null,
        null,
        null,
        ["C# (inc. MVC)", "SQL", "Javascript", "CSS", "HTML"],
        "2015",
        webSVG);
    houseOwage.githubLink = "https://github.com/chrisberry4545/HouseOwage";

    var librarians = new ProjectElement(
        "The Librarians app",
        "The Librarians wanted to release their most recent EP as a mobile app. The app lets fans play the EP and read about the band.",
        [],
        "Images/Librarians/librariansPhoneScreenshot1.png",
        "Librarians app phone screenshot",
        "https://play.google.com/store/apps/details?id=chris.librariansep",
        viewInPlayStoreStr,
        playSVG,
        ["Android"],
        "2014",
        androidSVG);
    librarians.githubLink = "https://github.com/chrisberry4545/LibrariansEP";


    var parabolaSoftware = new ProjectElement(
        "Parabola Software",
        "While working at Parabola I produced software for a range of clients, including colleges, charities and housing associations. This included:",
        [
            "An Online Enrolment Application for a college which communicates with their main SharePoint site using a web service (Web API 2). The enrolment solution was later extended to allow payments via WorldPay. I took full ownership of the project and handled most of the analysis and development.",
            "SharePoint layouts and controls for client websites.",
            "A cloud based web application which allows caretakers to record fire safety checks on a mobile device. Staff at head office can then view reports created from this data.",
            "A cloud based web application for a charity to record details of contact with potential donors.",
            "Upgrading Parabola’s website to be responsive while remaining fully compatible with the currently used Orchard CMS.",
            "A tool to migrate data from Umbraco CMS to a SharePoint 2013 site.",
            "Upgrades to an MVC College application."
        ],
        "Images/Parabola/ParabolaWebsite.png",
        "Parabola responsive website screenshot",
        "http://www.parabolasoft.co.uk/",
        "Company site",
        globeSVG,
        ["C# (inc. Web API 2, MVC)", "Javascript (inc. AngularJS)", "SQL", "SharePoint", "CSS", "HTML"],
        "2013 - 2014",
        cogsSVG);

    var animalAdjetives = new ProjectElement(
        "Animal Adjectives",
        "Throbbing Goat, Lecherous Yellow Eyed Penguin and Soggy Great White Shark. "
                + "Animal Adjectives entertains through combining random adjectives with random animals which can have hilarious outcomes.",
        [],
        "Images/AnimalAdjectives/CrustyBirmanScreen.png",
        "Animal Adjectives Screenshot - Crusty Birman",
        "https://play.google.com/store/apps/details?id=chrisb.animaladjectives&hl=en_GB",
        viewInPlayStoreStr,
        playSVG,
        ["Android"],
        "2014",
        androidSVG);
    animalAdjetives.githubLink = "https://github.com/chrisberry4545/AnimalAdjectives";

    var mtgMirror = new ProjectElement(
        "MTG Mirror",
        "MTG Mirror is a web app for fans of the popular card game Magic: the Gathering. It simulates certain aspects of the game allowing players to practice.",
        [],
        "Images/MTGMirror/draftSimScreenshot.png",
        "Draft simulator screenshot",
        "http://mtgmirror.com",
        visitTheSiteStr,
        globeSVG,
        ["Javascript (inc. AngularJS)", "CSS (inc. Bootstrap)", "HTML"],
        "2013 - Present",
        webSVG);
    mtgMirror.githubLink = "https://github.com/chrisberry4545/MTGWeb";

    var dissertation = new ProjectElement(
        "MSc. Dissertation",
        "For my MSc. Dissertation I studied the application of Reinforced Learning through self play to the game of Monopoly. I used this technique to produce an artificial intelligence which performed well against humans in a game of Monopoly.",
        [],
        "Images/Dissertation/monopolyCombined.png",
        "Great British Chefs Homepage",
        "https://sites.google.com/site/chrisberry4545/dissertation",
        visitTheSiteStr,
        globeSVG,
        ["Java (inc. Swing)"],
        "2013",
        uniSVG);


    function MainViewModel() {

        this.personalDetails = {
            name: 'Chris Berry',
            jobTitle: 'full stack web developer',
            keySkills: ['C#', 'Javascript', 'SQL', 'CSS', 'HTML'],
            email: 'chrisberry4545@googlemail.com',
            location: 'London, UK',
            githubUrl: "https://github.com/chrisberry4545",
            githubLogo: githubSVG
        };
        this.personalDetails.blurb = 'A ' + this.personalDetails.jobTitle + ' living in and working ' + this.personalDetails.location + ".";

        this.projects = [
            gbc,
            houseOwage,
            librarians,
            parabolaSoftware,
            animalAdjetives,
            mtgMirror,
            dissertation
        ];
    }


    var animations = (function () {

        var $window, imageSections;
        var hiddenClass = 'isHidden';
        function fireAnimations() {
            var windowScroll = $window.scrollTop() + $window.height() * 0.5;
            imageSections.each(function () {
                var offsetTop = $(this).offset().top;
                var $current = $(this);
                if ($current.hasClass(hiddenClass) && offsetTop <= windowScroll || (window.scrollTop() + $window.height() == $(document).height())) {
                    $current.removeClass(hiddenClass).addClass('bounceIn');
                }
            });
        }

        function setupScrollAnimations() {
            setInterval(function () {
                fireAnimations();
            }, 100);
        }

        function init() {
            $window = $(window);
            imageSections = $('.timelineImage, .projectCardSection');
            setupScrollAnimations();
        }

        return {
            init: init
        }
    })();


    function init() {
        ko.applyBindings(new MainViewModel());
        animations.init();
    }

    init();

})();   