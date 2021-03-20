describe("First", () => {
    it("Deve ser possível somar dois números", () => {
        expect(2 + 2).toBe(4);
    })
    
    it("Esse deve dar erro ao somar dois números outra vez", () => {
        expect(2 + 2).not.toBe(8);
    })    
})
