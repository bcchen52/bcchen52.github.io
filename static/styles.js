document.addEventListener('DOMContentLoaded', function() {
    home();
    console.log('hello');

    document.querySelectorAll('.main-nav').forEach((button) => {
        button.onclick = () => {
            unclick_buttons('.main-nav');
            if (button.classList.contains('nav-item')) {
                button.setAttribute('class','nav-item main-nav active');
            }
            change_view(button.id);
        }
    });
});

function home(){
    change_view('home');
}

function change_view(view) {
    document.querySelector('#home-container').style.display = "none";
    document.querySelector('#projects-container').style.display = "none";
    document.querySelector('#classes-container').style.display = "none";
    document.querySelector('#skills-container').style.display = "none";

    console.log(`change view is receiving ${view}`);

    if (view === 'projects') {
        document.querySelector('#projects-container').style.display = "block";
        console.log(`change view is receiving pro`);
    } else if (view === 'classes') {
        console.log(`change view is receiving classes`);
        document.querySelector('#classes-container').style.display = "block";
    } else if (view === 'skills') {
        console.log(`change view is receiving skills`);
        document.querySelector('#skills-container').style.display = "block";
    } else {
        document.querySelector('#home-container').style.display = "block";
    }
}

function unclick_buttons(button_type) {
    if (button_type==='.main-nav') {
        document.querySelectorAll('.main-nav').forEach((item) => {
            item.setAttribute('class','nav-item main-nav');
        })
    }
}

//scrollspy