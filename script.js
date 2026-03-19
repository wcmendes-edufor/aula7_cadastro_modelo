const form = document.getElementById("formCadastro")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  const nomeInput = document.getElementById("nome")
  const emailInput = document.getElementById("email")

  const nome = nomeInput.value.trim()
  const email = emailInput.value.trim()

  // limpa erros anteriores
  nomeInput.classList.remove("erro")
  emailInput.classList.remove("erro")

  let valido = true

  if (nome.length < 3) {
    nomeInput.classList.add("erro")
    valido = false
  }

  if (!email.includes("@") || email.length < 5) {
    emailInput.classList.add("erro")
    valido = false
  }

  if (!valido) {
    mensagem.textContent = "Corrija os campos destacados."
    mensagem.style.color = "red"
    return
  }

  mensagem.textContent = "Enviando..."
  mensagem.style.color = "black"

let idade = 42

 const dados = {
  nome,
  email,
  idade
}

console.log(dados)
console.log(JSON.stringify(dados))

  fetch("https://servlet-data-hub.replit.app/api/cadastro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome,
      email
    })
  })
  .then(res => res.json())
  .then(data => {
    mensagem.textContent = "Cadastro realizado com sucesso!"
    mensagem.style.color = "green"
    console.log(data)
  })
  .catch(() => {
    mensagem.textContent = "Erro ao enviar"
    mensagem.style.color = "red"
  })
})
