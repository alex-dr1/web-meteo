http = function (options) {
  return new Promise((resolve, reject) => {
    const message = {
      status: 0,
      data: {},
    }
    function status(response) {
      message.status = response.status
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }

    function json(response) {
      return response.json()
    }
    fetch(options.url)
      .then(status)
      .then(json)
      .then(function (data) {
        message.data = { ...data }
        resolve(message)
      })
      .catch(function (error) {
        message.data = {}
        reject(message)
      })
  })
}
