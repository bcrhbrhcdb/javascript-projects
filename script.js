const projects = [
    {
        id: 1,
        name: "Noobs Unblocked Games",
        description: "My biggest project",
        lastUpdated: "10/10/24 8:20AM",
        video: "assets/videos/noobs-unblocked-games.mp4",
        languages: ["HTML", "CSS", "Javascript"],
        link: "https://bcrhbrhcdb.github.io/Noobs-Unblocked-Games-POST-BETA/",
    },
    {
        id: 2,
        name: "Random Symbol Generator",
        description: "Just a fun project I made.",
        lastUpdated: "10/9/24",
        video: "assets/videos/random-symbol-generator.mp4",
        languages: ["HTML", "CSS", "Javascript"],
        link: "https://bcrhbrhcdb.github.io/random-letter-generator/"
    }
];

function createLanguageButtons(languages) {
    return `
        <div class="languages">
            ${languages.map(lang => `<div class="language">${lang}</div>`).join('')}
        </div>
    `;
}

function projectLayout() {
    const projectArea = document.getElementById("projects");
    projects.forEach((project) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'box';
        projectElement.innerHTML = `
            ${createLanguageButtons(project.languages)}
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p>Last updated: ${project.lastUpdated}</p>
                <a href="${project.link}" target="_blank">
                    <video src="${project.video}" name="${project.id}" width="375" loop muted></video>
                 </a>
        `;
        projectArea.appendChild(projectElement);
    });

    // Add event listeners to all videos
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        video.addEventListener('mouseleave', () => {
            video.pause();
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    projectLayout();
});