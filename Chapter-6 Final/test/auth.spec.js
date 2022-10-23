const request = require("supertest");
const app = require("../app");

const userTest = {
  name: "user test",
  email: "user@test.com",
  password: "password123",
};

var token = "";

const truncate = require("../helpers/truncate");
truncate.user();

describe("/auth/register endpoint", () => {
  // register berhasil
  test("register berhasil", async () => {
    try {
      const res = await request(app).post("/auth/register").send(userTest);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("user created!");
      expect(res.body.data).toStrictEqual({
        name: userTest.name,
        email: userTest.email,
      });
    } catch (err) {
      expect(err).toBe("error");
    }
  });
  // register gagal karena email sudah dipakai
  test("register gagal", async () => {
    try {
      const res = await request(app).post("/auth/register").send(userTest);

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe("email already used!");
      expect(res.body.data).toBe(null);
    } catch (err) {
      expect(err).toBe("error"); // test gagal karena err != 'error'
    }
  });
});
describe("/auth/login endpoint", () => {
  // register berhasil
  test("login gagal", async () => {
    try {
      const res = await request(app)
        .post("/auth/login")
        .send({
          email: userTest.email,
          password: `${userTest.password}4`,
        });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe("credential is not valid!");
      expect(res.body.data).toBe(null);
    } catch (err) {
      expect(err).toBe("error"); // test gagal karena err != 'error'
    }
  });

  // register gagal karena email sudah dipakai
  test("login berhasil", async () => {
    try {
      const res = await request(app).post("/auth/login").send({
        email: userTest.email,
        password: userTest.password,
      });

      token = res.body.data.token;
      // console.log(res.body.data.token);

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.data).toHaveProperty("token");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("login success!");
    } catch (err) {
      expect(err).toBe("error"); // test gagal karena err != 'error'
    }
  });
});

describe('/auth/whoami endpoint', () => {
    // register berhasil
    test('whoami gagal', async () => {
        try {
            const res = await request(app)
                .post('/auth/whoami')
                .send({
                    email: userTest.email,
                    password: `${userTest.password}4`
                });

            expect(res.statusCode).toBe(401);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(false);
            expect(res.body.message).toBe('you\'re not authorized!');
            expect(res.body.data).toBe(null);
        } catch (err) {
            expect(err).toBe('error');  // test gagal karena err != 'error'
        }
    });

    // register gagal karena email sudah dipakai
    test('whoami berhasil', async () => {
        try {
            console.log('test_token');
            console.log(token);
            const res = await request(app)
                .post('/auth/whoami')
                .set('Authorization', token)
                .send({
                    email: userTest.email,
                    password: userTest.password
                });

            expect(res.statusCode).toBe(200);
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('message');
            expect(res.body).toHaveProperty('data');
            expect(res.body.status).toBe(true);
            expect(res.body.message).toBe('success!');
            expect(res.body.data).toStrictEqual({ name: userTest.name, email: userTest.email });
        } catch (err) {
            expect(err).toBe('error');  // test gagal karena err != 'error'
        }
    });
});
