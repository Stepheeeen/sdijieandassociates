document.addEventListener("DOMContentLoaded", function () {
    fetch("../../admin/content/pages/caseStudy.json")
        .then((response) => response.json())
        .then((data) => {
            const dispute = data.dispute;
            document.getElementById("case-study-topic").textContent = dispute.case_study;
            document.getElementById("section-title").textContent = dispute.title;
            document.getElementById("section-description").textContent = dispute.description;
            document.getElementById("help-text").textContent = dispute.help_text;

            // Populate services list dynamically
            const serviceList = document.getElementById("service-list");
            serviceList.innerHTML = ""; // Clear previous content
            dispute.services.forEach((service) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
            <div class="page-list-icon"><span class="ti-check"></span></div>
            <div class="page-list-text"><p>${service}</p></div>
          `;
                serviceList.appendChild(listItem);
            });

            document.getElementById("notable-case-title").textContent = dispute.notable_case.title;
            document.getElementById("notable-case-description").textContent = dispute.notable_case.description;

            document.getElementById("cta-title").textContent = dispute.cta.title;
            document.getElementById("cta-description").textContent = dispute.cta.description;
        })
        .catch((error) => console.error("Error fetching data:", error));
});
