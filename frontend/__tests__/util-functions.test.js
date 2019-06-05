import { retrieveSecret } from '../src/util/secretRetriever.js';
const fetch = require("node-fetch");

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Retrieve secret', () => {
  it('grabs secret from backend', () => {
    let input = "test_secret";
    retrieveSecret(input)
      .then(data =>
        expect(data.secret).toBe('f4b2b6a8c7ce4a184b4392629d25b3fe')
      )
  });
});

