// Function to get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fetch and load case study data
async function loadCaseStudy() {
    try {
        // Fetch case study data from the JSON file
        const response = await fetch("../../content/pages/caseStudy.json"); // Ensure this path is correct
        if (!response.ok) {
            throw new Error("Failed to fetch case studies");
        }

        const caseStudies = await response.json(); // Convert response to JSON

        // Extract ID from URL and ensure it's lowercase
        const caseId = getQueryParam("id")?.toLowerCase();
        console.log("Requested Case ID:", caseId);

        // Get the corresponding data from the JSON object
        const caseData = caseStudies[caseId];
        console.log("Loaded Case Data:", caseData);

        if (caseData) {
            document.getElementById("case-study-topic").textContent = caseData.case_study
            document.getElementById("section-title").textContent = caseData.title;
            document.getElementById("section-description").textContent = caseData.description;
            document.getElementById("help-text").textContent = caseData.help_text;

            // Populate services list dynamically
            const serviceList = document.getElementById("service-list");
            serviceList.innerHTML = ""; // Clear previous content
            caseData.services.forEach((service) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
            <div class="page-list-icon"><span class="ti-check"></span></div>
            <div class="page-list-text"><p>${service}</p></div>
          `;
                serviceList.appendChild(listItem);
            });

            document.getElementById("notable-case-title").textContent = caseData.notable_case.title;
            document.getElementById("notable-case-description").textContent = caseData.notable_case.description;
            document.getElementById("cta-title").textContent = caseData.cta.title;
            document.getElementById("cta-description").textContent = caseData.cta.description;
        } else {
            // Case not found
            document.getElementById("section-title").textContent = "Case Study Not Found";
            document.getElementById("section-description").textContent = "The requested case study does not exist.";
        }
    } catch (error) {
        console.error("Error loading case study:", error);
        document.getElementById("section-title").textContent = "Error";
        document.getElementById("section-description").textContent = "Failed to load case studies. Please try again later.";
    }
}

// Load case study on page load
window.onload = loadCaseStudy;