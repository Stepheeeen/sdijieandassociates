// Function to get query parameter from URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fetch and load case study data
async function loadCaseStudy() {
    try {
        // Fetch case study data from the JSON file
        const response = await fetch("../../content/pages/caseStudy.json"); // Adjust path if necessary
        if (!response.ok) {
            throw new Error("Failed to fetch case studies");
        }

        const caseStudy = await response.json(); // Convert response to JSON
        const caseStudies = caseStudy.cases; // Get the case studies array
        console.log(caseStudies)

        // Extract ID from URL and ensure it's lowercase
        const caseId = getQueryParam("id")?.toLowerCase();
        console.log("Requested Case ID:", caseId);

        // Get the corresponding data from the JSON object
        if (!caseStudies[caseId]) {
            throw new Error("Case study not found");
        }
        const caseData = caseStudies[caseId];
        console.log("Loaded Case Data:", caseData);

        // Populate the page with case study details
        document.getElementById("case-study-topic").textContent = caseData.case_study || "Case Study";
        document.getElementById("section-title").textContent = caseData.title || "Case Title";
        document.getElementById("section-description").textContent = caseData.description || "Description not available.";
        document.getElementById("help-text").textContent = caseData.help_text || "";

        // Populate services list dynamically
        const serviceList = document.getElementById("service-list");
        serviceList.innerHTML = ""; // Clear previous content
        if (Array.isArray(caseData.services)) {
            caseData.services.forEach((service) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <div class="page-list-icon"><span class="ti-check"></span></div>
                    <div class="page-list-text"><p>${service}</p></div>
                `;
                serviceList.appendChild(listItem);
            });
        }

        // Populate notable case details
        document.getElementById("notable-case-title").textContent = caseData.notable_case?.title || "No notable cases";
        document.getElementById("notable-case-description").textContent = caseData.notable_case?.description || "";

        // Populate call-to-action section
        document.getElementById("cta-title").textContent = caseData.cta?.title || "";
        document.getElementById("cta-description").textContent = caseData.cta?.description || "";

    } catch (error) {
        console.error("Error loading case study:", error);
        document.getElementById("section-title").textContent = "Error";
        document.getElementById("section-description").textContent = "Failed to load case studies. Please try again later.";
    }
}

// Load case study on page load
window.onload = loadCaseStudy;