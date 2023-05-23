const mobileTeamListContainer = document.querySelectorAll(".mobile-team-list");

const teamMembers = [
    {
        name: "mark orlando",
        role: "CEO",
        bio: 'Ex manager ate chanel, Mark Lee is an incredible fashion enthusiast and fashion professor',
        image: "assets/images/teamm1.png"
    },
    {

        name: "Juliet Denis",
        role: "Chief of Designer",
        bio: 'Professional designer and chief executive , Juliet Denis has an incredible experience in the field of fashion design',
        image: "assets/images/teamm2.png"
    },
    {

        name: "Lexandre bravo porte",
        role: "Designer",
        bio: 'Designer and project manager, Alexandre is the main project manager of our activities and designer in the women clothing department',
        image: "assets/images/teamm3.png"
    },
    {

        name: "Monica Morgan",
        role: "Technician",
        bio: 'Franck plays a very important role in our industry,responsible for ensuring that that all machines are working as expected',
        image: "assets/images/teamm4.png"
    },
    {

        name: "Daniel martin",
        role: "Supervisor",
        bio: 'Main supervisor of our activities',
        image: "assets/images/teamm5.png"
    },
];


const teamElement = (name, role, bio, image) => {
    const el = document.createElement('li');
    el.className = "team-el";

    el.innerHTML = `
    <div class="trailing">
        <img src="${image}" alt="">
    </div>

    <div class="title">
        <h1>${name}</h1>
        <p>${role}</p>
        <p>${bio}</p>
    </div>
    `;

    return el;
}



const printMembers = () => {

    mobileTeamListContainer.forEach((list) => {
        teamMembers.forEach((el) => {
            list.appendChild(teamElement(el.name, el.role, el.bio, el.image));
        });
    })

}
printMembers();