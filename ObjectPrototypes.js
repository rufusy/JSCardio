/**
 * Object Types.
 * Blueprints for creating objects of the same type.
 * Use an object constructor function to create an object type.
 * Objects of the same type are created by calling the constructor function
 * with the new keyword.
 */

 /**
  * 
  * @param {string} name 
  * @param {number} age 
  */
 function 
 Person(name, age)
 {
    this.name = name;
    this.age = age;   
 }


 /** Two new objects of type Person */
let person_1 = new Person("Yoshi", 23);
let person_2 = new Person("Ninja", 23);

console.log(`person 1 name: ${person_1.name} age: ${person_1.age}`);
console.log(`person 2 name: ${person_2.name} age: ${person_2.age}`);


/** 
 * Adding a property and method to an existing object.
 * This will be added only to person_1.
 * 
 * NOTE:
 * Adding a property to an existing object constructor must be done on the constructor function.
 * WRONG: Person.another_property = new_property;
 * CORRECT: Person(.. , new_property){this.new_property = another_property;}
 */

person_1.lay_eggs = function(){
    console.log('Lay giant eggs. Hooray!')
}

person_2.nationality = "Japanese";
person_2.shadow_cloning = function(){
    console.log('Too many to count?');
}

console.log('\n\n*** Before adding prototypes ****')
console.log(person_1);
console.log(person_2);


/**
 * Prototype Inheritance.
 * Each object has a private property which holds a link to another object called its prototype.
 * that prototype object has a prototype of its own, and so on until an object is reached with null 
 * as its prototype. By definition, null has no prototype, and acts as the final link in this 
 * prototype chain.
 * 
 * All JS Objects inherit properties and methods from a prototype:
 * Date >> Date.prototype
 * Array >> Array.prototype
 * Person >> Person.prototype
 * 
 * Used to add new methods and/or properties to an object constructor and/or all existing
 * objects of a given type. 
 */

Person.prototype.movement_means = null;
Person.prototype.movement = function() {
    return 'Moves by '+this.movement_means;
}
person_1.movement_means = 'making giant steps';
person_2.movement_means = 'flying on a sword';
console.log('\n\n*** After adding prototypes ****')
console.log(person_1);
console.log(person_2);

/**
 * JS objects are dynamic "bags" of properties referred to as own properties
 * JS objects have a link to a prototype object. 
 * When trying to access a property of an object, the property will not only be sought on
 * the object but on the prototype of the object, the prototype of the prototype, 
 * and so on until either a property with a matching name is found or the end of the 
 * prototype chain is reached.
 */

/** Is there a 'name' own property on person_1? Yes, and its value is Yoshi */
console.log(person_1.name);

/**
 * Is there a 'movement' own property on person_1? NO, check its prototype.
 * Is there a 'movement' own property on person_1.[[prototype]]? Yes, call the function
 */
console.log(person_1.movement());


/**
 * Inheriting methods.
 * Any function can be added to an object in the form of a property. An inherited fuction
 * acts just as any other property, including property shadowing, A form of method overriding.
 * When an inherited function is executed, the value of this points to the inheriting object, 
 * not to the prototype object where the function is an own property.
 */

 console.log('\n\n****Inheriting methods and properties ****');
 /** 'this' refers to  person_1 */
 console.log(person_1.movement());

 /** A child class of person_1 */
 let person_1_child = Object.create(person_1);
 person_1_child.name = 'Baby Yoshi';
 person_1_child.age = 1;
 person_1_child.movement_means = 'making tiny steps';
 console.log(person_1_child);

/** 'this' keyword refers to person_1_child */
console.log(person_1_child.name);

/** 
 * Is there an 'age' own property on person_1_child? Yes, and its value is 1
 * The prototype also has an 'age' property, but it's not visited.
 * This is called Property shandowing.
*/
console.log(person_1_child.age);

/** 
 * Is there a 'movement_means' own property on person_1_child? Yes, and its value is make tiny steps
 * The prototype also has a 'movement' property, but it's not visited.
 * Is there a 'movement function' own property on person_1_child? NO, check its prototype.
 * Is there a 'movement function' own property on person_1_child.[[prototype]]? Yes, call the fuction
 * passing in the movement_means of person_1_child
*/
console.log(person_1_child.movement());
