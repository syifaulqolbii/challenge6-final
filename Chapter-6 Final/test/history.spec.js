const request = require("supertest");
const app = require("../app");

const userTest = {
  lamaBermain: "user test",
  rangking: "user@test.com",
};

const truncate = require("../helpers/truncate");
truncate.history();

describe("/history/show endpoint", () => {
  // register berhasil
  test("show berhasil", async () => {
    try {
      const res = await request(app).get("/history/show");

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("history showed");
    } catch (err) {
        expect(err).toBe("error");
    }
  });
});
describe("/history/input endpoint", () => {
  // register berhasil
  test("input gagal", async () => {
    try {
      const res = await request(app).post("/history/input").send({
        lamaBermain: userTest.lamaBermain,
        rangking: userTest.rangking,
      });

      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe("data already exist");
      expect(res.body.data).toBe(null);
    } catch (err) {
      expect(err).toBe("error"); // test gagal karena err != 'error'
    }
  });

  // register gagal karena email sudah dipakai
  test("input berhasil", async () => {
    try {
      const res = await request(app).post("/history/input").send({
        lamaBermain: userTest.lamaBermain,
        rangking: userTest.rangking,
      });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("input success!");
      expect(res.body.data).toStrictEqual(userTest)
    } catch (err) {
      expect(err).toBe("error"); // test gagal karena err != 'error'
    }
  });
});

describe("/history/delete endpoint", () => {
  // register berhasil
  test("delete gagal", async () => {
    try {
      const res = await request(app)
        .delete(`/history/delete`)
        .send({
          lamaBermain: `${userTest.lamaBermain}123`,
        });

      expect(res.statusCode).toBe(404);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(false);
      expect(res.body.message).toBe("not found");
      expect(res.body.data).toBe(null);
    } catch (err) {
      expect(err).toBe("error"); // test gagal karena err != 'error'
    }
  });

  // register gagal karena email sudah dipakai
  test("delete berhasil", async () => {
    try {
      const res = await request(app)
        .delete(`/history/delete`)
        .send({
          lamaBermain: userTest.lamaBermain,
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("success!");
      expect(res.body.data).toStrictEqual({
        lamaBermain: userTest.lamaBermain,
        rangking: userTest.rangking,
      });
    } catch (err) {
      expect(err).toBe("error"); // test gagal karena err != 'error'
    }
  });
});
