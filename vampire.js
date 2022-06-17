const express = require('express')
const app = express()


class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length


  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVamps = 0
    let currentVamp = this; 
    
    while(currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numberOfVamps++;
    } 
    return numberOfVamps
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if(this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true
    } else {

    } 
    return false

  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

  }
} 




const original = new Vampire("original", 1300)
const Ansel = new Vampire("Ansel", 1400)
const Bart = new Vampire("Bart", 1400)
const noName = new Vampire("noName", 1400)
const Elgort = new Vampire("Elgort", 1700)
const Sarah = new Vampire("Sarah", 1700)
const Andrew = new Vampire("Andre", 2000)



original.addOffspring(Ansel);
original.addOffspring(Bart);
original.addOffspring(noName);

Ansel.addOffspring(Elgort);
Ansel.addOffspring(Sarah); 

Elgort.addOffspring(Andrew);



console.log(original.numberOfOffspring)
console.log(Andrew.numberOfVampiresFromOriginal)
console.log(Bart.numberOfVampiresFromOriginal)
console.log(Bart.isMoreSeniorThan(Andrew));
console.log(Ansel.isMoreSeniorThan(Bart));










module.exports = Vampire;