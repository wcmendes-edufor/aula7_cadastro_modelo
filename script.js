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

  fetch("https://a52b6bac-d065-43ce-9025-0c034941204a-00-3zkg425yb1y3.spock.replit.dev/api/cadastro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome,
      email,
      idade
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
