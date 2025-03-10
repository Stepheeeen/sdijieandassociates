document.addEventListener("DOMContentLoaded", function () {
    fetch("../../content/pages/about2.json")
        .then(response => response.json())
        .then(data => {
            // Update Icon
            document.getElementById("about2-icon").className = data.icon;

            // Update Subtitle & Title
            document.getElementById("about2-subtitle").textContent = data.subtitle;
            document.getElementById("about2-title").innerHTML = data.title;

            // Update Description
            document.getElementById("about2-description").innerHTML = data.description;

            // Update Image
            const aboutImage = document.getElementById("about2-image");
            aboutImage.src = data.image;
            aboutImage.alt = data.imageAlt;

            // Update Founder Details
            document.getElementById("about2-name").textContent = data.founder_name;
            document.getElementById("about2-role").textContent = data.founder_role;
        })
        .catch(error => console.error("Error loading About 2 section content:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("../../content/pages/about.json")
        .then(response => response.json())
        .then(data => {
            // Get elements
            const sectionTitle = document.querySelector(".section-title span");
            const aboutParagraph = document.querySelector(".about p");
            const pageList = document.querySelector(".page-list");
            const experienceNumber = document.querySelector(".year-box .number");
            const experienceText = document.querySelector(".year-box .txt");
            const aboutImage = document.querySelector(".about .item img");

            // Populate data
            sectionTitle.innerHTML = data.name;
            aboutParagraph.innerHTML = data.description;
            experienceNumber.innerHTML = data.experience_years;
            experienceText.innerHTML = data.experience_text;
            aboutImage.src = data.image;
            aboutImage.alt = data.alt;

            // Clear existing list
            pageList.innerHTML = data.highlights.map(highlight => `
                <li>
                    <div class="page-list-icon"><span class="ti-check"></span></div>
                    <div class="page-list-text">
                        <p>${highlight}</p>
                    </div>
                </li>
            `).join('');
        })
        .catch(error => console.error("Error loading About section:", error));
});
