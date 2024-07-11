async function showImages() {

    const containerDiv = document.getElementById("containerDiv");

    const url = "https://jsonplaceholder.typicode.com/photos";

    const photoArr = await getJson(url);

    let html = `<table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Photo</th>
                        </tr>
                    </thead>
                    <tbody>`;
    for(const photo of photoArr) {
        html += `
                <tr>
                    <td>${photo.title}</td>
                    <td>
                        <img src="${photo.thumbnailUrl}">
                    </td>
                </tr>`
    }

    html += `
            </tbody>
        </table>`;

    containerDiv.innerHTML = html;
}

async function getJson(url) {
    const response  = await fetch(url);
    const json = response.json();
    return json;
}