let dropdown = document.getElementById("dropdown");
let selectBtn = document.getElementById("select"); /* Obsolete */
let show_video = document.getElementById("shows_video");
let profile_intro = document.getElementById("shows_description");

dropdown.onchange = function (event) {
    event.preventDefault();

    let option = dropdown.value;
    console.log(option);

    if (option == "no choice") {
        //////CHOOSE YOUR ANIME _ TITLE///////
    }

    else if (option == "Haikyuu") {
        show_video.src = "https://www.youtube.com/embed/JOGp2c7-cKc";
        profile_intro.innerHTML = "Haikyuu!! is a sports anime series about two athletes who try to patch up a rivalry to make their high school volleyball team the best in Japan. The series is based on a popular manga by Haruichi Furudate.";
    }
    else if (option == "Naruto") {
        show_video.src = "https://www.youtube.com/embed/zVgKnfN9i34";
        profile_intro.innerHTML = "Naruto is a Japanese manga series that tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. Naruto is a mischievous adolescent who struggles as he searches for recognition. He is also a fun-loving person who often pulls pranks on fellow villagers.";
    }
    else if (option == "FMA") {
        show_video.src = "https://www.youtube.com/embed/cqj4u6eyDq8";
        profile_intro.innerHTML = "";
    }
    else if (option == "Bleach") {
        show_video.src = "https://www.youtube.com/embed/53_QT4NSB48";
        profile_intro.innerHTML = "";
    }

    if (show_video.src === "" || profile_intro.innerHTML === "") {
        alert("One of the containers doesn't have a description.");
    }
}

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show or hide the Back to Top button based on scroll position
window.addEventListener('scroll', function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 500) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});