const request = require("supertest");
const app = require("../app");

const userTest = {
  name: "user test",
  email: "user@test.com",
};

var token = "";

const truncate = require("../helpers/truncate");
truncate.biodata();

describe("/biodata/show endpoint", () => {
  // register berhasil
  test("show berhasil", async () => {
    try {
      const res = await request(app).get("/biodata/show");

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("user showed");
    } catch (err) {
        expect(err).toBe("error");
    }
  });
});
describe("/biodata/input endpoint", () => {
  // register berhasil
  test("input gagal", async () => {
    try {
      const res = await request(app).post("/biodata/input").send({
        name: userTest.name,
        email: userTest.email,
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
      const res = await request(app).post("/biodata/input").send({
        name: userTest.name,
        email: userTest.email,
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

describe("/biodata/delete endpoint", () => {
  // register berhasil
  test("delete gagal", async () => {
    try {
      const res = await request(app)
        .delete(`/biodata/delete`)
        .send({
          email: `${userTest.email}123`,
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
      console.log("test_token");
      console.log(token);
      const res = await request(app)
        .delete(`/biodata/delete`)
        .send({
          email: userTest.email,
        });

      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("status");
      expect(res.body).toHaveProperty("message");
      expect(res.body).toHaveProperty("data");
      expect(res.body.status).toBe(true);
      expect(res.body.message).toBe("success!");
      expect(res.body.data).toStrictEqual({
        name: userTest.name,
        email: userTest.email,
      });
    } catch (err) {
      expect(err).toBe("error"); // test gagal karena err != 'error'
    }
  });
});
