const teamButton = document.querySelector('.team-btn');
const mobileTeamList = document.querySelector('.mobile-team-list');
const mobileTeamListWrapper = document.querySelector('.team-mobile-list-wrapper');




const toggleMobleTeamSection = () => {
    if (mobileTeamListWrapper.className.includes("team-mobile-list-wrapper-open")) {
        mobileTeamListWrapper.classList.remove('team-mobile-list-wrapper-open');
        teamButton.querySelector('p').innerText = "More";
        teamButton.querySelector('i').className = "bx bxs-chevron-down";
    } else {
        mobileTeamListWrapper.classList.add('team-mobile-list-wrapper-open');
        teamButton.querySelector('p').innerText = "Less";
        teamButton.querySelector('i').className = "bx bxs-chevron-up";
    }


}


// event
teamButton.addEventListener('click', () => toggleMobleTeamSection());
