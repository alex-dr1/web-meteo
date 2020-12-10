const URL_REQUEST =
  'https://narodmon.ru/api/sensorsValues?sensors=5598,14794&uuid=66aeb0aaa005c2bb6e764b95790f7223&api_key=h6ZfZ2S2rQE7Y'

http({ url: URL_REQUEST }).then(render).catch(renderFault)
