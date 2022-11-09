function copyTag() {
    const changeText = document.getElementById('copy');

    navigator.clipboard.writeText('Jakeob#6888');
    changeText.innerHTML = 'Copied!'

    setTimeout(() => {
        changeText.innerHTML = '<i style="color: #5561f5" class="fa-brands fa-discord fa-lg"></i> Jakeob#6888';
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