import request from 'supertest';
import database from '../../database/database';
import { app } from '../../index';

describe("Users", () => {
    beforeAll(async() => {
      const connection = await database.connect(); 
      await connection.runMigrations();
    })

    // YES POST
    it("should be able to create a new user", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            firstName: "Luiz",
            lastName: "lima",
            password: "agablaga"
        }) 
        expect(response.status).toBe(201);
    })

    // NOT POST
    it("Should not be able create a user with email", async () => {
        const response = await request(app).post("/users").send({
            email: "user@example.com",
            firstName: "Luiz",
            lastName: "lima",
            password: "agablaga"
        }) 
        expect(response.status).toBe(400);
    })

    // YES DELETE
    it("Deletar esse email e usuário", async () => {
        const response = await request(app).delete("/users/:id").send({
            email: "user@example.com",
            firstName: "Luiz",
            lastName: "lima",
            password: "agablaga"
        }) 
        expect(response.status).toBe(200);
    })

    // NOT DELETE
    it("Erro ao deletar esse email e usuário", async () => {
        const response = await request(app).delete("/users/:id").send({
            email: "user@example.com",
            firstName: "Luiz",
            lastName: "lima",
            password: "agablaga"
        }) 
        expect(response.status).toBe(404);
    })

    // YES PUT 
    it("Esse tem que substituir o usuário", async () => {
        const response = await (await request(app).put("/users/:id")).send({
            email: "user@example.com",
            firstName: "Ana",
            lastName: "lima",
            password: "agablagssaa"
        })
        expect(response.status).toBe(201);
    })

    // NOT PUT 
    it("Esse tem quedar erro ao substituir o usuário", async () => {
        const response = await (await request(app).put("/users/:id")).send({
            email: "user@example.com",
            firstName: "Ana",
            lastName: "lima",
            password: "agablagssaa"
        })
        expect(response.status).toBe(401);
    })    

    // YES PATCH
    it("Esse tem resultar patch ao usuário", async () => {
        const response = await (await request(app).patch("/users/:id")).send({
            email: "user@example.com",
            firstName: "Roberto",
            lastName: "Soares",
            password: "agssaa"
        })
        expect(response.status).toBe(201);
    })

    // NOT PATCH
    it("Esse tem resultar erro no patch ao usuário", async () => {
        const response = await (await request(app).patch("/users/:id")).send({
            email: "user@example.com",
            firstName: "Roberto",
            lastName: "Soares",
            password: "agssaa"
        })
        expect(response.status).toBe(404);
    })   
})