document.addEventListener("DOMContentLoaded", function () {
    fetch("../../admin/content/pages/about.json")
        .then(response => response.json())
        .then(data => {
            // Update Icon
            document.getElementById("about2-icon").className = data.about2.icon;

            // Update Subtitle & Title
            document.getElementById("about2-subtitle").textContent = data.about2.subtitle;
            document.getElementById("about2-title").innerHTML = data.about2.title;

            // Update Description
            document.getElementById("about2-description").innerHTML = data.about2.description;

            // Update Image
            const aboutImage = document.getElementById("about2-image");
            aboutImage.src = data.about2.image;
            aboutImage.alt = data.about2.imageAlt;

            // Update Founder Details
            document.getElementById("about2-name").textContent = data.about2.founderName;
            document.getElementById("about2-role").textContent = data.about2.founderRole;
        })
        .catch(error => console.error("Error loading About 2 section content:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("../../admin/content/pages/about.json")
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
            sectionTitle.innerHTML = data.about.name;
            aboutParagraph.innerHTML = data.about.description;
            experienceNumber.innerHTML = data.about.experience.years;
            experienceText.innerHTML = data.about.experience.text;
            aboutImage.src = data.about.image;
            aboutImage.alt = data.about.alt;

            // Clear existing list
            pageList.innerHTML = data.about.highlights.map(highlight => `
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
