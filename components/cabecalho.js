class cabecalhoAuto extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
    <nav class="cabecalho">
      <div class="cabecalho__busca">
        <input type="text" placeholder="Buscar por Jogos" />
        <button class="cabecalho__busca--botao" type="submit"></button>
      </div>
      <div>
        <a href="home.html" class="cabecalho__links">Home</a>
        <a href="#" class="cabecalho__links">Plataformas</a>
        <a href="promocoes.html" class="cabecalho__links">Promoções</a>
        <a href="login.html" class="cabecalho__links">Login</a>
      </div>
    </nav>
  </header>
    `;
  }
}
customElements.define("cabecalho-auto", cabecalhoAuto);
