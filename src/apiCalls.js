export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(response => {
        return response.urls
      })
      .catch(error => console.log(error))
}

export const postUrl = (id, longURL, title) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "id": id,
      "long_url": longURL,
      "title": title
    })
  })
  .then(response => response.json())
  .then(response => console.log('success', response))
  .catch(error => console.log(error))
}

export const deleteUrl = (id) => {
  let url = `http://localhost:3001/api/v1/urls/${id}`
  return ( fetch(url, {
    method: 'DELETE',
  })
  .then(response => {
    if(response.ok){
      console.log('success!')
    }
  }
  )
  .catch(error => {
    console.log(error)
  })
)
}
