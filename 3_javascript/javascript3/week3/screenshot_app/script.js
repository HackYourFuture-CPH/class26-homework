domListener();
function domListener() {
  document.addEventListener("DOMContentLoaded", domLoader);
}

function domLoader() {
  const inputURL = document.getElementById("inputURL");
  const takeURLButton = document.getElementById("takeURLButton");
  const showScreenshot = document.getElementById("showURLButton");
  const selectScreenshot = document.getElementById("selectScreenshot");
  const deleteSelectedScreenshotButton = document.getElementById(
    "deleteSelectedScreenshotButton"
  );

  inputURL.addEventListener("input", () => (URL = inputURL.value));
  takeURLButton.addEventListener("click", () => screenshotGenerator(URL));
  showScreenshot.addEventListener("click", loadScreenshots);
  deleteSelectedScreenshotButton.addEventListener(
    "click",
    deleteSelectedScreenshot
  );

  function screenshotGenerator(URL) {
    return new Promise((resolve) => {
      const loadingIndicator = document.getElementById("loadingIndicator");
      loadingIndicator.style.display = "block";
      const screenshotURL = URL;
      const urlAPI = `https://website-screenshot6.p.rapidapi.com/screenshot?url=https%3A%2F%2F${screenshotURL}&width=1920&height=1080&fullscreen=true`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "295c037658msh02afd26749f76c3p1c8a77jsne1bb5ae68f4d",
          "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
        },
      };
      fetch(urlAPI, options)
        .then((data) => data.json())
        .then((screenshot) => {
          if (screenshot.screenshotUrl) {
            saveScreenshot(screenshot);
          } else {
            alert("The URL is not valid.");
          }
        })
        .catch((error) => console.error("Error", error))
        .finally(() => {
            loadingIndicator.style.display = "none";
          });
    });
  }

  function saveScreenshot(screenshot) {
    fetch(
      "https://crudcrud.com/api/5f0deea212a747f181a722a6a4806a42/screenshot",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(screenshot),
      }
    )
      .then(() => {
        loadScreenshots();
      })
      .catch((error) => console.error("Error", error));
  }

  function loadScreenshots() {
    fetchScreenshots()
      .then((data) => {
        const screenshotList = document.getElementById("screenshotList");
        screenshotList.innerHTML = "";
        selectScreenshot.innerHTML = "";

        data.forEach((screenshot, index) => {
          const linkElement = createScreenshotLink(screenshot, index);
          const listItem = createScreenshotListItem(linkElement);
          screenshotList.appendChild(listItem);

          const optionElement = createScreenshotOption(index);
          selectScreenshot.appendChild(optionElement);
        });
      })
      .catch((error) => console.error("Error", error));
  }

  async function fetchScreenshots() {
    return fetch(
      "https://crudcrud.com/api/5f0deea212a747f181a722a6a4806a42/screenshot",
      {
        method: "GET",
      }
    ).then((response) => response.json());
  }

  function createScreenshotLink(screenshot, index) {
    const linkElement = document.createElement("a");
    linkElement.href = screenshot.screenshotUrl;
    linkElement.textContent = `Screenshot ${index + 1}`;
    linkElement.target = "_blank";
    return linkElement;
  }

  function createScreenshotListItem(linkElement) {
    const listItem = document.createElement("li");
    listItem.appendChild(linkElement);
    return listItem;
  }

  function createScreenshotOption(index) {
    const optionElement = document.createElement("option");
    optionElement.value = index + 1;
    optionElement.text = `Screenshot ${index + 1}`;
    return optionElement;
  }

  function deleteSelectedScreenshot() {
    const selectedScreenshotNumber = parseInt(selectScreenshot.value);

    if (!isNaN(selectedScreenshotNumber)) {
      const selectedIndex = selectedScreenshotNumber - 1;

      fetchScreenshots()
        .then((data) => {
          if (data[selectedIndex] !== undefined) {
            const selectedScreenshot = data[selectedIndex];
            const screenshotId = selectedScreenshot._id;
            deleteScreenshotById(screenshotId);
          } else {
            console.error("Invalid option");
          }
        })
        .catch((error) => console.error("Error", error));
    }
  }

  function deleteScreenshotById(id) {
    fetch(
      `https://crudcrud.com/api/5f0deea212a747f181a722a6a4806a42/screenshot/${id}`,
      { method: "DELETE" }
    )
      .then(() => loadScreenshots())
      .catch((error) => console.error("Error", error));
  }
}
