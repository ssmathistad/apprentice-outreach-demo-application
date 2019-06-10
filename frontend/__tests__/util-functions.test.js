import 'babel-polyfill';
import { retrieveSecret } from '../src/util/secretRetriever.js';
const fetch = require("node-fetch");

// describe('Retrieve secret', () => {
//   it('grabs secret from backend', () => {
//     let input = "test_secret";
//     return retrieveSecret(input)
//       .then(data =>
//         expect(data.secret).toBe('f4b2b6a8c7ce4a184b4392629d25b3fe')
//       )
//   });
// });
describe('Retrieve secret', () => {
  it('grabs secret from backend', async () => {
    let input = "test_secret";
    const data = await retrieveSecret(input);
    expect(data.secret).toBe('f4b2b6a8c7ce4a184b4392629d25b3fe');
  });
});
