class Header extends HTMLElement {
    constructor() {
        super();
    }
}
customElements.define('header-comp', Header);

const headerCreate = document.createElement('template');
headerCreate.innerHTML = `
<header>
    <nav id="navbar" class="navbar">
        <div class="navbar-wrapper">
        <nav class="navbar-contents">
            <div class="logo">
                <a href="https://jakeob.codes/">jakeob.codes</a>

            </div>

            <button onclick="mobileDropdown()" class="dropdown-container">
               <i style="color: white;" class="fa-solid fa-bars fa-2xl"></i>
            </button>
            <div id="dropButton" class="tabs dropdown-content">
                <ul>
                    <li><a href="https://jakeob.codes/projects"> Projects</a></li>
                    <li><a href="https://blog.jakeob.codes/"> Blog</a></li>
                    <li><a href="https://jakeob.codes/about/jakeob"> About Me</a></li>
                </ul>

            </div>

        </nav>
        
        </div>


    </nav>
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
                    <dl>
                        <dt>Socials</dt>
                        <dd> <a href="https://github.com/howtoapple"><i class="fa-brands fa-github fa-xl"></i> @howtoapple</a> </dd>
                        <dd> <a onclick="copyTag();" id="copy" class="tooltip" style="padding: 7px;"><i style="color: #5561f5" class="fa-brands fa-discord fa-lg"></i>
                            <span id="tooltiptext"> Copied </span> 
                            JakeobApple 
                             </a>
                        </dd>
                        <dd> <a href="https://soundcloud.com/jakeobapple"><i style="color:#f65c0e" class="fa-brands fa-soundcloud fa-xl"></i> Jakeob</a> </dd>
<!--                        <dd> <a href="https://mastodon.social/"><i class="fa-brands fa-xl fa-mastodon"></i> Jakeob@jakeob.fur</a> </dd>-->
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>Connect</dt>
                        <dd> <a href="mailto: jakeob@jakeob.codes? subject=subject text">jacob@jakeob.codes</a> </dd>
                        <dd> <a> href="" </a></dd>
                    </dl>
                </div>
                <div>
                    <dl>
                        <dt>About</dt>
                        <dd> <a href="https://jakeob.codes/about/sitemap">Sitemap</a></dd>
                        <dd> <a href="https://jakeob.codes/about/privacy">Privacy Policy</a></dd>
                        <dd></dd>
                    </dl>
                </div>
            </div>
            
            
            <p style="font-size: 14px; text-align: center; margin: -0.5em 0;">Just a lonely footer...</p>
            <p style="font-family: Inter, serif; font-size: 12px; text-align: center; ">Copyright © Jakeob 2021 - 2023</p>
        </div>
    </footer>
 
`;

document.body.appendChild(templateCreate.content);
