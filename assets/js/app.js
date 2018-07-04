import search from "./charactersearch"

const form = document.querySelectorAll("[data-form]")

form[0].addEventListener("submit", event => {
  event.preventDefault()

  const formComponent = event.target

  const formData = new FormData(formComponent)

  search(formData.get("Hero"))
})
