class Header extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define('header-comp', Header);

const headerCreate = document.createElement('template');
headerCreate.innerHTML = `
<header>
    <div class="navbar">

        <div class="navbar-contents">
            <div class="logo">
                <a href="./index.html">jakeob.codes</a>

            </div>

            <button onclick="mobileDropdown()" class="dropdown-container">
               <i style="color: white;" class="fa-solid fa-bars fa-2xl"></i>
            </button>
            <div id="dropButton" class="tabs dropdown-content">                
                <a href="./projects.html"> Projects</a>
                <a> Blog</a>
                <a href="./about.html"> About Me</a>
            </div>

        </div>

    </div>
</header>
`;

document.body.appendChild(headerCreate.content);


class Footer extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define('footer-comp', Footer);

const templateCreate = document.createElement('template');
templateCreate.innerHTML = `
    <footer>
    <div class="footer">
    

        <div class="footer-content">

            <div>
                <h3> Connect </h3>
                <a href="mailto: jakeob@jakeob.codes? subject=subject text">
                    jacob@jakeob.codes
                </a>

                
            </div>

            <div style="margin-left: auto;">
                <h3> Socials </h3>
                <div>
                    <a href="https://github.com/howtoapple"><i class="fa-brands fa-github fa-xl"></i> @howtoapple</a>
                    <a href="https://twitter.com/JakeobApple"><i style="color: #1daadc;" class="fa-brands fa-twitter fa-xl"></i> @JakeobApple</a>
                </div>
                <br/>
                <div>
                    <a href="https://soundcloud.com/jakeobapple"><i style="color:#f65c0e" class="fa-brands fa-soundcloud fa-xl"></i> SoundCloud</a>                
                    <a onclick="copyTag();" id="copy" style="padding: 7px;"><i style="color: #5561f5" class="fa-brands fa-discord fa-lg"></i> Jakeob#6888 </a>
                </div>
            </div>

        </div>
    </div>
    </footer>
 
`;

document.body.appendChild(templateCreate.content);
