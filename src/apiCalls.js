export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(response => {
        return response.urls
      })
      .catch(error => console.log(error))
}

export const postUrl = (longURL, title) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "long_url": longURL,
      "title": title
    })
  })
  .then(response => response.json())
  .then(response => console.log('success', response))
  .catch(error => console.log(error))
}
