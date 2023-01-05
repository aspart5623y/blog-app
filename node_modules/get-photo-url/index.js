const getPhotoUrl = selector => {
  const photoInput = document.querySelector(selector)

  const photoUrl = new Promise((resolve, reject) => {
    photoInput.addEventListener('change', () => {
      const reader = new FileReader()
      reader.readAsDataURL(photoInput.files[0])

      reader.addEventListener('load', () => {
        resolve(reader.result)
      })
    })
  })

  return Promise.resolve(photoUrl)
}

export default getPhotoUrl
