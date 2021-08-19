const st = {};

st.flap = document.querySelector("#flap");
st.acessoBtn__forms = document.querySelector(".acessoBtn__forms");

var loginLabel = document.querySelector("#loginLabel");

var loginForms = document.querySelector(".login__forms");
var cadastroForms = document.querySelector(".cadastro__forms");

st.loginAcessar = document.querySelector("#loginAcessar");
st.loginCadastrar = document.querySelector("#loginCadastrar");

st.flap.addEventListener("transitionend", () => {
  if (st.loginAcessar.checked) {
    st.acessoBtn__forms.style.transform = "rotateY(-15deg)";
    setTimeout(() => (st.acessoBtn__forms.style.transform = ""), 400);
  } else {
    st.acessoBtn__forms.style.transform = "rotateY(15deg)";
    setTimeout(() => (st.acessoBtn__forms.style.transform = ""), 400);
  }
});

st.flap.addEventListener("transitionend", () => {
  if (st.loginAcessar.checked) {
    cadastroForms.classList.add("loginBlock__cadastro");
  } else {
    cadastroForms.classList.remove("loginBlock__cadastro");
  }
  if (st.loginCadastrar.checked) {
    loginForms.classList.add("loginBlock__acesso");
  } else {
    loginForms.classList.remove("loginBlock__acesso");
  }
});

st.clickHandler = (e) => {
  if (e.target.tagName === "LABEL") {
    setTimeout(() => {
      st.flap.children[0].textContent = e.target.textContent;
    }, 250);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  st.flap.children[0].textContent =
    st.loginCadastrar.nextElementSibling.textContent;
});

document.addEventListener("click", (e) => st.clickHandler(e));
