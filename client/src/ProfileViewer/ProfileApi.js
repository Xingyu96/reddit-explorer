export function getList(username) {
  console.log('getting username: ' + username)
  return fetch('http://localhost:3001/test', {
    method: 'POST',
    body: JSON.stringify({
      username: username
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(data => data.json())
    .then(dataJson => {
      if (dataJson.error) {
        return dataJson
      }
      return dataJson.user
    })
    .catch((e) => {
      console.log(e)
    })
}