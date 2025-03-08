document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("/content/pages/cases.json"); // Check if path is correct
        const data = await response.json();
        const caseList = document.getElementById("case-study-list");

        caseList.innerHTML = data.cases
            .map(
                (c) => `
        <div class="col-lg-4 col-md-6 mb-30">
          <div class="item">
            <div class="img">
              <img src="${c.image}" alt="${c.title}" />
            </div>
            <div class="con">
              <div class="title">${c.title.replace(/\s&\s/, " <br />")}</div>
              <div class="arrow">
                <a href="case-study-page.html?id=${c.id}">
                  <span class="fas fa-arrow-right"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      `
            )
            .join("");
    } catch (error) {
        console.error("Error fetching case studies:", error);
    }
});