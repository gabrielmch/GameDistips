class rodapeNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer class="rodape">
      <nav class="rodape__nav">
        <div class="rodape__nav--sociais container">
          <a href="#">
            <img src="/img/svg/sociais/facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="/img/svg/sociais/twitter.svg" alt="" />
          </a>
          <a href="#">
            <img src="/img/svg/sociais/instagram.svg" alt="" />
          </a>
        </div>
        <div class="rodape__links cotainer">
          <a href="#">Suporte</a>
          <a href="#">Sobre</a>
          <a href="#">Idioma</a>
        </div>
      </nav>
    </footer>
    `;
  }
}
customElements.define("rodape-nav", rodapeNav);
