class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstname = _firstName
    this.lastname = _lastName
    this.age = _age
    this.location = _location
  }

  showName() {
    return this.firstname + ' ' + this.lastname
  }
}

const lucaNardi = new User('Luca', 'Nardi', 23, 'Torino')
const marioRossi = new User('Mario', 'Rossi', 45, 'Milano')

console.log(lucaNardi)
console.log(lucaNardi.showName())

if (lucaNardi.age < marioRossi.age) {
  console.log(
    lucaNardi.showName() + ' è piu giovane di ' + marioRossi.showName()
  )
} else if (lucaNardi.age > marioRossi.age) {
  console.log(
    lucaNardi.showName() + ' è piu vecchio di ' + marioRossi.showName()
  )
} else {
  console.log(
    lucaNardi.showName() +
      ' e ' +
      marioRossi.showName() +
      ' hanno la stessa età'
  )
}

//////////////////////////////////////////////////////////////////////////////

class Pet {
  constructor(petname, ownername, species, breed) {
    this.petname = petname
    this.ownername = ownername
    this.species = species
    this.breed = breed
  }

  hasSameOwner(otherPet) {
    return this.ownername === otherPet.ownername
  }
}

function createPet() {
  const petname = document.getElementById('petname').value
  const ownername = document.getElementById('ownername').value
  const species = document.getElementById('species').value
  const breed = document.getElementById('breed').value

  const pet = new Pet(petname, ownername, species, breed)
  displayPet(pet)
  return false
}

function displayPet(pet) {
  const petList = document.getElementById('petList')
  const li = document.createElement('li')
  li.textContent = `Pet Name: ${pet.petname}, Owner: ${pet.ownername}, Species: ${pet.species}, Breed: ${pet.breed}`
  petList.appendChild(li)

  if (petList.children.length > 1) {
    const pets = petList.children
    const currentPet = pets[pets.length - 1]
    for (let i = 0; i < pets.length - 1; i++) {
      const otherPet = pets[i]
      if (pet.hasSameOwner(parsePet(otherPet.textContent))) {
        currentPet.textContent += ' (Shares owner with another pet)'
        otherPet.textContent += ' (Shares owner with another pet)'
      }
    }
  }
}

function parsePet(petString) {
  const regex = /Pet Name: (\w+), Owner: (\w+), Species: (\w+), Breed: (\w+)/
  const [, petname, ownername, species, breed] = petString.match(regex)
  return new Pet(petname, ownername, species, breed)
}
