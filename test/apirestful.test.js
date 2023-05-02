import axios from "axios"
import assert from "assert"
import supertest from "supertest" 
import chai from "chai"

const expect = chai.expect

const BASE_URL = "http://localhost:8080";

const supertestClient = supertest(BASE_URL)

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, 
  headers: {
    'Content-type': 'application/json'
  }
})

describe("Pruebas funcionales Productos API", () => {

  //AXIOS
  it ("Obtener la lista de productos", async()=>{
    const resp = await axiosInstance.get("/api/productos");
    const status = resp.status;
    assert.strictEqual(status, 200);
  })

  //supertestClient
  it("Crear un nuevo producto", async () => {
    const productToSave = {
      title: "test",
      brand: "test",
      price: 000,
      stock: 000,
      thumbnail: ""
    } 

    let resp;

    resp = await supertestClient
      .post("/api/productos/save")
      .send(productToSave)
    ;

    assert.strictEqual(resp.status, 200);
  });

  //AGREGAR VERIFICACION CON CHAI
})