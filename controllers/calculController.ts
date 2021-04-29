
let multiplier: number = 2;
let multiplicand_banned_size: number = 42;

module.exports = {
    multiply: function(req,res){
        const multiplicand = Number(req.params.multiplicand);
        if (isNaN(multiplicand)) return res.status(400).send("multiplicand is not a number")
        if (multiplicand_banned_size == multiplicand) return res.status(403).send(`the multiplicand ${multiplicand} is not authorize`)
        
        return res.json(multiplicand * multiplier)
    }
};
