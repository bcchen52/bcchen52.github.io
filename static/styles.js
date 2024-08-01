document.addEventListener('DOMContentLoaded', function() {
    home();
    create_classes_page();
    create_projects();
    //console.log('hello');

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

const all_classes = [
    {"code": "CS50W", "title": "Web Programming with Python and JavaScript", "info": "Harvard University Online Course", "skills": "Front-end Development, Back-end Development", "languages": "JavaScript, HTML, CSS, Python, SQL", "frameworks": "Django, SQLite, Bootstrap, React", "projects": ["Mail", "Network"], "content": "Harvard University's online course on full stack web development. <div>More info <a href='https://cs50.harvard.edu/web/2020/' target='_blank' rel='noopener noreferrer'>here.</a></div>", "current": true,},
    {"code": "MATH 447", "title": "Probability Theory", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "", "current": true,},
    {"code": "CS 320", "title": "Advanced Computer Architecture", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "", "current": true,},
    {"code": "CS 310", "title": "Data Struct and Algorithms", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "", "current": true,},
    {"code": "N/A", "title": "Introduction to Machine Learning", "info": "Binghamton University Online Course/Microcredential", "skills": "Probability Theory, Machine Learning Algorithms and Concepts, Regression", "languages": "", "frameworks": "", "projects": "", "content": "Certification badge <a href='https://www.credly.com/badges/f381ca72-361c-42a9-8aaa-a2dde0af4fe7' target='_blank' rel='noopener noreferrer'>here.</a>", "current": false,},
    {"code": "MATH 330", "title": "Number Systems", "info": "Binghamton Univerity Course", "skills": "Set Theory, Number Theory, Proofwriting, Real Analysis, General/Point-set Topology", "languages": "", "frameworks": "", "projects": "", "content": "More info <a href='https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2024-02/html/math-330-home.html' target='_blank' rel='noopener noreferrer'>here.</a>", "current": false,},
    {"code": "MATH 329", "title": "Intro to Scientific Computing", "info": "Binghamton Univerity Course", "skills": "Regression Analysis ", "languages": "R", "frameworks": "", "projects": ["Dataset Regression Analysis"], "content": "", "current": false,},
    {"code": "MATH 323", "title": "Calculus III", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "", "current": false,},
    {"code": "MATH 304", "title": "Linear Algebra", "info": "Binghamton Univerity Course", "skills": "", "languages": "", "frameworks": "", "projects": "", "content": "", "current": false,},
    {"code": "CS 220", "title": "Arch from a Prog Perspective", "info": "Binghamton Univerity Course", "skills": "Low-Level Programming, Processor and Memory Organization, Code Dissembly", "languages": "C, x86 assembly", "frameworks": "", "projects": ["Floating Point Converter"], "content": "", "current": false,},
    {"code": "CS 210", "title": "Prog with Obj & Data", "info": "Binghamton Univerity Course", "skills": "", "languages": "Java", "frameworks": "", "projects": "", "content": "", "current": false,},
    {"code": "CS 120", "title": "Prog & Hardware Fundamentals", "info": "Binghamton Univerity Course", "skills": "", "languages": "C", "frameworks": "", "projects": "", "content": "", "current": false,},
];

const current_classes = [];

const past_classes = [];

for (const course of all_classes){
    if (course.current){
        current_classes.push(course);
    } else {
        past_classes.push(course);
    }
}

const all_projects = [
    {"name": "Network App", "time":"March 2024-April 2024", "skills": "Bit Twiddling", "languages": "C", "frameworks": "", "content": "<br><br>This project is an extension of project 4, Network from Harvard University's CS50W", "link":"https://github.com/bcchen52/floating-point-converter"},
    {"name": "Mail App", "time":"March 2024-April 2024", "skills": "Bit Twiddling", "languages": "HTML, CSS, Python, SQL", "frameworks": "Bootstrap, SQLite", "content": "<video width='80%' src='media/Mail.mp4' controls >Video not supported.</video><br><br>This project is an extension of project 3, Mail from Harvard University's CS50W", "link":"https://github.com/bcchen52/floating-point-converter"},
    {"name": "Dataset Regression Analysis", "time":"June 2024-July 2024", "skills": "Regression Analysis, Model Fitting", "languages": "R", "frameworks": "R Studio", "content": "This is a report-style linear regression analysis on the Hitters dataset from R's ISLR package.<br><br> This report includes a full exploratory analysis of the data and uses regression analysis to transform and create a regression model to accurately fit the data.<br><br><object data='your_url_to_pdf' type='application/pdf'><iframe src='media/finalprojectreport_brian_chen.pdf' width='80%' height='500px'></iframe></object><br><br>This project is the final project from Binghamton University's MATH329 ", "link":"https://docs.google.com/document/d/e/2PACX-1vRkaHLJ-tC_CsTu18xy2-QZdvBiREy7sn-nhmgYR7kz8RhojEwMecHvA4rdxljJFkbxCHdpQ8VRHYPq/pub"},
    {"name": "Floating Point Converter", "time":"March 2024-April 2024", "skills": "Bit Twiddling", "languages": "C", "frameworks": "", "content": "This program uses C to take a double floating point value and use bit twiddling to store it into a floatx value with user-specified exponent and fraction bit sizes.<br><br>The floatx value will be stored in the right most bits of a double value, meaning that the total bits(exponent bits, fraction bits, and sign bit) have a maximum of 64. There must be at least 1 fraction bit and 1 exponent bit, and the minimum number of total bits is 3.<br><br>According to the IEEE standard, a double point floating values has 1 sign bit, 11 exponent bits, and 52 fraction bits. Some values may need more magnitude, i.e. more exponent bits, and less precision, i.e. less fraction bits, or vice versa. A value simply may not need the extent of precision and size given by a standard single or double floating point. <br><br>This project is an extension of a project from Binghamton University's CS220", "link":"https://github.com/bcchen52/floating-point-converter"},
]

console.log(current_classes[0].skills.length);

function home(){
    change_view('home');
}

function change_view(view) {
    document.querySelector('#home-container').style.display = "none";
    document.querySelector('#projects-container').style.display = "none";
    document.querySelector('#classes-container').style.display = "none";
    document.querySelector('#experiences-container').style.display = "none";

    console.log(`change view is receiving ${view}`);

    if (view === 'projects') {
        document.querySelector('#projects-container').style.display = "block";
        console.log(`change view is receiving pro`);
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
            item.setAttribute('class','nav-item main-nav');
        })
    }
}

function create_classes_page() {
    const classes = document.querySelector('#classes-container');

    const current_classes_heading = document.createElement('div');
    current_classes_heading.setAttribute('class','row course-heading');
    current_classes_heading.innerHTML = 'Current Courses<hr>'

    classes.appendChild(current_classes_heading);

    create_classes(current_classes);

    const past_classes_heading = document.createElement('div');
    past_classes_heading.setAttribute('class','row course-heading');
    past_classes_heading.innerHTML = 'Past Courses<hr>'

    classes.appendChild(past_classes_heading);

    create_classes(past_classes);
}
//scrollspy

function create_classes(classes_array){
    const classes = document.querySelector('#classes-container');
    for (const course_info of classes_array) {
        const course = document.createElement('div');
        course.setAttribute('class', 'course');

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
                project_link.setAttribute('class', 'project-link');
                project_link.innerHTML = project;
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

        console.log(course_info);

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

function create_projects() {
    const projects = document.querySelector('#projects-container');

    const row = document.createElement('div');
    row.setAttribute('class', 'row');

    const col = document.createElement('div');
    col.setAttribute('class', 'col-xl-10 col-lg-9 col-md-8 col-12');

    const nav_col = document.createElement('div');
    nav_col.setAttribute('class', 'col-xl-2 col-lg-3 col-md-4 d-none d-md-block');

    const nav = document.createElement('ul');
    nav.setAttribute('class', 'nav flex-column');

    for (const project_info of all_projects){
        const project = document.createElement('div');
        project.setAttribute('class', 'project');

        const heading = document.createElement('h2');
        heading.innerHTML = project_info.name;

        const timestamp = document.createElement('span');
        timestamp.setAttribute('class', 'timestamp');
        timestamp.innerHTML = project_info.time;

        project.appendChild(heading);
        project.appendChild(timestamp);

        add_info(project_info, project);

        project.appendChild(document.createElement('hr'));

        const content = document.createElement('div');
        content.setAttribute('class', 'content');
        content.innerHTML = project_info.content;

        project.appendChild(content);

        const link_text = document.createElement('div');
        link_text.innerHTML = '<br>More info '
        const link = document.createElement('a');
        link.setAttribute('href', project_info.link);
        link.setAttribute('target','_blank');
        link.setAttribute('rel','noopener noreferrer');
        link.innerHTML = "here."

        link_text.appendChild(link);
        project.appendChild(link_text);

        project.appendChild(document.createElement('hr'));

        col.appendChild(project);

        const nav_item = document.createElement('li');
        nav_item.setAttribute('class', 'nav-item project-link');

        const nav_link = document.createElement('span');
        nav_link.setAttribute('class', 'nav-link active project-link-span');

        nav_link.innerHTML = project_info.name;

        nav_item.appendChild(nav_link);
        nav.append(nav_item);
    }



    //do something with the nav bar
    nav_col.append(nav);
    row.appendChild(col);
    row.append(nav_col);
    projects.appendChild(row);
}

//formats the skills/languages/frameworks for projects and classes
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
            languages.innerHTML = `<span class="courses-mini-title">Languages: </span>${item.languages}`;
            container.appendChild(languages);
        }

        if (item.frameworks.length != 0){
            const frameworks = document.createElement('div');
            frameworks.innerHTML = `<span class="courses-mini-title">Frameworks/Libraries: </span>${item.frameworks}`;
            container.appendChild(frameworks);
        }
    }
}