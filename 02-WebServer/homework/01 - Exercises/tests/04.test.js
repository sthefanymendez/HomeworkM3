const server = require("../server");
const request = require("supertest");
const fs = require("fs");

describe("04 | Ejercicios", () => {
  it("GET /:image, debe responder con un error o con una imagen", async () => {
    const dogs = [
      "arcoiris",
      "asiatico",
      "badboy",
      "code",
      "debil",
      "musculoso",
      "pancito",
      "resaca",
    ];
    const dog = dogs[Math.floor(Math.random() * dogs.length)];
    const response = await request(server).get(`/${dog}`);
    if (response.statusCode === 200) {
      console.log(response.type);
      expect(response.type).toBe("image/jpeg");
      expect(response.body).toEqual(
        fs.readFileSync(`./utils/images/${dog}.jpg`)
      );
    } else {
      console.log(response.statusCode);
      expect(response.statusCode).toBe(404);
      expect(response.text).toBe("image not found");
    }
    const response2 = await request(server).get("/random");
    expect(response2.statusCode).toBe(404);
    expect(response2.text).toBe("image not found");
  });
});
