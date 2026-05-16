import Validator from "fastest-validator";
const v = new Validator()


export const ValidationUsers = v.compile({
    name:{type:"string" , min:3 , max:8}
})
