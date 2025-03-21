document.addEventListener("DOMContentLoaded", function () {
    fetch("../../content/pages/home.json")
        .then(response => response.json())
        .then(data => {
            const parallaxData = data.parallax;

            // Update background and overlay
            const parallaxSection = document.getElementById("parallax-section");
            parallaxSection.style.backgroundImage = `url(${parallaxData.background})`;
            parallaxSection.setAttribute("data-overlay-dark", parallaxData.overlay);

            // Update text content
            document.getElementById("parallax-icon").className = parallaxData.icon;
            document.getElementById("parallax-tagline").textContent = parallaxData.tagline;
            document.getElementById("parallax-title").innerHTML = parallaxData.title;

            // Update button
            const button = document.getElementById("parallax-button");
            button.textContent = parallaxData.buttonText;
            button.href = parallaxData.buttonLink;
        })
        .catch(error => console.error("Error loading home.json:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    fetch("../../content/pages/home.json")
        .then(response => response.json())
        .then(data => {
            const aboutData = data.about;

            // Set icon and subtitle
            document.getElementById("about-icon").className = aboutData.icon;
            document.getElementById("about-subtitle").textContent = aboutData.subtitle;

            // Set title and description
            document.getElementById("about-title").innerHTML = aboutData.title;
            document.getElementById("about-description").textContent = aboutData.description;

            // Populate bullet points dynamically
            const pointsList = document.getElementById("about-points");
            pointsList.innerHTML = "";
            aboutData.points.forEach(point => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
          <div class="page-list-icon"><span class="ti-check"></span></div>
          <div class="page-list-text"><p>${point}</p></div>
        `;
                pointsList.appendChild(listItem);
            });

            // Set button text and link
            const button = document.getElementById("about-button");
            button.textContent = aboutData.buttonText;
            button.href = aboutData.buttonLink;

            // Set years of experience and text
            document.getElementById("about-years").textContent = aboutData.years;
            document.getElementById("about-years-text").textContent = aboutData.yearsText;

            // Set image
            document.getElementById("about-image").src = aboutData.image;
        })
        .catch(error => console.error("Error loading home.json:", error));
});

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