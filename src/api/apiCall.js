
export const getApi = (path) => {
  return fetch(`https://localhost:8080/${path}`, {
    method: 'GET'
  })
}

export const postApi = (path, body) => {
  return fetch(`https://localhost:8080/${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

export const patchApi = (path) => {
  return fetch(`https://localhost:8080/${path}`, {
    method: 'PATCH'
  })
}