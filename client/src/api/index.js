export const postUser = (formData, token) => {
  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: formData,
    headers: { Token: token }
  }).then(response => response.json())
}

export const getToken = () =>
  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token').then(
    response => response.json()
  )

export const getPositions = () =>
  fetch(
    'https://frontend-test-assignment-api.abz.agency/api/v1/positions'
  ).then(data => data.json())

export const getUsers = page =>
  fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
  ).then(response => response.json())
