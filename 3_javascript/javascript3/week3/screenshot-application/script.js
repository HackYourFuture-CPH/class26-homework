import env from "./env.json" assert { type: "json" };

const newShotBtn = document.getElementById("newShot");
const inputTag = document.getElementById("input");
const shotContainer = document.getElementById("shot-container");
let currentImg;
const newSaveBtn = document.createElement("button");
const newImg = document.createElement("img");
const savedImagContainer = document.getElementById("savedShot");
const divTag = document.createElement("div");
const wrapperDiv = document.createElement("div");

const url = `https://${env.baseURL}`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": env.apiToken,
    "X-RapidAPI-Host": env.baseURL,
  },
};

const clearPreviousScreenshot = () => {
  if (currentImg) {
    shotContainer.removeChild(currentImg);
  }
};

const getDataFromRapid = async () => {
  try {
    let urlParam = new URLSearchParams({
      url: inputTag.value.toString(),
      width: "1920",
      height: "1080",
    });
    const apiUrl = url + urlParam;
    const response = await fetch(apiUrl, options);
    const result = await response.text();
    const resultObject = JSON.parse(result);
    clearPreviousScreenshot();
    newImg.src = resultObject.screenshotUrl;
    newSaveBtn.innerText = "Save";
    savedImagContainer.appendChild(divTag);
    shotContainer.appendChild(newImg);
    shotContainer.appendChild(newSaveBtn);
    currentImg = newImg;
    // inputTag.value = "";
  } catch (error) {
    console.error(error);
    shotContainer.innerHTML = "<p>Error: Invalid URL or API Request</p>";
  }
};
const getNewShot = async (event) => {
  event.preventDefault();
  await getDataFromRapid();
};
newShotBtn.addEventListener("click", getNewShot);

//delete the shots
const deleteImg = async (id) => {
  try {
    const response = await fetch(`${crudUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

//save the shots
const crudUrl = `https://${env.crudUrl}`;
let shotsInDatabase = [];

const postShotInDatabase = async () => {
  try {
    const response = await fetch(crudUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: newImg.src, webUrl: inputTag.value }),
    });
    const result = await response.json();
    shotsInDatabase.push(result);
    const imgTag = document.createElement("img");
    const deleteBtn = document.createElement("button");
    const pTag = document.createElement("p");
    imgTag.src = result.url;
    deleteBtn.innerText = "x";
    pTag.innerText = inputTag.value;
    savedImagContainer.appendChild(wrapperDiv);
    wrapperDiv.appendChild(imgTag);
    wrapperDiv.appendChild(deleteBtn);
    wrapperDiv.appendChild(pTag);
    return result;
  } catch (error) {
    console.error(error);
  }
};
newSaveBtn.addEventListener("click", postShotInDatabase);

//get the shots from database
const getShotsFromDatabase = async () => {
  try {
    const response = await fetch(crudUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    shotsInDatabase = result;
    result.forEach((item) => {
      console.log(item.url);
      console.log(inputTag.value);
      const imgTag = document.createElement("img");
      const pTag = document.createElement("p");
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "x";
      imgTag.src = item.url;
      pTag.innerText = item.webUrl;
      savedImagContainer.appendChild(wrapperDiv);
      wrapperDiv.appendChild(imgTag);
      wrapperDiv.appendChild(deleteBtn);
      wrapperDiv.appendChild(pTag);
      deleteBtn.addEventListener("click", async function () {
        await deleteImg(item._id);
        imgTag.remove();
        pTag.remove();
        deleteBtn.remove();
      });
    });
  } catch (error) {
    console.error(error);
  }
};

getShotsFromDatabase();
