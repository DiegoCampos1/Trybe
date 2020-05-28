const API_URL = "https://dog.ceo/api/breeds/image/random";
const fetch = require('node-fetch');

let requisicao = async()=>{

  const resp = await fetch(API_URL);
  const json = await resp.json();
  return json;

};

test( "success", async ()=>{

  requisicao = jest.fn().mockResolvedValue("request success");
  expect(requisicao()).resolves.toBe("request success");

});

test( "failed", async ()=>{

  requisicao = jest.fn().mockRejectedValue("request failed");
  expect(requisicao()).rejects.toBe("request failed");

});
