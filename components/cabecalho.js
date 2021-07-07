class cabecalhoNav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <nav class="cabecalho container">
          <a href="index.html" class="cabecalho__logo">GameDistips</a>
          <div class="cabecalho__busca">
            <input type="text" placeholder="Buscar por Jogos" />
            <button class="cabecalho__busca--botao" type="submit"></button>
          </div>
          <div class="cabecalho__links">
            <a href="promocoes.html">Promoções</a>
            <a href="#">Lista de Desejos</a>
            <a href="plataformas.html">Plataformas</a>
            <a href="login.html">Entrar</a>
          </div>
      </nav>
    </header>
    `;
  }
}
customElements.define("cabecalho-nav", cabecalhoNav);
