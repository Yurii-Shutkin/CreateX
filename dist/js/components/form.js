document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form')
  const items = document.querySelectorAll('.form__input-item')

  const validators = {
    text: el => el.value.trim().length >= 2,
    tel: el => /^\+?[0-9\s\-()]{9,}$/.test(el.value.trim()),
    email: el => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()),
    textarea: el => el.value.trim().length >= 10,
    checkbox: el => el.checked
  }

  function hideAll(item) {
    item.querySelectorAll(
      '.form__input--success-img, .form__input--danger-img, .form__message--success, .form__message--danger'
    ).forEach(el => (el.style.display = 'none'))
  }

  function showSuccess(item) {
    hideAll(item)
    item.querySelector('.form__input--success-img').style.display = 'block'
    item.querySelector('.form__message--success').style.display = 'block'
  }

  function showError(item) {
    hideAll(item)
    item.querySelector('.form__input--danger-img').style.display = 'block'
    item.querySelector('.form__message--danger').style.display = 'block'
  }

  items.forEach(item => {
    hideAll(item)

    const field = item.querySelector('input, textarea')
    if (!field) return

    const type =
      field.type === 'checkbox'
        ? 'checkbox'
        : field.tagName === 'TEXTAREA'
        ? 'textarea'
        : field.type

    field.addEventListener('blur', () => {
      validators[type](field) ? showSuccess(item) : showError(item)
    })

    if (type === 'checkbox') {
      field.addEventListener('change', () => {
        validators[type](field) ? showSuccess(item) : showError(item)
      })
    }
  })

  form.addEventListener('submit', e => {
    let valid = true

    items.forEach(item => {
      const field = item.querySelector('input, textarea')
      if (!field) return

      const type =
        field.type === 'checkbox'
          ? 'checkbox'
          : field.tagName === 'TEXTAREA'
          ? 'textarea'
          : field.type

      const isValid = validators[type](field)
      isValid ? showSuccess(item) : showError(item)
      if (!isValid) valid = false
    })

    if (!valid) e.preventDefault()
  })
})
