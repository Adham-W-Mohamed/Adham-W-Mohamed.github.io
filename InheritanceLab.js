"use strict"

String.prototype.filter = function (bannedArray) {

    let arr = this.split(" ");
    console.log(arr);
    for (let e of bannedArray){
            arr = arr.filter(function(value, index, arr){
                return value != e;
            });


    }

    return arr.join(" ");

}


console.log("This house is not nice!".filter(["not"]));


Array.prototype.bubbleSort = function () {
    let n = this.length;
    let temp = 0;
    for(let i=0; i < n; i++) // Looping through the array length
    {  console.log("Sort Pass Number "+(i+1));
        for(let j=1; j < (n-i); j++)
        {
            console.log("Comparing "+ this[j-1]+ " and " + this[j]);
            if(this[j-1] > this[j])
            {

                //swap elements
                temp = this[j-1];
                this[j-1] = this[j];
                this[j] = temp;
                console.log(this[j]  + " is greater than " + this[j-1]);
                console.log("Swapping Elements: New Array After Swap");
                console.log(this);
            }

        }
    }
    return this;
}


console.log([6,4,0, 3,-2,1].bubbleSort());



var Person = function() {};

Person.prototype.initialize = function(name, age) {
    this.name = name;     this.age = age;
}

Person.prototype.describe = function() {
    return this.name + ", " + this.age + " years old.";
}

var Student = function() {};

Student.prototype = new Person();

Student.prototype.learn = function(subject) {
    console.log(this.name + " just learned " + subject);
}

var me = new Student();

me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function () {

}

Teacher.prototype = new Person();
Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);

}
