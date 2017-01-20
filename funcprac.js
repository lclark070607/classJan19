//create a type of object called a Help Desk
//create an object called Request
//HelpDesk.ask('plumber', request);
//HelpDesk.registerAs('plumber', function(request))

//1.  Create an object called HelpDesk (ask, registerAs)
//2.  Create an abject called RequestRegister a plumber, used car salesman (When someone asks for a plumber(triggers event), run this function)
//3.  Ask for help from plumber

//Constructors - we're creating new types of things.

function HelpDesk () {
    this.professions = {};
    this.ask = function (profession, request) {
        //this.professions[profession] is a function
        //whatever we pass as the first param is 'task'
        //we want 'request' to be our 'task'

        this.professions[profession](request);

    };

    //When someone asks for a plumber, run func
    this.registerAs = function (profession, func) {
        this.professions[profession] = func;  //array notation for objects
        // console.log(this.professions);
    };
    return this;
}

window.addEventListener('load', function () {
    let desk = new HelpDesk();
    desk.registerAs('plumber', function(task) {
        console.log('i can help you with your ' + task + 'im a plumber.');
    });

    desk.registerAs('paperboy', function (task) {
        console.log('ill deliver that ' + task + '. Im a paperboy');
    });

    desk.ask('plumber', 'crazy leak');
    desk.ask('plumber', 'bathtub explosion');
});