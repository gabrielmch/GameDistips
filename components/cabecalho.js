class cabecalhoNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="cabecalho">
      <nav>
        <div class="cabecalho__nav container">
          <a href="index.html" class="cabecalho__nav--font">GameDistips</a>
          <div class="cabecalho__busca">
            <input type="text" placeholder="Buscar por Jogos" />
            <button class="cabecalho__busca--botao" type="submit"></button>
          </div>
          <a href="login.html" class="cabecalho__nav--font">
            Entrar
            <img
              src="/img/svg/acesso-icon.svg"
              alt=""
              class="cabecalho__nav--login"
            />
          </a>
        </div>
        <div class="cabecalho__links">
          <a href="promocoes.html">Promoções</a>
          <a href="#">Lista de Desejos</a>
          <a href="plataformas.html">Plataformas</a>
        </div>
      </nav>
    </header>
    `;
  }
}
customElements.define("cabecalho-nav", cabecalhoNav);
