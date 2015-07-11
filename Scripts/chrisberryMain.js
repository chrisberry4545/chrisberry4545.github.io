var chrisberryMain = (function() {

    function ProjectElement(title, image, imageAlt, link, linkName, linkIcon, skills, year, timelineImage) {
        var self = this;
        self.title = title;
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
        "Images/GBC/GBCHome.png",
        "Great British Chefs Homepage",
        "http://www.greatbritishchefs.com",
        visitTheSiteStr,
        globeSVG,
        ["C# (inc. MVC)", "Javascript (inc. KnockoutJS)", "CSS", "HTML"],
        "2015 - Present",
        cogsSVG);

    var houseOwage = new ProjectElement(
        "House owage web app",
        "Images/GBC/GBCHome.png",
        "Great British Chefs Homepage",
        null,
        null,
        null,
        ["C# (inc. MVC)", "Javascript", "CSS", "HTML"],
        "2015",
        webSVG);
    houseOwage.githubLink = "https://github.com/chrisberry4545/HouseOwage";

    var librarians = new ProjectElement(
        "The Librarians app",
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
        "Images/Parabola/ParabolaWebsite.png",
        "Parabola responsive website screenshot",
        "http://www.parabolasoft.co.uk/",
        "Company site",
        globeSVG,
        ["C# (inc. MVC, )", "Javascript (inc. AngularJS)", "CSS", "HTML"],
        "2013-2014",
        cogsSVG);

    var animalAdjetives = new ProjectElement(
        "Animal Adjectives",
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
        "MSc Dissertation",
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
            keySkills: ['C#', 'Javascript', 'HTML'],
            email: 'chrisberry4545@googlemail.com',
            location: 'London'
        };
        this.personalDetails.blurb = 'A ' + this.personalDetails.jobTitle + ' living in and working ' + this.personalDetails.location;

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
            var windowScroll = $window.scrollTop() + $window.height() * 0.75;
            imageSections.each(function () {
                var offsetTop = $(this).offset().top;
                var $current = $(this);
                if ($current.hasClass(hiddenClass) && offsetTop <= windowScroll) {
                    $current.removeClass(hiddenClass).addClass('bounceIn');
                }
            });
        }

        function setupScrollAnimations() {
            $(window).on('scroll', function () {
                fireAnimations();
            });
        }

        function init() {
            $window = $(window);
            imageSections = $('.timelineImage, .imageSection');
            setupScrollAnimations();
            fireAnimations();
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