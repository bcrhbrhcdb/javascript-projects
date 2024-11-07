const projects = [
    {
        id: 1,
        name: "Noobs Unblocked Games",
        description: "My biggest project",
        lastUpdated: "10/10/24 8:20AM",
        video: "assets/videos/noobs-unblocked-games.mp4",
        languages: ["html", "css", "javascript"],
        link: "https://bcrhbrhcdb.github.io/Noobs-Unblocked-Games-POST-BETA/",
    },
    {
        id: 2,
        name: "Random Symbol Generator",
        description: "Just a fun project I made.",
        lastUpdated: "10/9/24",
        video: "assets/videos/random-symbol-generator.mp4",
        languages: ["html", "css", "javascript"],
        link: "https://bcrhbrhcdb.github.io/random-letter-generator/"
    }
];

function projectLayout() {
    const projectArea = document.getElementById("projects");
    projects.forEach((project) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'box';
        projectElement.innerHTML = `
            <div class="languages">
                ${project.languages.map(lang => `<button>${lang.toUpperCase()}</button>`).join('')}
            </div>
            <a href="${project.link}" target="_blank">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p>Last updated: ${project.lastUpdated}</p>
                <video src="${project.video}" name="${project.id}" width="375"></video>
            </a>
        `;
        projectArea.appendChild(projectElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    projectLayout();
});