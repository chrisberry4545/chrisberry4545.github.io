var chrisberryMain = (function() {

    function ProjectElement(title, image, imageAlt, link, linkName, skills, year, timelineImage) {
        var self = this;
        self.title = title;
        self.image = image;
        self.imageAlt = imageAlt;
        self.link = link;
        self.linkName = linkName;
        self.skills = skills;
        self.year = year;
        self.timelineImage = timelineImage;
    }

    var visitTheSiteStr = "Visit the site";
    var viewInPlayStoreStr = "View in the play store";
    
    var timelineStartUrl = "Images/Timeline/";
    var cogsSVG = timelineStartUrl + "cogs.svg";
    var webSVG = timelineStartUrl + "web.svg";
    var androidSVG = timelineStartUrl + "android.svg";
    var javaSVG = timelineStartUrl + "coffee.svg";

    var gbc = new ProjectElement(
        "Great British Chefs",
        "Images/GBC/GBCHome.png",
        "Great British Chefs Homepage",
        "http://www.greatbritishchefs.com",
        visitTheSiteStr,
        ["C# (inc. MVC)", "Javascript (inc. KnockoutJS)", "CSS", "HTML"],
        "2015 - Present",
        cogsSVG);

    var houseOwage = new ProjectElement(
        "House owage web app",
        "Images/GBC/GBCHome.png",
        "Great British Chefs Homepage",
        null,
        null,
        ["C# (inc. MVC)", "Javascript", "CSS", "HTML"],
        "2015",
        webSVG);

    var librarians = new ProjectElement(
        "The Librarians app",
        "Images/Librarians/librariansPhoneScreenshot1.png",
        "Librarians app phone screenshot",
        "https://play.google.com/store/apps/details?id=chris.librariansep",
        viewInPlayStoreStr,
        ["Android"],
        "2014",
        androidSVG);


    var parabolaSoftware = new ProjectElement(
        "Parabola Software",
        "Images/Parabola/ParabolaWebsite.png",
        "Parabola responsive website screenshot",
        "http://www.parabolasoft.co.uk/",
        "Visit the company site",
        ["C# (inc. MVC, )", "Javascript (inc. AngularJS)", "CSS", "HTML"],
        "2013-2014",
        cogsSVG);

    var animalAdjetives = new ProjectElement(
        "Animal Adjectives",
        "Images/AnimalAdjectives/CrustyBirmanScreen.png",
        "Animal Adjectives Screenshot - Crusty Birman",
        "https://play.google.com/store/apps/details?id=chrisb.animaladjectives&hl=en_GB",
        viewInPlayStoreStr,
        ["Android"],
        "2014",
        androidSVG);

    var mtgMirror = new ProjectElement(
        "MTG Mirror",
        "Images/MTGMirror/draftSimScreenshot.png",
        "Draft simulator screenshot",
        "http://mtgmirror.com",
        visitTheSiteStr,
        ["Javascript (inc. AngularJS)", "CSS (inc. Bootstrap)", "HTML"],
        "2013 - Present",
        webSVG);

    var dissertation = new ProjectElement(
        "MSc Dissertation",
        "Images/Dissertation/monopolyCombined.png",
        "Great British Chefs Homepage",
        "https://sites.google.com/site/chrisberry4545/dissertation",
        visitTheSiteStr,
        ["Java (inc. Swing)"],
        "2013",
        javaSVG);


    function MainViewModel() {

        this.personalDetails = {
            name: 'Chris Berry',
            jobTitle: 'Web developer',
            keySkills: ['C#', 'Javascript', 'HTML'],
            email: 'chrisberry4545@googlemail.com',
            location: 'London'
        };

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

    function setupScrollAnimations() {
        var imageSections = $('.timelineImage, .imageSection');
        var $window = $(window);
        var hiddenClass = 'isHidden';
        $(window).on('scroll', function () {
            var windowScroll = $window.scrollTop() + $window.height() * 0.75;
            imageSections.each(function () {
                var offsetTop = $(this).offset().top;
                var $current = $(this);
                if ($current.hasClass(hiddenClass) && offsetTop <= windowScroll) {
                    $current.removeClass(hiddenClass).addClass('bounceIn');
                }
            });
        });
    }

    function init() {
        ko.applyBindings(new MainViewModel());
        setupScrollAnimations();
    }

    init();

})();   