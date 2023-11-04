const rapidApiKey = window.secrets.rapidApiKey;
const crudcrudUuid = window.secrets.crudcrudUuid;

// Function to update the list of screenshots
const updateScreenshotList = async () => {
    try {
        const crudcrudResponse = await fetch(
            `https://crudcrud.com/api/${crudcrudUuid}/screenshots`
        );

        const screenshots = await crudcrudResponse.json();

        // Clearing the list
        screenshotList.innerHTML = '';

        // Displaying the screenshots
        screenshots.forEach((screenshot) => {
            const li = document.createElement('li');
            li.textContent = screenshot.url;
            screenshotList.appendChild(li);
        });
    } catch (error) {
        console.error(error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const screenshotForm = document.getElementById('screenshotForm');
    const inputUrl = document.getElementById('inputurl');
    const screenshotImage = document.getElementById('screenshotImage');
    const screenshotList = document.getElementById('screenshotList');
    const screenshotContainer = document.getElementById('screenshotContainer');
    const deleteScreenshotButton = document.getElementById('deleteScreenshotButton');
    const getScreenshotListButton = document.getElementById('getScreenshotListButton');

    screenshotForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Get the URL from the input field
        const url = inputUrl.value;

        try {
            const screenshotOptions = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': rapidApiKey,
                    'X-RapidAPI-Host': 'website-screenshot6.p.rapidapi.com',
                },
            };

            const response = await fetch(
                `https://website-screenshot6.p.rapidapi.com/screenshot?url=${encodeURIComponent(url)}&width=800&height=600&fullscreen=false`,
                screenshotOptions
            );

            const screenshotResult = await response.text();

            // Clear the existing screenshot container
            screenshotContainer.innerHTML = '';
            const newScreenshotImg = document.createElement('img');
            newScreenshotImg.src = JSON.parse(screenshotResult).screenshotUrl;
            screenshotContainer.appendChild(newScreenshotImg);

            const crudcrudOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: url,
                    screenshot: screenshotResult,
                }),
            };

            const crudcrudResponse = await fetch(
                `https://crudcrud.com/api/${crudcrudUuid}/screenshots`,
                crudcrudOptions
            );

            const crudcrudResult = await crudcrudResponse.json();

            inputUrl.value = '';

            updateScreenshotList();
        } catch (error) {
            console.error(error);
        }
    });

    getScreenshotListButton.addEventListener('click', updateScreenshotList);

    deleteScreenshotButton.addEventListener('click', async () => {
        try {
            const lastScreenshotResponse = await fetch(
                `https://crudcrud.com/api/${crudcrudUuid}/screenshots`
            );

            const lastScreenshot = await lastScreenshotResponse.json();

            if (lastScreenshot.length === 0) {
                console.log('No screenshots to delete');
                return;
            }

            const lastScreenshotId = lastScreenshot[0]._id;

            const response = await fetch(
                `https://crudcrud.com/api/${crudcrudUuid}/screenshots/${lastScreenshotId}`,
                { method: 'DELETE' }
            );

            if (!response.ok) {
                console.error('Failed to delete screenshot:', response.status, response.statusText);
                return;
            }

            console.log('Screenshot deleted successfully');
            updateScreenshotList();
        } catch (error) {
            console.error('Error deleting screenshot:', error);
        }
    });

    updateScreenshotList();
});
