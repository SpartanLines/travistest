var assert=require('assert')

function isValidPassword(password){
    if(password.length<=5 && password.length <=15)return true
    else return false
}
describe("TDD test suite",function(){
    describe("Password Verification",function(){
        it("Tests Password length within range",function(){
            assert.equal(isValidPassword("abc123"),true)
            assert.equal(isValidPassword(""),false)
        })
    })
})