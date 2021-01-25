const fetch = require('node-fetch')

async function fetchUserInfo(cookies) {
  const token = cookies.userToken
  
  if (!token) return null;
  
  const response = await fetch(`https://discord.com/api/users/@me`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
  const json = await response.json()
  
  return json
  
}

module.exports = { fetchUserInfo }
