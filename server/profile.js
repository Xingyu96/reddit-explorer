const fetch = require('node-fetch');

getProfile = (username) => {
  return fetch('https://www.reddit.com/u/' + username + '.json')
    .then(data => data.json())
    .then(dataJson => {
      console.log(dataJson)
      return dataJson
    })
    .catch((e) => {
      throw e
    })
}

getUps = (userData) => {
  let children = userData.children
  let totalUps = 0
  children.forEach((post) => {
    totalUps += post.data.ups
  })
  return totalUps
}

extractUserInfo = (userData) => {
  const resultObj = {
    posts: 0,
    comment_karma: 0
  }
  if (userData == null) {
    return {error: "This username is invalid"}
  } else {
    resultObj.posts = userData.dist
    resultObj.comment_karma = getUps(userData)
    return resultObj
  }
}

exports.getProfile = getProfile
exports.getUps = getUps
exports.extractUserInfo = extractUserInfo