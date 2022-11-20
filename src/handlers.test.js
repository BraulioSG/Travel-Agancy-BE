const handlers = require('./handlers');
const db = require('./database/database');

beforeAll(async () => await db.connect());
afterEach(async () => await db.closeConnection());
afterAll(async () => await db.closeConnection());

test('say hi', async () => {
    expect(handlers.greeting()).toBe('hi');
});
