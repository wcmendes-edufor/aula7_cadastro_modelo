const form = document.getElementById("formCadastro")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", function(e) {
  e.preventDefault()

  const nomeInput = document.getElementById("nome")
  const emailInput = document.getElementById("email")

  const nome = nomeInput.value.trim()
  const email = emailInput.value.trim()

  nomeInput.classList.remove("erro")
  emailInput.classList.remove("erro")

  let valido = true

  if (nome.length < 3) {
    nomeInput.classList.add("erro")
    valido = false
  }

  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!regexEmail.test(email)) {
    emailInput.classList.add("erro")
    valido = false
  }

  if (!valido) {
    mensagem.textContent = "Corrija os campos destacados."
    mensagem.style.color = "red"
    return
  }

  const dados = {
    nome,
    email
  }

  console.log("Enviando para o backend:", dados)

  mensagem.textContent = "Enviando..."
  mensagem.style.color = "black"

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dados)
  })
    .then(res => res.json())
    .then(data => {
      console.log("Resposta do backend:", data)
      mensagem.textContent = "Cadastro realizado com sucesso!"
      mensagem.style.color = "green"
    })
    .catch(() => {
      mensagem.textContent = "Erro ao enviar"
      mensagem.style.color = "red"
    })
})
