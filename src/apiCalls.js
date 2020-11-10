export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
      .then(response => {
        return response.urls
      })
      .catch(error => console.log(error))
}
