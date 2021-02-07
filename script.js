var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var c4 = document.getElementById("c4");
var Home = document.getElementById("Home");
var About = document.getElementById("About");
var Projects = document.getElementById("Projects");
var Skills = document.getElementById("Skills");
var Name = document.getElementById("Name");
var moon = document.getElementById("Moon");
var gmoon = document.getElementById("Moonglaze");
var Name_min = document.getElementById("Name_min");
var AboutMe = document.getElementById("AboutMe");
var progress = document.getElementById("progress");
var insta = document.getElementById("insta");
var git = document.getElementById("Github");

var python = document.getElementById("python");
var cpp = document.getElementById("cpp");
var css = document.getElementById("css");
var html = document.getElementById("html");
var js = document.getElementById("js");
var matplotlib = document.getElementById("matplotlib");
var numpy = document.getElementById("numpy");
var keras = document.getElementById("keras");
var pandas = document.getElementById("pandas");
var pygame = document.getElementById("pygame");
var pyqt = document.getElementById("pyqt");
var sqlite = document.getElementById("sqlite");
var tensorflow = document.getElementById("tensorflow");

var prev = 1;
var cur = 1;

function funcinskills() {

    setTimeout(() => {python.style.animation = "skillsin 1s";},0); setTimeout(() => {python.style.opacity = "90%";},0); python.style.zIndex = 6;
    setTimeout(() => {cpp .style.animation = "skillsin 1s";},0); setTimeout(() => {cpp .style.opacity = "90%";},0); cpp.style.zIndex = 6;
    setTimeout(() => {css .style.animation = "skillsin 1s";},0); setTimeout(() => {css .style.opacity = "90%";},0); css.style.zIndex = 6;
    setTimeout(() => {html .style.animation = "skillsin 1s";},0); setTimeout(() => {html .style.opacity = "90%";},0); html.style.zIndex = 6;
    setTimeout(() => {js .style.animation = "skillsin 1s";},0); setTimeout(() => {js .style.opacity = "90%";},0); js.style.zIndex = 6;
    setTimeout(() => {matplotlib .style.animation = "skillsin 1s";},0); setTimeout(() => {matplotlib .style.opacity = "90%";},0); matplotlib.style.zIndex = 6;
    setTimeout(() => {numpy .style.animation = "skillsin 1s";},0); setTimeout(() => {numpy .style.opacity = "90%";},0); numpy.style.zIndex = 6;
    setTimeout(() => {keras .style.animation = "skillsin 1s";},0); setTimeout(() => {keras .style.opacity = "90%";},0); keras.style.zIndex = 6;
    setTimeout(() => {pandas .style.animation = "skillsin 1s";},0); setTimeout(() => {pandas .style.opacity = "90%";},0); pandas.style.zIndex = 6;
    setTimeout(() => {pygame .style.animation = "skillsin 1s";},0); setTimeout(() => {pygame .style.opacity = "90%";},0); pygame.style.zIndex = 6;
    setTimeout(() => {pyqt .style.animation = "skillsin 1s";},0); setTimeout(() => {pyqt .style.opacity = "90%";},0); pyqt.style.zIndex = 6;
    setTimeout(() => {sqlite .style.animation = "skillsin 1s";},0); setTimeout(() => {sqlite .style.opacity = "90%";},0); sqlite.style.zIndex = 6;
    setTimeout(() => {tensorflow .style.animation = "skillsin 1s";},0); setTimeout(() => {tensorflow .style.opacity = "90%";},0); tensorflow.style.zIndex = 6;

}

function funcoutskills() {

    setTimeout(() => {python.style.animation = "skillsout 0.5s";},0); setTimeout(() => {python.style.opacity = "0%";},0); python.style.zIndex = 1;
    setTimeout(() => {cpp .style.animation = "skillsout 0.5s";},0); setTimeout(() => {cpp .style.opacity = "0%";},0); cpp.style.zIndex = 1;
    setTimeout(() => {css .style.animation = "skillsout 0.5s";},0); setTimeout(() => {css .style.opacity = "0%";},0); css.style.zIndex = 1;
    setTimeout(() => {html .style.animation = "skillsout 0.5s";},0); setTimeout(() => {html .style.opacity = "0%";},0); html.style.zIndex = 1;
    setTimeout(() => {js .style.animation = "skillsout 0.5s";},0); setTimeout(() => {js .style.opacity = "0%";},0); js.style.zIndex = 1;
    setTimeout(() => {matplotlib .style.animation = "skillsout 0.5s";},0); setTimeout(() => {matplotlib .style.opacity = "0%";},0); matplotlib.style.zIndex = 1;
    setTimeout(() => {numpy .style.animation = "skillsout 0.5s";},0); setTimeout(() => {numpy .style.opacity = "0%";},0); numpy.style.zIndex = 1;
    setTimeout(() => {keras .style.animation = "skillsout 0.5s";},0); setTimeout(() => {keras .style.opacity = "0%";},0); keras.style.zIndex = 1;
    setTimeout(() => {pandas .style.animation = "skillsout 0.5s";},0); setTimeout(() => {pandas .style.opacity = "0%";},0); pandas.style.zIndex = 1;
    setTimeout(() => {pygame .style.animation = "skillsout 0.5s";},0); setTimeout(() => {pygame .style.opacity = "0%";},0); pygame.style.zIndex = 1;
    setTimeout(() => {pyqt .style.animation = "skillsout 0.5s";},0); setTimeout(() => {pyqt .style.opacity = "0%";},0); pyqt.style.zIndex = 1;
    setTimeout(() => {sqlite .style.animation = "skillsout 0.5s";},0); setTimeout(() => {sqlite .style.opacity = "0%";},0); sqlite.style.zIndex = 1;
    setTimeout(() => {tensorflow .style.animation = "skillsout 0.5s";},0); setTimeout(() => {tensorflow .style.opacity = "0%";},0); tensorflow.style.zIndex = 1;

    }

Home.onmouseover = function(){
    c4.style.transform = "scaleX(1.2)";
}
Home.onmouseout = function(){
    c4.style.transform = "scaleX(1)";
}

About.onmouseover = function(){
    c1.style.transform = "scaleX(1.2)";
}
About.onmouseout = function(){
    c1.style.transform = "scaleX(1)";
}

Projects.onmouseover = function(){
    c3.style.transform = "scaleX(1.2)";
}
Projects.onmouseout = function(){
    c3.style.transform = "scaleX(1)";
}

Skills.onmouseover = function(){
    c2.style.transform = "scaleX(1.2)";
}
Skills.onmouseout = function(){
    c2.style.transform = "scaleX(1)";
}
//-------------------------------------------------------------------------------------------

Home.addEventListener("click", function() {

    prev = cur;
    cur = 1;

    if((cur != prev) && (prev == 2)){

        About.style.opacity = "50%";
        Home.style.opacity = "100%";
        Projects.style.opacity = "50%";
        Skills.style.opacity = "50%";

        setTimeout(() => {Name_min.style.animation = "minout 1s";},0); setTimeout(() => {Name_min.style.opacity = "0%";},0);
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        setTimeout(() => {AboutMe.style.animation = "aboutmeout 1s";},0); setTimeout(() => {AboutMe.style.opacity = "0%";},0);
        setTimeout(() => {insta.style.animation = "instaout 1s";},0); setTimeout(() => {insta.style.opacity = "0%";},0); insta.style.zIndex = 1;
        moon.style.animation= "moon-About-reverse 2s";
        gmoon.style.animation= "glaze-About-reverse 2s";
        moon.style.left= "48%";
        moon.style.top= "16.5%";
        gmoon.style.top= "11.5%";
        gmoon.style.left= "45%";
        Name.style.opacity = "100%";
        gmoon.style.transform= "scale(1.5)";
        Name.style.opacity = "100%";
    }

    else if((cur != prev) && (prev == 3)){

        About.style.opacity = "50%";
        Home.style.opacity = "100%";
        Projects.style.opacity = "50%";
        Skills.style.opacity = "50%";
        funcoutskills();
        moon.style.animation= "moon-Skills-reverse 2s";
        gmoon.style.animation= "glaze-Skills-reverse 2s";
        moon.style.left= "48%";
        moon.style.top= "16.5%";
        gmoon.style.top= "11.5%";
        gmoon.style.left= "45%";
        setTimeout(() => {Name_min.style.animation = "minout 1s";},0); setTimeout(() => {Name_min.style.opacity = "0%";},0);
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        gmoon.style.transform= "scale(1.5)";
        Name.style.opacity = "100%";
        }

    else if((cur != prev) && (prev == 4)){

        About.style.opacity = "50%";
        Home.style.opacity = "100%";
        Projects.style.opacity = "50%";
        Skills.style.opacity = "50%";
        setTimeout(() => {git.style.animation = "instaout 1s";},0); setTimeout(() => {git.style.opacity = "0%";},0); git.style.zIndex = 1;

        moon.style.animation= "moon-Projects-reverse 2s";
        gmoon.style.animation= "glaze-Projects-reverse 2s";
        moon.style.left= "48%";
        moon.style.top= "16.5%";
        gmoon.style.top= "11.5%";
        gmoon.style.left= "45%";
        setTimeout(() => {Name_min.style.animation = "minout 1s";},0); setTimeout(() => {Name_min.style.opacity = "0%";},0);
        setTimeout(() => {progress.style.animation = "progressout 1s";},0); setTimeout(() => {progress.style.opacity = "0%";},0);
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        gmoon.style.transform= "scale(1.5)";
        Name.style.opacity = "100%";
        }
});


About.addEventListener("click", function() {

    prev = cur;
    cur = 2;

    if((cur != prev) && (prev == 1)){

        About.style.opacity = "100%";
        Home.style.opacity = "50%";
        Projects.style.opacity = "50%";
        Skills.style.opacity = "50%";
        setTimeout(() => {AboutMe.style.animation = "aboutmein 1s";},0); setTimeout(() => {AboutMe.style.opacity = "100%";},0);
        setTimeout(() => {insta.style.animation = "instain 1s";},500); setTimeout(() => {insta.style.opacity = "100%";},500); insta.style.zIndex = 7;

        moon.style.animation= "moon-About 2s";
        gmoon.style.animation="glaze-About 2s";
        moon.style.left= "80%";
        moon.style.top= "-10%";
        gmoon.style.left= "77%";
        gmoon.style.top= "-15%";
        gmoon.style.transform= "scale(1.5)";
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        setTimeout(() => {Name_min.style.animation = "minin 1s";},0); setTimeout(() => {Name_min.style.opacity = "100%";},1000);
        Name.style.animation="fadeout 1s ";
        Name.style.opacity = "0%";
    }

    else if((cur != prev) && (prev == 3)){

        About.style.opacity = "100%";
        Home.style.opacity = "50%";
        Projects.style.opacity = "50%";
        Skills.style.opacity = "50%";
        setTimeout(() => {AboutMe.style.animation = "aboutmein 1s";},0); setTimeout(() => {AboutMe.style.opacity = "100%";},0);
        setTimeout(() => {insta.style.animation = "instain 1s";},500); setTimeout(() => {insta.style.opacity = "100%";},500); insta.style.zIndex = 7;
        funcoutskills();
        moon.style.animation= "moon-About-Skills 2s";
        gmoon.style.animation="glaze-About-Skills 2s";
        moon.style.left= "80%";
        moon.style.top= "-10%";
        gmoon.style.left= "77%";
        gmoon.style.top= "-15%";
        gmoon.style.transform= "scale(1.5)";
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        Name_min.style.opacity = "100%";
        Name.style.animation="fadeout 1s ";
        Name.style.opacity = "0%";
        }

    else if((cur != prev) && (prev == 4)){

        About.style.opacity = "100%";
        Home.style.opacity = "50%";
        Projects.style.opacity = "50%";
        Skills.style.opacity = "50%";
        setTimeout(() => {AboutMe.style.animation = "aboutmein 1s";},0); setTimeout(() => {AboutMe.style.opacity = "100%";},0);
        setTimeout(() => {progress.style.animation = "progressout 1s";},0); setTimeout(() => {progress.style.opacity = "0%";},0);
        setTimeout(() => {insta.style.animation = "instain 1s";},500); setTimeout(() => {insta.style.opacity = "100%";},500); insta.style.zIndex = 7;
        setTimeout(() => {git.style.animation = "instaout 1s";},0); setTimeout(() => {git.style.opacity = "0%";},0); git.style.zIndex = 1;

        moon.style.animation= "moon-About-Projects 2s";
        gmoon.style.animation="glaze-About-Projects 2s";
        moon.style.left= "80%";
        moon.style.top= "-10%";
        gmoon.style.left= "77%";
        gmoon.style.top= "-15%";
        gmoon.style.transform= "scale(1.5)";
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        Name_min.style.opacity = "100%";
        Name.style.animation="fadeout 1s ";
        Name.style.opacity = "0%";
        }

});

Skills.addEventListener("click", function() {

    prev = cur;
    cur = 3;
    if((cur != prev) && (prev == 1)){

        About.style.opacity = "50%";
        Home.style.opacity = "50%";
        Projects.style.opacity = "50%";
        Skills.style.opacity = "100%";

        funcinskills();

        moon.style.animation= "moon-Skills 2s";
        gmoon.style.animation= "glaze-Skills 2s";
        moon.style.left= "80%";
        moon.style.top= "20%";
        gmoon.style.top= "16%";
        gmoon.style.left= "77%";
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        setTimeout(() => {Name_min.style.animation = "minin 1s";},0); setTimeout(() => {Name_min.style.opacity = "100%";},0);
        Name.style.opacity = "100%";
        gmoon.style.transform= "scale(1.5)";
        Name.style.animation="fadeout 1s ";
        Name.style.opacity = "0%";
    }

    else if((cur != prev) && (prev == 2)){

        About.style.opacity = "50%";
        Home.style.opacity = "50%";
        Projects.style.opacity = "50%";
        Skills.style.opacity = "100%";
        setTimeout(() => {AboutMe.style.animation = "aboutmeout 1s";},0); setTimeout(() => {AboutMe.style.opacity = "0%";},0);
        setTimeout(() => {insta.style.animation = "instaout 1s";},0); setTimeout(() => {insta.style.opacity = "0%";},0);  insta.style.zIndex = 1;
        funcinskills();
        moon.style.animation= "moon-Skills-About 2s";
        gmoon.style.animation= "glaze-Skills-About 2s";
        moon.style.left= "80%";
        moon.style.top= "20%";
        gmoon.style.top= "16%";
        gmoon.style.left= "77%";
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        Name_min.style.opacity = "100%";
        Name.style.opacity = "100%";
        gmoon.style.transform= "scale(1.5)";
        Name.style.animation="fadeout 1s ";
        Name.style.opacity = "0%";
        }

    else if((cur != prev) && (prev == 4)){

        About.style.opacity = "50%";
        Home.style.opacity = "50%";
        Projects.style.opacity = "50%";
        Skills.style.opacity = "100%";
        setTimeout(() => {progress.style.animation = "progressout 1s";},0); setTimeout(() => {progress.style.opacity = "0%";},0);
        setTimeout(() => {git.style.animation = "instaout 1s";},0); setTimeout(() => {git.style.opacity = "0%";},0); git.style.zIndex = 1;
        funcinskills();
        moon.style.animation= "moon-Skills-Projects 2s";
        gmoon.style.animation= "glaze-Skills-Projects 2s";
        moon.style.left= "80%";
        moon.style.top= "20%";
        gmoon.style.top= "16%";
        gmoon.style.left= "77%";
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        Name_min.style.opacity = "100%";
        Name.style.opacity = "100%";
        gmoon.style.transform= "scale(1.5)";
        Name.style.animation="fadeout 1s ";
        Name.style.opacity = "0%";
        }

    });

Projects.addEventListener("click", function() {

    prev = cur;
    cur = 4;

    if((cur != prev) && (prev == 1)){

        About.style.opacity = "50%";
        Home.style.opacity = "50%";
        Projects.style.opacity = "100%";
        Skills.style.opacity = "50%";

        moon.style.animation= "moon-Projects 2s";
        gmoon.style.animation= "glaze-Projects 2s";
        moon.style.left= "60%";
        moon.style.top= "76%";
        gmoon.style.top= "71%";
        gmoon.style.left= "57%";
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        setTimeout(() => {Name_min.style.animation = "minin 1s";},0); setTimeout(() => {Name_min.style.opacity = "100%";},0);
        setTimeout(() => {progress.style.animation = "progressin 1s";},0); setTimeout(() => {progress.style.opacity = "100%";},0);
        setTimeout(() => {git.style.animation = "instain 1s";},500); setTimeout(() => {git.style.opacity = "100%";},500); git.style.zIndex = 7;


        Name.style.opacity = "100%";
        gmoon.style.transform= "scale(1.5)";
        Name.style.animation="fadeout 1s ";
        Name.style.opacity = "0%";
    }

    else if((cur != prev) && (prev == 2)){

        About.style.opacity = "50%";
        Home.style.opacity = "50%";
        Projects.style.opacity = "100%";
        Skills.style.opacity = "50%";
        setTimeout(() => {AboutMe.style.animation = "aboutmeout 1s";},0); setTimeout(() => {AboutMe.style.opacity = "0%";},0);
        setTimeout(() => {progress.style.animation = "progressin 1s";},0); setTimeout(() => {progress.style.opacity = "100%";},0);
        setTimeout(() => {insta.style.animation = "instaout 1s";},0); setTimeout(() => {insta.style.opacity = "0%";},0);  insta.style.zIndex = 1;
        setTimeout(() => {git.style.animation = "instain 1s";},500); setTimeout(() => {git.style.opacity = "100%";},500); git.style.zIndex = 7;

        moon.style.animation= "moon-Projects-About 2s";
        gmoon.style.animation= "glaze-Projects-About 2s";
        moon.style.left= "60%";
        moon.style.top= "76%";
        gmoon.style.top= "71%";
        gmoon.style.left= "57%";
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        Name_min.style.opacity = "100%";
        Name.style.opacity = "100%";
        gmoon.style.transform= "scale(1.5)";
        Name.style.animation="fadeout 1s ";
        Name.style.opacity = "0%";
        }

    else if((cur != prev) && (prev == 3)){

        About.style.opacity = "50%";
        Home.style.opacity = "50%";
        Projects.style.opacity = "100%";
        Skills.style.opacity = "50%";
        setTimeout(() => {progress.style.animation = "progressin 1s";},0); setTimeout(() => {progress.style.opacity = "100%";},0);
        setTimeout(() => {git.style.animation = "instain 1s";},500); setTimeout(() => {git.style.opacity = "100%";},500); git.style.zIndex = 7;
        funcoutskills();
        moon.style.animation= "moon-Projects-Skills 2s";
        gmoon.style.animation= "glaze-Projects-Skills 2s";
        moon.style.left= "60%";
        moon.style.top= "76%";
        gmoon.style.top= "71%";
        gmoon.style.left= "57%";
        setTimeout(() => {gmoon.style.animation="glaze 3s infinite";},2000);
        Name_min.style.opacity = "100%";
        Name.style.opacity = "100%";
        gmoon.style.transform= "scale(1.5)";
        Name.style.animation="fadeout 1s ";
        Name.style.opacity = "0%";
        }
    });
