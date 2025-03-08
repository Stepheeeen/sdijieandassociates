document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("../../admin/content/pages/cases.json");
        const cases = await response.json();
        const caseList = document.getElementById("case-study-list");

        caseList.innerHTML = cases
            .map(
                (c) => `
        <div class="col-lg-4 col-md-6 mb-30">
          <div class="item">
            <div class="img">
              <img src="${c.image}" alt="${c.title}" />
            </div>
            <div class="con">
              <div class="title">${c.title.replace(" & ", " <br />")}</div>
              <div class="arrow">
                <a href="case-study-page.html?id=${c.id}">
                  <span class="fa-light fa-arrow-right"></span>
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