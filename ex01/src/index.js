var myPet = {
    species: "Siam",
    name: "Adolf",
    legs: 3,
    friends: ["Rupert", "Hans"]
};
function myFunction(myPet) {
    return myPet;
}
myFunction(myPet);
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };