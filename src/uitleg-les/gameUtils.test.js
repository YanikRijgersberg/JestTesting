import{ addScores, getRank } from "./gameUtils.js"
test('geef Pro met score 55',()=>{
    const result = getRank(55);
    expect(result).toBe('Pro')
})

test('20+30=50',()=>{
    const result = addScores(20,30);
    expect(result).toBe(50)
})