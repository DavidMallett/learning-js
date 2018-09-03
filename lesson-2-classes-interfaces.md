
## Exercise 2: Interfaces, Classes, and Abstract Classes

An interface in Javascript is, basically, a piece of code that describes the "shape" of some kind of information. By definition, an __interface__ is a structure that enforces specific properties on an object. For example, let's say we want to create an interface that we'll use for the people in our Contacts list. Let's say that contacts have, among other things, a name, a phone number, and a numeric age. Additionally, let's say that contacts can be deleted, they can be added to our favorites list, and they can be given a nickname. Our interface might look like this:  

```ts
interface Contact {
    name: string;
    phoneNumber: string;
    ageInYears: number;

    static delete(contact: Contact): void;
    addToFavorites(): void;
    giveNickname(nickname: string);
}
```

It might help to break down the concept of a "Contact" and think about it this way:  



|   A contact has  |    type of information     |      example      |
|------------------|----------------------------|-------------------|
|   name           |        someone's name      |   "Ricky Bobby"   |
|   phoneNumber    |      somebody's phone #    |      867-5309     |
|   ageInYears     |  someone's numerical age   |   47              |

|   A contact can  | this requires or produces: |      use case     |
|------------------|----------------------------|-------------------|
|   be deleted     |        N / A               |when you want to delete|
| get a nickname   |requires input: the nickname|to tell people apart easier|
|be put on speedDial| produces a new SpeedDial  |  when you call someone frequently|

The above tables describe an __interface__ for your Contacts.

The interface declares properties and methods (and their types), but doesn't define them. Remember, "methods" are functions an object can perform, as opposed to properties, which are variables containing information about the object. Think of a car as being an object; its methods might include car.start(), car.brake(), car.unlock(), etc. Its properties could be car.model, car.numberOfAxles, car.paintColor, etc. Notice that __methods__ are always followed by a pair of parentheses (which contain the method's parameters, if any, and are otherwise empty), while __properties__ are not.

Now, the above example is written in Typescript, but the syntax isn't what's important - nearly *all* programming languages have the concept of an interface. Here's one in Java:

```java
public interface MyInterface {

    public String hello = "Hello";

    public void sayHello();
}
```

And Python:

```py
from interface import Interface

class MyInterface(Interface):

    def method1(self):
        pass

    def method2(self, arg1, arg2):
        pass
```

Often, interfaces are used simply as labelled buckets in which to store information. Sometimes, they describe the blueprint of what's called a __Class__. Notice that in our Javascript example above, we declare 3 functions (`delete()`, `addToFavorites()`, and `giveNickname(nickname: string)`), but we leave out the *implementation* of those functions. This means that if we want to actually have the ability to "add to favorites" (for example), we need to *implement* it in a class. This means that we will create a new class __implementing__ the interface:

```js
class MyContact implements Contact {

    public static delete(contact) {
        // code to delete a contact goes here
        /** note: "static" means that this is a method of the class rather than an instance of the class (explained below) */
    }

    // properties of the class
    public name: string;
    public phoneNumber: string;
    public ageInYears: number;
    public nickname?: string;

    public constructor() {
        // code to instantiate a "MyContact" object (explained below).
    }

    public addToFavorites() {
        // code to add to pavorites goes here
    }

    public giveNickname(name) {

    }
}
```  

Let's break down what's going on here and how a Class differs from an interface. Most classes can be __instantiated__. This means that they have what's called a __constructor__, a function which "builds" an object with all the class's properties and methods.

Here's what the constructor for our `MyContact` class could look like:
```ts
public constructor(name: string, number: string, age: number) {
    this.name = name;
    this.phoneNumber = number;
    this.ageInYears = age;
}
```

Then, in another file, you could do this:

```ts
require("MyContact");
var bob = new MyContact("Bob Floot", "123-456-7890", 38);
bob.giveNickname("El Taco");
bob.addToFavorites();
console.log("my name is " + bob.name);
// this will print "my name is Bob Floot"
```

Going back to the car example from earlier, you could think of a car Interface as an abstract list of properties that all cars have in common. If you create a new interface, then you have a bucket of information about a car. But that's all an Interface is - a bucket. If you actually want to drive a car, you need to create a Class. There are a number of ways you could do this. For instance, you might create a separate class for each make/model of car, each of them implementing the interface (so information about each car has the same general shape/structure). Or, you could create a class for each type of automobile - one for sedans, one for SUVs, one for trucks, etc. __If you create a Class that implements an Interface, then that class needs to define all of the properties declared in the Interface.__

Once you write a class, you should make a __constructor__ function if you intend to __instantiate__ that class. More simply, if you want to use the `var myCar = new Car()` syntax (or want there to be multiple Car objects), you should write a constructor.

Here's an example:
```ts
interface Car {
    color: string;
    year: number;
    make: string;
    model: string;
    type: string;
    start(): void;
}

class SportUtilityVehicle implements Car {
    public ignitionOn: boolean;
    /** 
     * Note: if you write a constructor like this, then that means you **MUST** provide
     * all of those properties each time you create an instance of the class (in this 
     * case, an SUV object).
    */
    public constructor(make: string, model: string, year: number, color: string) {
        this.type = "SUV";
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    public start() {
        this.ignitionOn = true;
    }
}

class SixFourImpala implements Car {
    public swangin?: boolean;
    public ignitionOn: boolean;
    /**
     * This type of constructor may or may not be easier to work with. Think critically 
     * about the best way to organize your classes and interfaces!
     */
    public constructor(swangin?: boolean) {
        this.color = "Murdered Out";
        this.year = 1964;
        this.make = "Chevrolet";
        this.model = "Impala";
        this.type = "Full-size Sedan";
        this.swangin = swangin || true; // remember that the ? in the constructor makes
        // the parameter optional; don't forget to define a default value here!
    }
    public start() {
        this.ignitionOn = true;
        this.swangin = true; // always swang
    }
}

var suv = new SportUtilityVehicle("toyota", "RAV4", 2018, "silver");
suv.start();

var slab = new SixFourImpala(false); // not swangin' yet
slab.start(); // WE SWANGIN NOW BOI



```

A few notes about our code so far:
- We are using javascript in our examples, but the concepts of Classes and Interfaces are used in many different programming languages. These are called __Object-Oriented Languages__. Programming using one of these languages is called __Object=Oriented Programming (OOP)__.
- All of the properties we defined are __public__. This means that you can access them from anywhere using dot notation (car.year, bob.nickname, etc). Where we used the word `public`, we could also have used __private__ or __protected__.

We will talk about private and protected variables in the next lesson :)