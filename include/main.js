function copyTag() {
    const tooltip = document.getElementById('tooltiptext');

    //To get rid of the promise not returned error
    const copyTag = async () => {
        try{
            await navigator.clipboard.writeText('jakeobapple');
        } catch (err) {
            console.error('failed to copy', err);
        }
    }

    tooltip.style.visibility = 'visible';

    setTimeout(() => {
        tooltip.style.visibility = 'hidden';
    }, 2000);
}

function mobileDropdown() {
    const menu = document.getElementById("dropButton");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

fetch('https://rory.cat')
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(data, 'text/html');
        let imgElement = doc.querySelector('img');
        document.getElementById('roryCat').appendChild(imgElement);
    })
    .catch(error => console.error(error));