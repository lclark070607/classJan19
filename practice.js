/* slide()

Should return an object that has two functions:  add(number) and get()
- add() adds a number to a rolling average
-get() returns the average of the (up to) three most recent numbers */

/* Step 1:
Step 2:  create object average
Step 3:  create property add with a function that adds a number to an array of numbers
Step 4:  create property get:  with a function that:
            1.  adds the last three numbers in the array
            2.  finds the average
*/



//Prototypes - how you add and get don't change from slide to slide



//Constructor Edition

function Slide() {
    this.nums = [];  //'this' is the object being constructed, every slide has a nums array
    // add numbers to an array
    this.add = function(number) {
        this.nums.push(number); //this is the side effect of this variable changing THEREFORE no need for return
        if (this.nums.length > 3) {
            this.nums.shift(); //remove one from the front
        }
};

    this.get = function() {
        let total = 0;
        for (let i = 0; i < this.nums.length; i++) {
            total = total + this.nums[i];
        };
        return total / this.nums.length;
    };
};
// -----  This is how you would set up prototypes.  You would remove get and add from the constructor.
/* Slide.prototype.add = function (num) {
    this.nums.push(num);

if (this.nums.length > 3) {
    this.nums.shift()
}
    more code...
};

Slide.prototype.get = function () {
    let total = 0;
        for (let i = 0; i < this.nums.length; i++) {
            total = total + this.nums[i];
        };
        return total / this.nums.length;
    }; 
} */

//---------------------End Prototypes


let average2 = new Slide();

average2.add(1);
average2.add(3);
console.log(average2.get()); //return 2 (4 / 2)

//Closure Edition

function slide() {
    let nums = [];
    //return the object that the world needs.
    return {
        add: function (num) {
            nums.push(num);

            if (nums.length > 3) {
                nums.shift();
            }
        },
        get: function () {
            let total = 0;
            for (let i = 0; i < nums.length; i++) {
                total = total + nums[i];
            }
            return total / nums.length;
        },
    };
}


let average = slide();
average.add(1);
average.add(3);
console.log(average.get()); //return 2 (4/2)

