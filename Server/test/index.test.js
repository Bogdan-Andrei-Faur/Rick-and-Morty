const server = require('../src/app');
const session = require('supertest');
const agent = session(server);

describe("Test de Rutas", () => {
    describe("GET character/:id", () => {
        it ("Responde con status: 200", async () => {
            await agent.get("/character/1").expect(200);
        })
        it ('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = await agent.get("/character/2");
            const props = ["id", "name", "species", "gender", "status", "origin", "image"];
            
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop);
            })
        })
        it ("Si hay un error responde con status: 500", async () => {
            await agent.get("/character/none").expect(500);
        })
    })
    describe("GET /user/login", () => {
        it ("GET with the correct data, should return the access true", async () => {
            const response = await agent.get("/user/login?email=ejemplo@gmail.com&password=asd123");
            const access = {access: true};
            expect(response.body).toEqual(access);
        })
        it ("GET with incorrect data, should return the access false", async () => {
            const response = await agent.get("/user/login?email=falso@gmail.com&password=falso");
            const access = {access: false};
            expect(response.body).toEqual(access);
        })
    })
    describe("Favorites", () => {
        const character1 = {id: 1, name: "Rick Sanchez"};
        const character2 = {id: 2, name: "Morty Smith"};

        describe("POST /favorites", () => {
            it("POST should add the character to the favs", async () => {
                const response = await agent.post("/favorites").send(character1, character2);
                expect(response.body).toContainEqual(character1);
            })
        })
        describe("DELETE /favorites", () => {
            it ("Should return the previous characters when sending wrong data", async () => {
                const response = await agent.delete("/favorites/68");
                expect(response.body).toContainEqual(character1);
            })
            it ("Should delete the character when sending correct information", async () => {
                const response = await agent.delete("/favorites/2");
                expect(response.body).not.toContainEqual(character2)
            })
        })
    })
})