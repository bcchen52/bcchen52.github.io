const section_query_info = new Map([
    ['tech_stack', {'sheet_name': 'Tech', 'range': 'E'}],
    ['experience', {'sheet_name': 'Experience', 'range': 'P'}],
    ['projects', {'sheet_name': 'Projects', 'range': 'S'}],
    ['courses', {'sheet_name': 'Courses', 'range': 'K'}],
]);

const sheet_ID = '1pc09nry75eaP2JJCUan0S_X1ItK5_EX2dgjq1DKerZE';

document.addEventListener('DOMContentLoaded', async function() {

    let viewportHeight = window.innerHeight;

    //when window is resized or reloaded, we need to get new height and new positions of each section
    window.onresize = () => {
        viewportHeight = window.innerHeight;

    }

    //fixes scrolling issues when reloading
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    //this is to make the main page take up the entire window depending on the size
    window.onload = () => {
        //scroll to the top
        window.scrollTo(0, 0);

        //the first step is to get the current size
        viewportHeight = window.innerHeight;
        console.log(viewportHeight);
        const main_content = document.querySelector('#main');
        const main_height = main_content.getBoundingClientRect().height;;
        console.log(main_height);

        //navbar is 60, original margins are 40 each side, only increase margins if we have the space
        if (viewportHeight > main_height + 60 + 80){
            const new_margins = (viewportHeight - 60 - main_height)/2;
            console.log(new_margins);
            main_content.style.marginTop = `${new_margins + 60}px`;
            main_content.style.marginBottom = `${new_margins}px`;
        }
    };

    let section_positions = new Map([
        ['main', document.querySelector('#main').getBoundingClientRect()],
        ['experience', document.querySelector('#main').getBoundingClientRect()],
        ['projects', document.querySelector('#main').getBoundingClientRect()],
        ['courses', document.querySelector('#main').getBoundingClientRect()],
    ])

    //we load in all content from Google Visualization API, and we need to wait for that data BEFORE we create our structures, thus, we need await
    const tech_stack_items = await createMap('tech_stack');

    const experience_items = await createMap('experience');

    const projects_items = await createMap('projects');

    const courses_items = await createMap('courses');

    populate_tech_stack(tech_stack_items);
    populate_entries(experience_items, tech_stack_items, 0); //for experience
    populate_entries(projects_items, tech_stack_items, 1); //for projects
    populate_entries(courses_items, tech_stack_items, 2); //for courses

    //see more and see less toggle for tech stack
    const tech_stack_see_more = document.querySelector("#tech-stack-see-more");
    const tech_stack_see_more_content = document.querySelector("#tech-stack-collapsible");

    tech_stack_see_more.onclick = () => {
        const opened = tech_stack_see_more_content.classList.contains('open');

        tech_stack_see_more_content.classList.toggle('open');       

        //if expanded view is too large, scroll to accomdate
        if (!opened) {
            setTimeout(() => {
            const rect = tech_stack_see_more.getBoundingClientRect();
            if (rect.bottom > window.innerHeight) {
                tech_stack_see_more.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
            }, 400); // wait for animation to finish
        }

        if (opened){
            tech_stack_see_more.innerHTML = "See more...";
        } else {
            tech_stack_see_more.innerHTML = "See less...";
        }
    }

    //courses toggle
    const courses_buttons = document.querySelectorAll('.courses-button');
    courses_buttons.forEach((button) => {
        button.onclick = () => {
            courses_buttons.forEach((button2) => {
                button2.classList.remove('open');
            })
            button.classList.add('open');
            toggle_courses(button.id);
        }
    });

    //initialize courses
    document.querySelector('.courses-button#cs').click();

    //havbar button handling
    const nav_items = document.querySelectorAll('.nav-item');
    nav_items.forEach((item) => {
        item.onclick = () => {
            nav_items.forEach((item2) => {
                item2.classList.remove('open');
            });
            item.classList.add('open');
        }
    });

    //basic scrollspy feature
    window.onscroll = () => {
        section_positions.forEach((section, name) => {
            section_positions.set(name, document.querySelector(`#${name}`).getBoundingClientRect())
        });

        let section_name = "main";
        
        //for loop for a map uses reverse order, so name (or key) first
        for (const [name, section] of section_positions) {
            if (section.top > viewportHeight/2){ //get the section in the top half of the screen
                break;
            } else {
                section_name = name;
            }
        }
        
        //if not already activated, then activate
        const nav_item = document.querySelector(`.nav-item#${section_name}-nav`);
        if (!nav_item.classList.contains('open')){
            nav_items.forEach((item2) => {
                item2.classList.remove('open');
            });
            nav_item.classList.add('open');
        }
    }

});

async function createMap(section){
    const sheet_url = `https://docs.google.com/spreadsheets/d/${sheet_ID}/gviz/tq?range=${section_query_info.get(section)['sheet_name']}!A1:${section_query_info.get(section)['range']}`;
    const item_map = new Map();

    const res = await fetch(sheet_url);
    const text = await res.text();
    const jsonData = JSON.parse(text.match(/(?<=.*\().*(?=\);)/s)[0]);
    const rows = jsonData.table.rows;

    for(let i=1; i<rows['length']; i++){
        const values = {};

        switch (section){
            case 'tech_stack': {
                values['type'] = rows[i]['c'][1].v;
                values['display_name'] = rows[i]['c'][2].v;
                values['icon_link'] = rows[i]['c'][3].v;
                values['search_name'] = rows[i]['c'][4].v;
                break;
            } case 'experience': {
                values['role'] = rows[i]['c'][1].v;
                values['company'] = rows[i]['c'][2].v;
                values['date'] = rows[i]['c'][3].v;
                values['location'] = (rows[i]['c'][4].v).replace(/"/g, '');
                values['tech'] = []
                if (rows[i]['c'][5] != null && rows[i]['c'][5].v != null){
                    values['tech'] = rows[i]['c'][5].v.split(";");
                }
                //we are currently at 6, 6-16 is all possible content entries, though probably not all 10
                const content = [];
                for(let j=6;j<rows[i]['c']['length'];j++){
                    if(rows[i]['c'][j] != null && rows[i]['c'][j].v != null){
                        content.push(rows[i]['c'][j].v);
                    } else {
                        break;
                    }
                }
                values['content'] = content;
                break;
            } case 'projects': {
                values['display_name'] = rows[i]['c'][1].v;
                values['desc'] = rows[i]['c'][2].v;
                values['role'] = rows[i]['c'][3].v;
                values['date'] = rows[i]['c'][4].v;
                //icons and their labels are in separate columns, but share order
                const icons_and_links = [];
                if (rows[i]['c'][5] != null && rows[i]['c'][5].v != null){
                    const icons = rows[i]['c'][5].v.split(";");
                    const links = rows[i]['c'][6].v.split(";");
                    for(let j=0;j<icons.length;j++){
                        icons_and_links.push([icons[j], links[j]]);
                    }
                }
                values['icons'] = icons_and_links;
                values['tech'] = [];
                if (rows[i]['c'][7] != null && rows[i]['c'][7].v != null){
                    values['tech'] = rows[i]['c'][7].v.split(";");
                }
                values['section'] = rows[i]['c'][8].v;
                const content = [];
                for(let j=9;j<rows[i]['c']['length'];j++){
                    if(rows[i]['c'][j] != null && rows[i]['c'][j].v != null){
                        content.push(rows[i]['c'][j].v);
                    } else {
                        break;
                    }
                }
                values['content'] = content;
                break;
            } case 'courses': {
                values['code'] = null;
                if (rows[i]['c'][1] != null && rows[i]['c'][1].v != null){
                    values['code'] = rows[i]['c'][1].v;
                }
                values['subject'] = rows[i]['c'][2].v;
                values['display_name'] = rows[i]['c'][3].v;
                values['date'] = rows[i]['c'][4].v;
                values['desc'] = rows[i]['c'][5].v;
                values['tech'] = [];
                if (rows[i]['c'][6] != null && rows[i]['c'][6].v != null){
                    values['tech'] = rows[i]['c'][6].v.split(";");
                }
                values['info_link'] = rows[i]['c'][7].v;
                values['special_link'] = null;
                if (rows[i]['c'][8] != null && rows[i]['c'][8].v != null){
                    values['special_link'] = rows[i]['c'][8].v;
                }
                const content = [];
                for(let j=9;j<rows[i]['c']['length'];j++){
                    if(rows[i]['c'][j] != null && rows[i]['c'][j].v != null){
                        content.push(rows[i]['c'][j].v);
                    } else {
                        break;
                    }
                }
                values['content'] = content;
            }
        }

        item_map.set(rows[i]['c'][0].v, values);
    }
    console.log(item_map);
    
    return item_map;
}

function populate_tech_stack(items){
    const tech_stack_languages = document.querySelector('#tech-stack-languages-row');
    const tech_stack_web = document.querySelector('#tech-stack-web-row');
    const tech_stack_data = document.querySelector('#tech-stack-data-row');
    const tech_stack_infra = document.querySelector('#tech-stack-infra-row');
    const tech_stack_db = document.querySelector('#tech-stack-db-row');
    const tech_stack_dev = document.querySelector('#tech-stack-dev-row');
    
    items.forEach((item, name)=>{
        const tech_stack_item = document.createElement('div');
        tech_stack_item.setAttribute('class', 'd-flex justify-content-center align-items-center tech-stack-item');

        const tech_stack_item_container = document.createElement('div');
        tech_stack_item_container.setAttribute('class', 'col-xl-2 col-md-3 col-4 d-flex justify-content-center align-items-center tech-stack-item-container')

        let tech_stack_icon = document.createElement('img');

        if (item['icon_link'].includes('https')){
            tech_stack_icon.setAttribute('class', 'tech-stack-icon');
            tech_stack_icon.setAttribute('src', item['icon_link']);
            tech_stack_icon.setAttribute('alt', `${item['display_name']} logo`);
        } else {
            tech_stack_icon = document.createElement('i');
            tech_stack_icon.setAttribute('class', `${item['icon_link']} tech-stack-icon`);
        }

        tech_stack_item.appendChild(tech_stack_icon);

        const tech_stack_name = document.createElement('span');
        tech_stack_name.setAttribute('class', 'tech-stack-name');
        tech_stack_name.innerHTML = item['display_name'];

        tech_stack_item.appendChild(tech_stack_name);

        tech_stack_item.onclick = () => {
            window.open(`https://www.google.com/search?q=${item['search_name']}`, '_blank', 'noopener,noreferrer');
        }

        tech_stack_item_container.appendChild(tech_stack_item);

        //put item in appropriate place
        if (item['type'] == 'languages'){
            tech_stack_languages.appendChild(tech_stack_item_container);
        } else if (item['type'] == 'web') {
            tech_stack_web.appendChild(tech_stack_item_container);
        } else if (item['type'] == 'data') {
            tech_stack_data.appendChild(tech_stack_item_container);
        } else if (item['type'] == 'infra') {
            tech_stack_infra.appendChild(tech_stack_item_container);
        } else if (item['type'] == 'db') {
            tech_stack_db.appendChild(tech_stack_item_container);
        } else if (item['type'] == 'dev') {
            tech_stack_dev.appendChild(tech_stack_item_container);
        }
    });
}

function populate_entries(items, tech_items, type) {
    //same function for experiences and projects because it follows the same layout of headings and tech stack, only difference is what goes where
    let experiences = document.querySelector('#experience-col');

    //this is for the projects
    const collapsible_project_div = document.createElement('div');
    collapsible_project_div.setAttribute('class', 'project-collapsible');

    if (type == 1){ //for projects
        experiences = document.querySelector('#projects-col');
        //if projects, we want to add a div and handling to put projects in the background.
    } else if (type == 2){ //for courses
        experiences = document.querySelector('#courses-col');
        //if courses, we have to change formatting, put things in a collapsible div, and then add a div open and close button
    }

    items.forEach((item, name)=>{
        const experience_entry = document.createElement('div');
        experience_entry.setAttribute('class', 'container experience-entry');

        const experience_row = document.createElement('div');
        experience_row.setAttribute('class', 'row justify-content-between');

        //this is where we put content in each course, unused in experience or projects
        const collapsible_course_div = document.createElement('div');
        collapsible_course_div.setAttribute('class', 'course-collapsible');
        const collapsible_course_row = document.createElement('div');
        collapsible_course_row.setAttribute('class', 'row');

        //const hr = document.createElement('hr');
        //experience_row.appendChild(hr);

        const experience_col_head = document.createElement('div');
        experience_col_head.setAttribute('class', 'col-md-9 col-12');

        const experience_role = document.createElement('h2');
        experience_role.setAttribute('class', 'experience-role');

        const experience_company = document.createElement('h3');
        experience_company.setAttribute('class', 'experience-company');

        if (type == 1){ //this is where the difference between experience and projects is 
            experience_entry.id = name; //so we can link to projects

            experience_role.innerHTML = item['display_name'];
            experience_company.innerHTML = `${item['desc']} | ${item['role']}`;
            if (item['icons'].length > 0){
                item['icons'].forEach((icon)=>{
                    const project_link = document.createElement('a');
                    project_link.setAttribute('href', icon[1]);
                    project_link.setAttribute('target', '_blank');
                    project_link.setAttribute('rel', 'noopener noreferrer');
                    project_link.setAttribute('class', 'project-icon-link');

                    const project_icon = document.createElement('i');
                    project_icon.setAttribute('class', `${icon[0]} fa-lg project-icon`);
                    
                    project_link.appendChild(project_icon);
                    experience_role.appendChild(project_link);
                });
            }
        } else if (type == 0) { //experience
            experience_role.innerHTML = item['role'];
            experience_company.innerHTML = `${item['company']} &middot; ${item['location']}`;
        } else if (type == 2) { //courses
            const course_code = document.createElement('span');
            course_code.setAttribute('class', 'course-code');
            course_code.innerHTML = item['code'];

            experience_role.innerHTML = `${item['display_name']} `;
            experience_role.appendChild(course_code);
            experience_company.innerHTML = item['desc'];
        }

        experience_col_head.appendChild(experience_role);
        experience_col_head.appendChild(experience_company);

        const experience_col_date = document.createElement('div');
        experience_col_date.setAttribute('class', 'col-md-3 col-12 text-md-end text-start');

        const experience_date = document.createElement('h4');
        experience_date.setAttribute('class', 'date');
        experience_date.innerHTML = item['date'];

        experience_col_date.appendChild(experience_date);

        const experience_col_content = document.createElement('div');
        experience_col_content.setAttribute('class', 'col-12');

        const experience_content = document.createElement('ul');
        experience_content.setAttribute('class', 'experience-ul');

        item['content'].forEach((content)=>{
            const experience_content_item = document.createElement('li');
            experience_content_item.innerHTML = content;
            experience_content.appendChild(experience_content_item);
        });

        if (type == 2) { //courses has added stuff
            //extra stuff link
            let experience_content_item = document.createElement('li');
            experience_content_item.innerHTML = `Find more info <a href="${item['info_link']}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">here</a>`;
            //we need to stopPropogation() to allow the link to be clicked without closing the course entry info
            experience_content.appendChild(experience_content_item);

            //special link does not follow a standardized format, so the "special link" will have the exact content + html to be displayed
            if (item['special_link'] != null){
                let experience_content_item = document.createElement('li');
                experience_content_item.innerHTML = item['special_link'];
                experience_content.appendChild(experience_content_item);
            }
        }

        experience_col_content.appendChild(experience_content);

        if (type == 2){ //courses holds info in the collapsible div
            experience_row.appendChild(experience_col_head);
            experience_row.appendChild(experience_col_date);
            experience_entry.appendChild(experience_row);

            collapsible_course_row.appendChild(experience_col_content);
            collapsible_course_div.appendChild(collapsible_course_row);
        } else {
            experience_row.appendChild(experience_col_head);
            experience_row.appendChild(experience_col_date);
            experience_row.appendChild(experience_col_content);

            experience_entry.appendChild(experience_row);
        }

        if (item['tech'].length > 0){ //if there is a tech stack
            const header_col = document.createElement('div');
            header_col.setAttribute('class', 'col-12');

            const experience_tech_row = document.createElement('div');
            experience_tech_row.setAttribute('class', 'row tech-stack-row');

            item['tech'].forEach((tech)=>{
                const tech_stack_item_container = document.createElement('div');
                tech_stack_item_container.setAttribute('class', 'col-xl-2 col-sm-3 col-4 d-flex justify-content-center align-items-center tech-stack-item-container');

                const tech_info = tech_items.get(tech);

                const tech_stack_item = document.createElement('div');
                tech_stack_item.setAttribute('class', 'd-flex justify-content-center align-items-center tech-stack-item experience-tech-stack-item');

                let tech_stack_icon = document.createElement('img');

                if (tech_info['icon_link'].includes('https')){
                    tech_stack_icon.setAttribute('class', 'experience-tech-stack-icon');
                    tech_stack_icon.setAttribute('src', tech_info['icon_link']);
                    tech_stack_icon.setAttribute('alt', `${tech_info['display_name']} logo`);
                } else {
                    tech_stack_icon = document.createElement('i');
                    tech_stack_icon.setAttribute('class', `${tech_info['icon_link']} experience-tech-stack-icon`);
                }

                const tech_stack_name = document.createElement('span');
                tech_stack_name.setAttribute('class', 'tech-stack-name experience-tech-stack-name');
                tech_stack_name.innerHTML = tech_info['display_name'];

                tech_stack_item.appendChild(tech_stack_icon);
                tech_stack_item.appendChild(tech_stack_name);

                //we use addEventListener rather than the onclick shortcut so we have direct access to the event object, so that we can stopPropagation() for the tech stack in courses to prevent the course info from accidentaly being hidden
                tech_stack_item.addEventListener('click', (event) => {
                    event.stopPropagation();
                    window.open(`https://www.google.com/search?q=${tech_info['search_name']}`, '_blank', 'noopener,noreferrer');

                })

                tech_stack_item_container.appendChild(tech_stack_item);
                experience_tech_row.appendChild(tech_stack_item_container);
            });
            //for courses, we add the tech stack to the collapsible section, rather than the normal section
            if (type == 2){
                collapsible_course_div.appendChild(experience_tech_row);
            } else {
                experience_entry.appendChild(experience_tech_row);
            }
        }

        if (type == 2){
            experience_entry.appendChild(collapsible_course_div);
        }

        const hr = document.createElement('hr');

        //making courses expandable
        if (type == 2){
            //for courses, we want to wrap the entry and the hr into an element so we can easily hide the whole thing
            const course_entry = document.createElement('span');
            course_entry.setAttribute('class', `course-entry ${item['subject']}`);
            experience_entry.onclick = () => {
                collapsible_course_div.classList.toggle('open');  
            }

            course_entry.appendChild(hr);
            course_entry.appendChild(experience_entry);
            experiences.appendChild(course_entry);
        } else if (type == 1 && item['section'] != 'main') {
            collapsible_project_div.appendChild(hr);
            collapsible_project_div.appendChild(experience_entry);
        } else {
            //first, put in line break
            experiences.appendChild(hr);
            experiences.appendChild(experience_entry);
        }
    });
    if (type == 1){ //collapsible for projects
        experiences.appendChild(collapsible_project_div);
        const see_more_cont = document.createElement('div');
        see_more_cont.setAttribute('class', 'container');
        const see_more_row = document.createElement('div');
        see_more_row.setAttribute('class', 'row justify-content-center');
        const see_more_col = document.createElement('div');
        see_more_col.setAttribute('class', 'col-auto text-center');
        const see_more = document.createElement('h3');
        see_more.setAttribute('class', 'see-more-button');
        see_more.innerHTML = 'See more...';

        see_more.onclick = () => {
            collapsible_project_div.classList.toggle('open');

            if (collapsible_project_div.classList.contains('open')){
                see_more.innerHTML = 'See less...';
            } else {
                see_more.innerHTML = 'See more...';
            }
        }

        see_more_col.appendChild(see_more);
        see_more_row.appendChild(see_more_col);
        see_more_cont.appendChild(see_more_row);
        experiences.appendChild(see_more_cont);
    }
}

function toggle_courses(course_type){
    const courses_col = document.querySelector('#courses-col');
    let courses = document.querySelectorAll('.course-entry');

    courses.forEach((course) => {
        course.classList.remove('open');
    });

    if (course_type == "all"){
        courses.forEach((course) => {
            course.classList.add('open');
        });
    } else {
        courses.forEach((course) => {
            if (course.classList.contains(`${course_type}`)){
                course.classList.add('open');
            } 
        });
    }
}