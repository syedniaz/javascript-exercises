const findTheOldest = function(people) {
    let oldestPerson = people[0];
    people.forEach(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        person.age = person.yearOfDeath - person.yearOfBirth;
        if (person.age > oldestPerson.age) {
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
