
// let multiplier: number = 2;
// let multiplicand_banned_size: number = 42;
let multiplier = 2;
let multiplicand_banned_size = 42;

export const multiply = (req, res) => {
    const multiplicand = Number(req.params.multiplicand);
    if(isNaN(parseFloat(multiplicand))) return res.status(403).send("multiplicand is not a number")
    if(multiplicand_banned_size == multiplicand) return res.status(403).send(`the multiplicand ${ multiplicand } is not authorize`)

    return res.json(multiplicand * multiplier)
};