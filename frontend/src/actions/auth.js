const email = 'testemail@test.com';
const appName = 'TestAppName';


export const addToken = (token) => {
  return {
    type: 'ADD_TOKEN',
    token,
  }
}

export const tokenError = (error) => {
  return {
    type: 'TOKEN_ERROR',
    error,
  }
}

export const generateToken = () => {
  return dispatch => {
    // add check to store token in local storage
    fetch('/api/v1/auth', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email: email,
        appName: appName
      })
    })
      .then(res => res.json())
      .then(token => dispatch(addToken(token)))
      .catch(error => console.log(error))
  }
}
