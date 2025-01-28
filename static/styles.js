document.addEventListener('DOMContentLoaded', function() {

    const all_experience = [
        {"name": "Lambda Phi Epsilon Fraternity", "role":"Academic Chair", "time":"March 2024-Present", "current": true, "content":"<ul><li>Ensured that members and potential new members maintianed high GPAs by mandating study hours based on performance.</li><li>Provided resources and connected members to campus resources when necessary.</li></ul>"},
    ];

    const all_classes = [
        {"code": "CS50AI", "title": "Introduction to Artificial Intelligence with Python", "info": "Harvard University Online Course", "skills": "", "languages": "Python", "frameworks": "", "projects": "", "content": "Harvard University's introductory online course on artificial intelligence. <div>More info <a href='https://cs50.harvard.edu/ai/2024/' target='_blank' rel='noopener noreferrer'>here.</a></div>", "current": true,},
        {"code": "CS50W", "title": "Web Programming with Python and JavaScript", "info": "Harvard University Online Course", "skills": "Front-end Development, Back-end Development", "languages": "JavaScript, HTML, CSS, Python, SQL", "frameworks": "Django, SQLite, Bootstrap, React", "projects": ["mail-app", "network-app", "multiplix"], "content": "Harvard University's online course on full stack web development. Certification badge <a href='https://courses.edx.org/certificates/f4626724578a41c0b181b12e4f5ebd9a?_gl=1*l28h3m*_gcl_aw*R0NMLjE3Mjk1NTkwNzEuQ2owS0NRanc5OWU0QmhEaUFSSXNBSVNFN1A4YVZUS1BaRFo5TkJxMFRnVWZwaUF3ZmtTaXIxc1lBb29nc0xpNW94a0FqTU5wWG5uUG03d2FBaHp4RUFMd193Y0I.*_gcl_au*ODk2OTkzNTAxLjE3Mjk1NTkwNzA.*_ga*MTkyNDM3MzI2LjE3MjEyNTEyNzM.*_ga_D3KS4KMDT0*MTcyOTU1OTA3MC4xMi4xLjE3Mjk1NTkwNzkuNTEuMC4w' target='_blank' rel='noopener noreferrer'>here.</a> <div>More info <a href='https://cs50.harvard.edu/web/2020/' target='_blank' rel='noopener noreferrer'>here.</a></div>", "current": false,},
        {"code": "N/A", "title": "Advanced Machine Learning", "info": "Binghamton University Online Course/Microcredential", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "N/A", "current": true,},
        {"code": "N/A", "title": "Introduction to Machine Learning", "info": "Binghamton University Online Course/Microcredential", "skills": "Probability Theory, Machine Learning Algorithms and Concepts, Regression", "languages": "", "frameworks": "", "projects": "", "content": "Certification badge <a href='https://www.credly.com/badges/f381ca72-361c-42a9-8aaa-a2dde0af4fe7' target='_blank' rel='noopener noreferrer'>here.</a>", "current": false,},
        {"code": "MATH 448", "title": "Introduction to Statistics", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "N/A", "current": true,},
        {"code": "MATH 372", "title": "Dynamical Systems", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "N/A", "current": true,},
        {"code": "MATH 447", "title": "Probability Theory", "info": "Binghamton Univerity Course", "skills": "Probability Theory, Combinatorial Analysis/Probability, Random Variables, Distributions", "languages": "", "frameworks": "", "projects": "", "content": "Information on this specific course found <a href='https://people.math.binghamton.edu/mfochler/math-447-2024-08/html/math-447-home.html' target='_blank' rel='noopener noreferrer'>here.</a>", "current": false,},
        {"code": "MATH 330", "title": "Number Systems", "info": "Binghamton Univerity Course", "skills": "Set Theory, Number Theory, Proofwriting, Real Analysis, General/Point-set Topology", "languages": "", "frameworks": "", "projects": "", "content": "More info <a href='https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2024-02/html/math-330-home.html' target='_blank' rel='noopener noreferrer'>here.</a>", "current": false,},
        {"code": "MATH 329", "title": "Intro to Scientific Computing", "info": "Binghamton Univerity Course", "skills": "Regression Analysis ", "languages": "R", "frameworks": "", "projects": ["dataset-regression-analysis"], "content": "", "current": false,},
        {"code": "MATH 323", "title": "Calculus III", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "", "current": false,},
        {"code": "MATH 304", "title": "Linear Algebra", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "", "current": false,},
        {"code": "CS 375", "title": "Advanced Algorithms", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "N/A", "current": true,},
        {"code": "CS 373", "title": "Automata Theory & Formal Lg.", "info": "Binghamton Univerity Course", "skills": "Automata Theory, Formal languages, Turing Machines", "languages": "Java", "frameworks": "JFLAP", "projects": "", "content": "Projects and work I've done for this class <a href='https://github.com/bcchen52/cs373' target='_blank' rel='noopener noreferrer'>here.</a>", "current": false,},
        {"code": "CS 350", "title": "Operating Systems", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "N/A", "current": true,},
        {"code": "CS 320", "title": "Advanced Computer Architecture", "info": "Binghamton Univerity Course", "skills": "ISA, Processors, Caches and Memory Systems", "languages": "C++", "frameworks": "", "projects": "", "content": "Projects and work I've done for this class <a href='https://github.com/bcchen52/cs320' target='_blank' rel='noopener noreferrer'>here.</a>", "current": false,},
        {"code": "CS 310", "title": "Data Struct and Algorithms", "info": "Binghamton Univerity Course", "skills": "Data Structures, Algorithms, Time-Space Analysis", "languages": "C++", "frameworks": "", "projects": "", "content": "Projects and work I've done for this class <a href='https://github.com/bcchen52/cs310' target='_blank' rel='noopener noreferrer'>here.</a>", "current": false,},
        {"code": "CS 220", "title": "Arch from a Prog Perspective", "info": "Binghamton Univerity Course", "skills": "Low-Level Programming, Processor and Memory Organization, Code Dissembly", "languages": "C, x86 assembly", "frameworks": "", "projects": ["floating-point-converter"], "content": "", "current": false,},
        {"code": "CS 210", "title": "Prog with Obj & Data", "info": "Binghamton Univerity Course", "skills": "", "languages": "Java", "frameworks": "", "projects": "", "content": "", "current": false,},
        {"code": "CS 120", "title": "Prog & Hardware Fundamentals", "info": "Binghamton Univerity Course", "skills": "", "languages": "C", "frameworks": "", "projects": "", "content": "", "current": false,},
    ];

    const all_projects = [
        //{"code": "multiplix", "name": "MultipliX", "role":"Individual Project", "blurb":"blurb", "time":"August 2024", "skills": "skill", "languages": "language", "frameworks": "frameworks", "content": "content", "link":"link"},
        {"code": "multiplix", "name": "MultipliX", "role":"Individual Project", "blurb":"Responsive web application that allows users to customize and take mental math tests and compete with others while giving feedback on user's performance based on the type of question.", "time":"August 2024", "skills": "Full Stack Web Development, Responsive Design, Database and API Manipulation, Website Hosting", "languages": "HTML, CSS, Python, SQL, JavaScript", "frameworks": "Django, Bootstrap, SQLite, Gunicorn, Nginx", "content": "Link here <a href='https://multiplix.net'>multiplix.net</a><br><br>MultipliX is a website that allows users to customize mental math tests and compete with others. This takes inspiration from the website MonkeyType, which allows users to customize their experience and their touch-typing tests Websites that allow you to test mental math ability tend to be simpler and not as advanced as touch-typing sites typically are.<br><br>MultipliX uses Django with a PostgreSQL database on the backend. The frontend uses Bootstrap and vanilla JavaScript for user responsiveness and single-page views. <br><br>MultipliX is hosted on an AWS EC2 instance using Gunicorn and Nginx, following this tutorial. Https functionality is implented with Certbot.<br><br>Features include...<br><br>Responsive input handling on test settings page and login/registration using JavaScript.<br><br>Implementing SQL databases to allow user's tests to compete on leaderboards.<br><br>Responsive spacing for mobile users.", "link":"https://github.com/bcchen52/multiplix"},
        {"code": "personal-website", "name": "brianchen.org", "role":"Individual Project", "blurb":"Responsive single-page application created with JavaScript that serves as a personal website.<br><br>Responsive features created with vanilla JavaScript include this carousel and the Tech Stack carousel, and the scroll-spy feature on the Projects page.", "time":"August 2024-Present", "skills": "Front-end Development, Responsive Design", "languages": "HTML, CSS, JavaScript", "frameworks": "Bootstrap", "content": "This is the <a href='https://www.brianchen.org'>site</a> you are currently viewing.<br><br> This site is a responsive static single-page application utilizing HTML, CSS(Bootstrap), and vanilla JavaScript that is hosted with Github pages.<br><br> This site is used as a personal website to display information about myself.<br><br> More information on the About page.", "link":"https://github.com/bcchen52/bcchen52.github.io"},
        {"code": "technical-research-paper", "name": "Technical Research Paper", "role":"Research Paper", "blurb":`Pre-Processing Methods to Reduce Racial Discrimination of Machine Learning Models in Credit Scoring.<br><br> Technical research paper about targeting racial discrimination in AI credit-scoring algorithms by applying pre-processing methods to training data.`, "time":"November 2024-December 2024", "skills": "", "languages": "", "frameworks": "", "content": "Pre-Processing Methods to Reduce Racial Discrimination of Machine Learning Models in Credit Scoring.<br><br>Technical research paper on the discrimination of racial minorities in the US from AI credit-scoring algorithms and why pre-processing methods on training data is a viable solution.<br><br>Abstract: Machine learning has replaced traditional statistical methods in credit scoring. Although this has improved the accuracy of credit scoring, benefiting both borrowers and lenders, discrimination in credit scoring against marginalized groups in the US still exists. This discrimination results from patterns in observed features among racial minorities, causing racial discrimination without actually accounting for race. Compared to post-processing methods, typically used to increase the accuracy of machine learning algorithms by using multiple individual models, feature reweighing, a pre-processing method, is more effective at reducing the discrimination in credit scoring models, thus promoting equal financial access. Pre-processing methods have successfully been used to reduce discrimination towards racial minorities in the US with patterns of features that correlate to negative credit decisions. The causes of these patterns in racial minorities in the US can be attributed to discriminatory policies that have marginalized these groups in the past. Policies in the past have limited financial access to certain communities, which have influenced specific features that are accounted for in credit scoring, such as debt-to-income and loan-to-value ratios. Thus, discrimination in credit scoring is a result of past discrimination and needs to be specifically targeted with pre-processing methods on credit data. ", "link":"https://docs.google.com/document/d/e/2PACX-1vTmYD2f6v4wKoobmLzK5AwxIYcy531G-ZbXAkyyGsT9mj0tfvLhAiNJJthHr45oc8Z7bqZZE7sxrVjH/pub"},
        {"code": "tournament-branch-predictor", "name": "Tournament Branch Predictor", "role":"Individual Project", "blurb":"C++ program that models bimodal and gshare branch predictors and a tournament branch predictor between the two.<br><br>Examines the effect on prediction accuracy of using different sized indexes, global history registers, and prediction counts.", "time":"October 2024", "skills": "Bit manipulation", "languages": "C++", "frameworks": "", "content":"This project uses C++ to simulate bimodal, gshare, and tournament branch predictors.<br><br>Bimodal branch predictors are simulated with 1-3 bit counter configurations and 2, 3, 5, 6, 8, 10, and 12 bit indexes.<br><br>Gshare branch predictors are simulated with a 2-bit saturating counter configuration and 12-bit index with 2-12 bit global history registers(GHR) initialized to 0…01.<br><br>The tournament branch predictor uses a 12-bit selector table with 2-bit saturating counters, initialized to 00, which represents strongly picking the bimodal prediction. A 3-bit counter bimodal table initialized and a 2-bit saturating counter gshare table with a global history register initialized to 0. All predictors in this tournament branch utilize a 12-bit index.<br><br>This project is from Binghamton University’s CS 320.", "link":"https://github.com/bcchen52/Tournament-Branch-Predictor"},
        {"code": "network-app", "name": "Network App", "role":"Individual Project", "blurb":"Responsive single-page social media application. Users can post, like posts, edit posts, and follow other users on their feed.<br><br>JavaScript on the frontend allows those small user actions to be displayed without needing to reload the page.", "time":"July 2024", "skills": "Full Stack Web Development, Responsive Design, Database and API Manipulation", "languages": "HTML, CSS, Python, SQL, JavaScript", "frameworks": "Django, Bootstrap, SQLite", "content": "Network is a single-page Twitter-like social network that allows users to post, follow other users, and interact with posts.<br><br>The front-end utilizes JavaScript to interact with posts and CSS to animate elements.<br><br>The back-end utilizes Django to create and serve API calls that are used to store and represent post and user data, as well as providing information about the current user and session.<br><br>Network is project 4 from Harvard University's CS50W, and basic login/register/logout functions were included in the starter code.<br><br>This project is an extension of project 4, Network from Harvard University's CS50W", "link":"https://github.com/bcchen52/network"},
        {"code": "mail-app", "name": "Mail App", "role":"Individual Project", "blurb":"Single-page application utilizing API calls in Django to create an email network. Users can read, archive, and reply to emails.<br><br>Users can choose to reply or reply all if applicable, and can CC and forward emails.", "time":"July 2024", "skills": "Front-end Web Development, Responsive Design", "languages": "HTML, CSS, Python, SQL, JavaScript", "frameworks": "Django, Bootstrap, SQLite", "content": "Mail is a single-page email application that allows users to send emails to each other through API calls.<br><br>Users send and interact with emails through the front-end and JavaScript, which makes API calls with Django. Users can send, archive, and reply to emails.<br><br><video width='80%' src='media/Mail.mp4' controls >Video not supported.</video><br><br>This project is an extension of project 3, Mail from Harvard University's CS50W", "link":"https://github.com/bcchen52/mail"},
        {"code": "floating-point-converter", "name": "Floating Point Converter", "role":"Individual Project", "blurb":"C program that utilizes bit twiddling and manipulation to create unique floating point types to store values. The IEEE standard has a double and single floating point, with specific precision and range.<br><br>This project showcases how information can be lost through typecasting with these different datatypes.", "time":"March 2024-April 2024", "skills": "Bit Twiddling", "languages": "C", "frameworks": "", "content": "This program uses C to take a double floating point value and use bit twiddling to store it into a floatx value with user-specified exponent and fraction bit sizes.<br><br>The floatx value will be stored in the right most bits of a double value, meaning that the total bits(exponent bits, fraction bits, and sign bit) have a maximum of 64. There must be at least 1 fraction bit and 1 exponent bit, and the minimum number of total bits is 3.<br><br>According to the IEEE standard, a double point floating values has 1 sign bit, 11 exponent bits, and 52 fraction bits. Some values may need more magnitude, i.e. more exponent bits, and less precision, i.e. less fraction bits, or vice versa. A value simply may not need the extent of precision and size given by a standard single or double floating point. <br><br>This project is an extension of a project from Binghamton University's CS220", "link":"https://github.com/bcchen52/floating-point-converter"},
        {"code": "dataset-regression-analysis", "name": "Dataset Regression Analysis", "role":"Individual Project", "blurb":`Lab-style report of a linear regression analysis of the "Hitters" dataset from R's ISLR package. R was used to create and test changes to a linear regression model, and the model's equation was altered to address the regression model's assumptions.`, "time":"June 2024-July 2024", "skills": "Regression Analysis, Model Fitting", "languages": "R", "frameworks": "R Studio", "content": "This is a report-style linear regression analysis on the Hitters dataset from R's ISLR package.<br><br> This report includes a full exploratory analysis of the data and uses regression analysis to transform and create a regression model to accurately fit the data.<br><br><object data='your_url_to_pdf' type='application/pdf'><iframe src='media/finalprojectreport_brian_chen.pdf' width='80%' height='500px'></iframe></object><br><br>This project is the final project from Binghamton University's MATH329 ", "link":"https://github.com/bcchen52/hitters-regression-analysis"},
    ];

    const all_skills = [
        {'name': 'C', 'projects': ['floating-point-converter'],'order': 0, 'link': "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"},
        {'name': 'HTML', 'projects': ['multiplix', 'personal-website', 'network-app', 'mail-app'],'order': 1, 'link': "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"},
        {'name': 'JavaScript', 'projects': ['multiplix', 'network-app', 'mail-app'], 'order': 2, 'link': "https://upload.wikimedia.org/wikipedia/commons/7/7a/JavaScript_unofficial_logo.svg"},
        {'name': 'CSS', 'projects': ['multiplix', 'personal-website', 'network-app', 'mail-app'], 'order': 3, 'link': "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"},
        {'name': 'Java', 'projects': [], 'order': 4, 'link': "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"},
        {'name': 'Python', 'projects': ['multiplix', 'network-app', 'mail-app'], 'order': 5, 'link': "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"},
        {'name': 'R', 'projects': ['dataset-regression-analysis'], 'order': 6, 'link': "https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg"},
        {'name': 'Amazon Web Services', 'projects': ['multiplix'], 'order': 7, 'link': "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"},
        {'name': 'Github/Git/Pages', 'projects': ['multiplix', 'personal-website'], 'order': 8, 'link': "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"},
        {'name': 'PostgreSQL', 'projects': ['multiplix'], 'order': 9, 'link': "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"},
        {'name': 'SQLite', 'projects': ['network-app', 'mail-app'], 'order': 10, 'link': "https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg"},
    ]
    
    create_home_page(all_skills, all_projects);
    create_classes_page(all_classes, all_projects);
    create_projects(all_projects);
    create_experiences_page(all_experience);
    change_view('home');
    

    //animate   
        // hide everything
        // if screen is large enough, include certain features

});

function carousel(all_skills, move){
    const icon_bar = document.querySelector('#icon-bar');

    //find how many icons you can fit if each were 110(80px + 15px margin each side)
    let desired_length = Math.floor(icon_bar.getBoundingClientRect().width/110);

    if (move) {
        desired_length = carousel.state.length;
    } 

    if (desired_length < 5){
        desired_length = 5;
    }
    
    //given the desired length, find the space you're working with
    const icon_bar_width = icon_bar.getBoundingClientRect().width - (desired_length*30);

    //ideally, we want each icon to have a width of 100px, to fit atleast 5 icons
    

    //get a list with desired_length icons. If desired_length < 5, it will give us a list of 5, and we will instead resize those 5 icons to fit
    const current_list = get_current_list(carousel.state.first_order, desired_length, all_skills);
    
    //if we are changing the number of icons, we need to clear the icons and reinitialize them
    if (desired_length != carousel.state.length || move){
        carousel.state.change_length(desired_length);
        icon_bar.innerHTML = "";
        populate_icons(current_list, move);
    }

    //console.log(current_list);

    //doing the resizing of 5 icons previously mentioned

    let new_icon_width = 80;
    if (desired_length == 5){
        //first get five, then populate
        if ((Number(icon_bar_width))/desired_length < 80){
            new_icon_width = (Number(icon_bar_width))/desired_length;
        }
        document.querySelectorAll('.icon').forEach((icon)=>{
            icon.style.height = `${new_icon_width}px`;
            icon.style.width = `${new_icon_width}px`;
        });
    } 
    //console.log(new_icon_width);

    document.querySelectorAll('.icon').forEach((icon)=>{
        const projects_text = document.querySelector('#icons-info');
        const text = document.querySelector('#icons-title');
        icon.onmouseover = () => {
            icon.style.height = `${new_icon_width+4}px`;
            icon.style.width = `${new_icon_width+4}px`;
            icon.style.padding = `0px`;
            if (!carousel.state.clicked) {
                text.innerHTML = icon.getAttribute('alt');
            }
        }
        icon.onmouseout = () => {
            console.log(new_icon_width);
            icon.style.height = `${new_icon_width}px`;
            icon.style.width = `${new_icon_width}px`;
            icon.style.padding = `2px`;
            console.log(icon.style.height);
            if (!carousel.state.clicked) {
                text.innerHTML = "Tech Stack";
            }
        }
        //
        icon.onclick = () => {
            carousel.state.click('click');
            text.innerHTML = icon.getAttribute('alt');
            projects_text.innerHTML = "";

            const projects = all_skills.find(item => item.name === icon.getAttribute('alt'))['projects'];
            //projects is a list of project code names in the all_projects array

            if (projects.length > 0){
                let x = 1;
                projects.forEach((project)=>{
                    const project_link = document.createElement('span');
                    project_link.setAttribute('class', 'icon-link');
                    project_link.innerHTML = carousel.state.projects.find(item => item.code === project)['name'];
                    //console.log(x);
                    project_link.onclick = () => {
                        document.querySelector('#projects').click();
                        document.querySelector(`#${project}`).scrollIntoView();
                    }
                    projects_text.appendChild(project_link);
                    if (x != projects.length){
                        projects_text.insertAdjacentHTML('beforeend', ', ');
                    } else {
                        projects_text.insertAdjacentHTML('beforeend', '.');
                    }
                    x ++;
                });
            } else {
                projects_text.innerHTML = "No projects available.";
            }
        }
    });
}

//state is used to determine which icons to load
carousel.state = {
    clicked: false,
    first_order : 0,
    length: 0,
    projects: [],
    max: 9,
    change_length: (length) => {
        carousel.state.length = length;
    },
    move: (direction) => {
        if (direction=='left'){
            if (carousel.state.first_order == 0){
                carousel.state.first_order = carousel.state.max;
            } else {
                carousel.state.first_order --;
            }
        } else {
            if (carousel.state.first_order == carousel.state.max){
                carousel.state.first_order = 0;
            } else {
                carousel.state.first_order ++;
            }
        }
    },
    update_projects: (projects) => {
        carousel.state.projects = projects; 
    },
    click: (click) => {
        if (click == 'click'){
            carousel.state.clicked = true;
        } else {
            //reset the icon bar text when unclicked
            document.querySelector('#icons-title').innerHTML = "Tech Stack";
            document.querySelector('#icons-info').innerHTML = "Click icons for more info."
            carousel.state.clicked = false;
        }
    }
}

//get a new array of desired_length icons starting at first_order
function get_current_list(first_order, desired_length, all_skills){
    let current_list = [];
    const length = all_skills.length;
    if (first_order + desired_length <= length){
        for (let i=0; i<desired_length;i++ ){
            current_list.push(all_skills[first_order+i]);
        }
    } else {
        for (let i=0; i<length-first_order;i++ ){
            current_list.push(all_skills[first_order+i]);
        }
        for (let i=0; i<desired_length-(length-first_order);i++ ){
            current_list.push(all_skills[i]);
        }
    }
    return current_list;
}

//put icons into the bar
function populate_icons(icon_list, direction){
    const icon_row = document.querySelector('#icon-bar');
    icon_list.forEach((icon)=>{
        const icon_background = document.createElement('div');
        icon_background.setAttribute('class', 'col-auto icon-background');
        const icon_img = document.createElement('img');
        icon_img.setAttribute('class', 'icon');
        icon_img.setAttribute('alt', `${icon['name']}`);
        icon_img.setAttribute('src', `${icon['link']}`);
        if (direction){
            icon_img.style.opacity = '0';
        }
        icon_background.appendChild(icon_img);
        icon_row.appendChild(icon_background);
        //icon_img.animate([{left: '20px', opacity:'0'},{left : '0%', opacity:1}],{duration:200});
    });
    if (direction) {
        var promise = Promise.resolve();

        let icons = document.querySelectorAll('.icon');
        if (direction==='left'){
            icons = [...icons];
            icons = icons.reverse();
        }

        icons.forEach((icon)=>{
            promise = promise.then(function () {
                if (direction=='left'){
                    icon.animate([{right: '30px', opacity:'0.5'},{right : '0%', opacity:1}],{duration:100});
                } else {
                    icon.animate([{left: '30px', opacity:'0.5'},{left : '0%', opacity:1}],{duration:100})

                }
                icon.style.opacity=1;     
                return new Promise(function (resolve) {
                    setTimeout(resolve, 20);
                });
            });
        });
    }
}


function project_carousel(all_projects, move){
    const projects = document.querySelector('#project-bar');
    const length = Math.floor(projects.getBoundingClientRect().width / 170);
    project_carousel.state.change_length(length);

    const current_projects = get_current_list(project_carousel.state.first_order, project_carousel.state.length, all_projects);

    //150 + 10px margin

    populate_projects(current_projects, move);
}


project_carousel.state = {
    first_order : 0,
    length: 0,
    projects: [],
    max: 5,
    change_length: (length) => {
        project_carousel.state.length = length;
    },
    move: (direction) => {
        //change the starting order
        if (direction=='left'){
            if (project_carousel.state.first_order == 0){
                project_carousel.state.first_order = project_carousel.state.max;
            } else {
                project_carousel.state.first_order --;
            }
        } else {
            if (project_carousel.state.first_order == project_carousel.state.max){
                project_carousel.state.first_order = 0;
            } else {
                project_carousel.state.first_order ++;
            }
        }
    },
}

function populate_projects(project_list, direction){
    const projects = document.querySelector('#project-bar');
    projects.innerHTML = "";
    project_list.forEach((project)=>{
       
        const project_icon = document.createElement('div');
        project_icon.setAttribute('class', 'col project-icon text-center');
        project_icon.onclick = () => {
            document.querySelector('#projects').click();
            document.querySelector(`#${project.code}`).scrollIntoView();
        }

        const project_name = document.createElement('div');
        project_name.setAttribute('class', 'project-name');

        project_name.innerHTML = project.name;

        const project_skills = document.createElement('div');
        project_skills.setAttribute('class', 'project-skills');
        project_skills.innerHTML = display_skills(project.languages, project.frameworks, "both");

        const splitter = document.createElement('hr');

        const project_content = document.createElement('div');
        project_content.setAttribute('class', 'project-content');

        project_content.innerHTML = project.blurb;
        project_icon.appendChild(project_name);
        project_icon.appendChild(project_skills);
        project_icon.appendChild(splitter);
        project_icon.appendChild(project_content);
        
        projects.appendChild(project_icon);
    });

    let project_icons = document.querySelectorAll('.project-icon');
    var promise = Promise.resolve();

    if (direction){
        project_icons.forEach((icon)=>{
            icon.style.opacity = 0;
        });

        if (direction==='left'){
            project_icons = [...project_icons];
            project_icons = project_icons.reverse();
        }
        project_icons.forEach((icon)=>{
            promise = promise.then(function () {
                if (direction==='left'){
                    icon.animate([{right: '25px', opacity:'0.5'},{right : '0%', opacity:1}],{duration:100});
                } else {
                    icon.animate([{left: '25px', opacity:'0.5'},{left : '0%', opacity:1}],{duration:100})
    
                }
                icon.style.opacity=1;     
                return new Promise(function (resolve) {
                    setTimeout(resolve, 50);
                });
            });
        });
    }
}

function display_skills(languages, frameworks, type){
    let result = "";
    let language = false;
    let framework = false;
    if (type === "languages" || type === "both"){
        language = languages.length > 0;
    } 
    if (type === "frameworks" || type === "both"){
        framework = frameworks.length > 0;
    } 
    if (language){
        let language_array = languages.split(', ');
        for (let i=0; i<language_array.length; i++){
            result = result.concat(`<span class="skill">${language_array[i]}</span>`);
            if (i != language_array.length-1){
                result = result.concat(', ');
            }
        }
    }
    if (framework){
        if (language){
            result = result.concat(' & ');
        }
        let frameworks_array = frameworks.split(', ');
        for (let i=0; i<frameworks_array.length; i++){
            result = result.concat(`<span class="framework">${frameworks_array[i]}</span>`);
            if (i != frameworks_array.length-1){
                result = result.concat(', ');
            }
        }
        //console.log(language_array);
    }
    //console.log(result);
    return result;
}

function create_home_page(all_skills, all_projects){
    //navbar functionality

    let project_list = [];
    all_projects.forEach((project)=>{
        project_list.push({'name': project["name"], 'code': project["code"]},)
    });

    carousel.state.update_projects(project_list);

    document.querySelectorAll('.main-nav').forEach((button) => {
        button.onclick = () => {
            unclick_buttons('.main-nav');
            //if (button.classList.contains('nav-item')) {
              //  button.classList.add('active');
            //}
            if (button.id==="home"){
                button.src = "media/logo-clicked.png";
            }
            button.classList.add('active');
            change_view(button.id);
        }
    });

    //hover for icon on nav
    document.querySelector('#home').onmouseover = (event) => {
        event.currentTarget.src = "media/logo-hover.png";
    }

    document.querySelector('#home').onmouseout = (event) => {
        //clicking triggers onmouseout, so we need to distinguish from when we hover vs when we click
        if (event.currentTarget.src.includes('hover')){
            event.currentTarget.src = "media/logo-empty.png";
        }
    }

    //create carousel
    carousel(all_skills);

    window.onresize = () => {
        carousel(all_skills);
        project_carousel(all_projects);
    }

    document.querySelectorAll('.arrow-icon').forEach((arrow)=>{
        arrow.onclick = () => {
            carousel.state.move(arrow.id);
            carousel.state.click('unclick');
            carousel(all_skills, arrow.id);
        }
    });

    project_carousel(all_projects);

    document.querySelectorAll('.arrow-project').forEach((project)=>{
        project.onclick = () => {
            project_carousel.state.move(project.id);
            project_carousel(all_projects, project.id);
            //carousel(all_skills, arrow.id);
        }
    })
}


function change_view(view) {
    //window.scroll(0,0);

    //acts as if it were actually a separate page
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
    });
    document.querySelector('#home-container').style.display = "none";
    document.querySelector('#projects-container').style.display = "none";
    document.querySelector('#classes-container').style.display = "none";
    document.querySelector('#experiences-container').style.display = "none";

    if (view === 'projects') {
        document.querySelector('#projects-container').style.display = "block";
        console.log(`change view is receiving pro`);

        //scrollspy
        window.onscroll = function () {
            const m = document.querySelectorAll('.project').forEach((project) => {
                //if the top of a project's container is anywhere from the bottom of the top navbar to 125px below the navbar, have it selected on the project navbar
                if (project.offsetTop-window.scrollY > 60 && project.offsetTop-window.scrollY < 200) {
                    //console.log(project.id);
                    select_project_link(project.id);
                } 
            })
        };


    } else if (view === 'classes') {
        console.log(`change view is receiving classes`);
        //create classes
        document.querySelector('#classes-container').style.display = "block";
    } else if (view === 'experiences') {
        console.log(`change view is receiving skills`);
        document.querySelector('#experiences-container').style.display = "block";
    } else {
        document.querySelector('#home-container').style.display = "block";
    }
}

function unclick_buttons(button_type) {
    if (button_type==='.main-nav') {
        document.querySelectorAll('.main-nav').forEach((item) => {
            if (item.id==="home"){
                item.setAttribute('src', 'media/logo-empty.png');
            } 
            item.classList.remove('active');
        });
    }
}

function create_classes_page(all_classes, all_projects) {
    const current_classes = [];
    const past_classes = [];

    for (const course of all_classes){
        if (course.current){
            current_classes.push(course);
        } else {
            past_classes.push(course);
        }
    }

    const classes = document.querySelector('#classes-container');

    const heading = document.createElement('h1');
    heading.innerHTML = "Relevant Coursework";
    classes.append(heading);

    const current_classes_heading = document.createElement('div');
    current_classes_heading.setAttribute('class','row course-heading');
    current_classes_heading.innerHTML = '<h4>Current Courses</h4><hr>'

    classes.appendChild(current_classes_heading);

    create_classes(current_classes, all_projects);

    const past_classes_heading = document.createElement('div');
    past_classes_heading.setAttribute('class','row course-heading');
    past_classes_heading.innerHTML = '<h4>Past Courses</h4><hr>'

    classes.appendChild(past_classes_heading);

    create_classes(past_classes, all_projects);
}
//scrollspy

function create_classes(classes_array, all_projects){
    const classes = document.querySelector('#classes-container');
    for (const course_info of classes_array) {
        const course = document.createElement('div');
        course.setAttribute('class', 'course shadow');

        const row = document.createElement('div');
        row.setAttribute('class', 'row justify-content-center');

        const code = document.createElement('div');
        code.setAttribute('class', 'col-lg-2 col-md-3 col-auto my-auto course-code');
        code.innerHTML = course_info.code;
        console.log();

        const title = document.createElement('div');
        title.setAttribute('class', 'col-lg-6 col-md-6 col-7 my-auto course-title');
        title.innerHTML = course_info.title;

        const info = document.createElement('div');
        info.setAttribute('class', 'col-lg-4 col-md-3 col-12 text-md-end text-center my-auto course-info');
        info.innerHTML = course_info.info;

        const content_dropdown = document.createElement('div');
        content_dropdown.setAttribute('class', 'col-lg-8 col-10 course-content');
        content_dropdown.innerHTML = '';
        content_dropdown.style.display = 'none';

        add_info(course_info, content_dropdown, 'course');

        if (course_info.content.length != 0){
            content_dropdown.appendChild(document.createElement('hr'));
            const content = document.createElement('div');
            content.innerHTML = course_info.content;
            content_dropdown.appendChild(content);
        }

        if (course_info.projects.length != 0){
            content_dropdown.appendChild(document.createElement('hr'));
            const projects = document.createElement('div');
            projects.innerHTML = '<span class="courses-mini-title">Projects: </span>'

            let project_counter = 1;
            for (const project of course_info.projects){
                const project_link = document.createElement('span');
                project_link.setAttribute('class', 'project-courses-link');
                project_link.innerHTML = all_projects.find(item => item.code === project)["name"];
                project_link.onclick = () => {
                    document.querySelector('#projects').click();
                    document.querySelector(`#${project}`).scrollIntoView();
                }

                projects.appendChild(project_link);

                if (project_counter != course_info.projects.length){
                    const spacer = document.createElement('span');
                    spacer.innerHTML = ", ";
                    projects.appendChild(spacer);
                }
                project_counter++;
                //onclick take to projects
            }
            content_dropdown.appendChild(projects);
        }

        //on click call a different function, this should be loaded before it is ever called

        //console.log(course_info);

        row.appendChild(code);
        row.appendChild(title);
        row.appendChild(info);
        row.appendChild(content_dropdown);

        course.appendChild(row);

        //open content dropdown if you click on the course
        course.onclick = () => {
            if (content_dropdown.style.display == 'block'){
                content_dropdown.style.display = 'none';
            } else {
                content_dropdown.style.display = 'block';
            }
        }
        classes.appendChild(course);
    }
}

function create_projects(all_projects) {
    const projects = document.querySelector('#projects-container');


    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    const col = document.createElement('div');
    col.setAttribute('class', 'col-xl-10 col-lg-9 col-md-8 col-12');
    //scrollable_body.setAttribute('id', 'scrollable-body');

    const nav_col = document.createElement('div');
    nav_col.setAttribute('class', 'col-xl-2 col-lg-3 col-md-4 d-none d-md-block');
    
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'projects-nav');
    nav.setAttribute('class', 'navbar project-nav sticky-top');

    const nav_ul = document.createElement('ul');
    nav_ul.setAttribute('class', 'nav flex-column ');

    for (const project_info of all_projects){
        const project = document.createElement('div');
        project.setAttribute('class', 'project container shadow');
        project.setAttribute('id', `${project_info.code}`);

        const heading = document.createElement('h2');
        //heading.setAttribute('id', `${project_info.name}`);
        heading.innerHTML = project_info.name;

        const timestamp = document.createElement('span');
        timestamp.setAttribute('class', 'timestamp');
        timestamp.innerHTML = project_info.time;

        const info = document.createElement('div');
        info.setAttribute('class', 'info');
        info.innerHTML = `${project_info.role}, `
        info.appendChild(timestamp);

        project.appendChild(heading);
        project.appendChild(info);

        add_info(project_info, project);

        project.appendChild(document.createElement('hr'));

        const content = document.createElement('div');
        content.setAttribute('class', 'content');
        content.innerHTML = project_info.content;

        project.appendChild(content);

        const link_text = document.createElement('div');
        link_text.innerHTML = '<br>For more info, click '
        const link = document.createElement('a');
        link.setAttribute('href', project_info.link);
        link.setAttribute('target','_blank');
        link.setAttribute('rel','noopener noreferrer');
        link.innerHTML = "here."

        link_text.appendChild(link);
        project.appendChild(link_text);

        //project.appendChild(document.createElement('hr'));

        col.appendChild(project);

        const nav_item = document.createElement('li');
        nav_item.setAttribute('class', 'nav-item');

        const nav_link = document.createElement('a');
        nav_link.setAttribute('class', 'nav-link project-link');
        nav_link.setAttribute('id', `${project_info.code}-link`);
        nav_link.setAttribute('href', `#${project_info.code}`);
        nav_link.innerHTML = project_info.name;

        nav_item.appendChild(nav_link);
        nav_ul.append(nav_item);
    }

    nav.appendChild(nav_ul);
    nav_col.append(nav);
    row.appendChild(col);
    row.append(nav_col);
    projects.appendChild(row);

    //autoselect the first proejct in the navbar
    select_project_link(all_projects[0].code);
}

//format experiences page
function create_experiences_page(all_experiences) {
    const current_experience = [];
    const upcoming_experience = [];

    for (const experience of all_experiences){
        if (experience.current){
            current_experience.push(experience);
        } else {
            upcoming_experience.push(experience);
        }
    }

    const experiences = document.querySelector('#experiences-container');
 
    const heading = document.createElement('h1');
    heading.innerHTML = "Experience";
    experiences.append(heading);

    if (upcoming_experience.length > 0){
        const upcoming_experiences_heading = document.createElement('div');
        upcoming_experiences_heading.setAttribute('class','row course-heading');
        upcoming_experiences_heading.innerHTML = '<h4>Upcoming Experience</h4><hr>'

        experiences.appendChild(upcoming_experiences_heading);

        create_experiences(upcoming_experience);
    }

    if (current_experience.length > 0){
        const current_experiences_heading = document.createElement('div');
        current_experiences_heading.setAttribute('class','row course-heading');
        current_experiences_heading.innerHTML = '<h4>Current Experience</h4><hr>'

        experiences.appendChild(current_experiences_heading);

        create_experiences(current_experience);
    }
}

//populate experiences for upcoming and current
function create_experiences(experiences_array) {
    const experiences = document.querySelector('#experiences-container');
    for (const experience_info of experiences_array){
        const experience = document.createElement('div');
        experience.setAttribute('class', 'experience container shadow');

        const heading = document.createElement('h2');
        heading.innerHTML = experience_info.name;

        experience.appendChild(heading);

        const role = document.createElement('div');
        role.innerHTML = `${experience_info.role}, `;

        const timestamp = document.createElement('span');
        timestamp.setAttribute('class', 'timestamp');
        timestamp.innerHTML = experience_info.time;

        role.appendChild(timestamp);

        experience.appendChild(role);

        experience.appendChild(document.createElement('hr'));

        const content = document.createElement('div');
        content.innerHTML = experience_info.content;

        experience.appendChild(content);

        experiences.appendChild(experience);
    }
}

//formats the skills/languages/frameworks section for projects and classes
function add_info(item, container, info_type){
    if (item.languages.length != 0 || item.skills.length != 0){
        if (info_type == 'course') {
            container.appendChild(document.createElement('hr'));
        }

        if (item.skills.length != 0){
            const skills = document.createElement('div');
            skills.innerHTML = `<span class="courses-mini-title">Skills: </span>${item.skills}`;
            container.appendChild(skills);
        }

        if (item.languages.length != 0){
            const languages = document.createElement('div');
            languages.innerHTML = `<span class="courses-mini-title">Languages: </span>${display_skills(item.languages, "", "languages")}`;
            container.appendChild(languages);
        }

        if (item.frameworks.length != 0){
            const frameworks = document.createElement('div');
            frameworks.innerHTML = `<span class="courses-mini-title">Frameworks/Libraries: </span>${display_skills("", item.frameworks, "frameworks")}`;
            container.appendChild(frameworks);
        }
    }
}

function select_project_link(project_id){
    document.querySelectorAll('.project-link').forEach((project_link) => {
        if (project_link.id === `${project_id}-link`){
            project_link.setAttribute('class', 'nav-link project-link project-link-active');
        } else {
            project_link.setAttribute('class', 'nav-link project-link');
        }
        //console.log();
    });
}