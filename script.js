const projects = [
    {
        id: 1,
        name: "Noobs Unblocked Games",
        description: "My biggest project. Always being updated!",
        lastUpdated: "11/7/24 2:34p.m CST v0.6.15 ",
        video: "assets/videos/noobs-unblocked-games.mp4",
        languages: ["HTML", "CSS", "Javascript"],
        link: "https://bcrhbrhcdb.github.io/Noobs-Unblocked-Games-POST-BETA/",
    },
    {
        id: 2,
        name: "Random Symbol Generator",
        description: "Just a fun project I made.",
        lastUpdated: "10/9/24 v1.0.0",
        video: "assets/videos/random-symbol-generator.mp4",
        languages: ["HTML", "CSS", "Javascript"],
        link: "https://bcrhbrhcdb.github.io/random-letter-generator/"
    },
    {
        id: 3,
        name: "Recipe Book App",
        description: "Unfinished.",
        lastUpdated: "11/4/24 v0.0.1",
        video: "assets/videos/random-symbol-generator.mp4",
        languages: ["HTML", "CSS", "Javascript"],
        link: "https://bcrhbrhcdb.github.io/random-letter-generator/"
    },
    {
        id: 4,
        name: "The Big Bang Theory",
        description: "A science project I made for school.",
        lastUpdated: "11/1/24 v0.13.9",
        video: "assets/videos/big-bang.webm",
        languages: ["HTML", "CSS", "Javascript"],
        link: "https://bcrhbrhcdb.github.io/The-Big-Bang-Theory/index.html"
    },
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
        <div class="project-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p>Last updated: ${project.lastUpdated}</p>
                <a href="${project.link}" target="_blank">
                    <video src="${project.video}" name="${project.id}" width="375" loop muted></video>
                 </a>
                 ${createLanguageButtons(project.languages)}
                </div>
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