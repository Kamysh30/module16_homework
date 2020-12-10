import {getPercents} from "./index.js";

describe("testing getPercents function", () => {
    const errorTest = getPercents('string', 200);
    const cornerTest = getPercents(0,0);
    const unitTest1 = getPercents(20,50);
    const unitTest2 = getPercents(70,200);
    const unitTest3 = getPercents(42,159);
    
    it("test getPercents", () => {
        expect(errorTest).toBe(NaN);
        expect(cornerTest).toBe(0);
        expect(unitTest1).toBe(10);
        expect(unitTest2).toBe(140);
        expect(unitTest3).toBe(66.78);
    })
})


