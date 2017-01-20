/*   Seperation of concerns

Big applicatios get way, way harder if everything is related to everything else.
You can avoid this by somehow 'separating' similar things from unrelated things.*/

/* First, create a model. */
//IngredientsModel is a constructor, Backbone & Model is object, extend is a function passing an object as a parameter
// const IngredientsModel = require('./models/ingredients'); //create models folder
//const IngredientsView = require('./views/ingredients'); //create views folder

let IngredientsModel = Backbone.Model.extend({
    /*Built in to Backbone.  These are the starting values for each property. */
    defaults: {
        peas: 100,
    },

    //Increase the number of peas by one.  Max 115
    increasePeas: function () {
        //this.get('peas'); //get the value of 'peas'
        //this.set('peas', 5);  //set number of peas to 5
        if (this.get('peas') < 115) {
            this.set('peas', this.get('peas') + 1); //increase number of peas by 1
        }
    },
});

//  Then work through how to display + interact with the model. */
let IngredientView = Backbone.View.extend({
    /*What should happen at the beginning */
    initialize: function () {
        //third 'this is confusing, but you always want it.
        //if you wanna know, look up bind()
        //whenever one of the properties in my model changes, run this.render
        this.model.on('change', this.render, this);
    },
    /* Events setup - weirdest part of backbone, we must deal with it */
    events: {
        //'<event name> <element selector>' : '<function name>' function on the view that should be called
        'click #more-peas': 'addPea',
    },
    /*Event handler.  This is what happens when soneone clicks the button.  */
    addPea: function () {
        console.log('peas, love em');
        this.model.increasePeas();
    },

    /* Not required, but I always make it called render, all DOM display stuff goes here. */
    render: function () {
        let button = this.el.querySelector('#more-peas');
        button.textContent = this.model.get('peas');


    },
});

window.addEventListener('load', function () {
    let ingredients = new IngredientsModel();

    let mainView = new IngredientView({
        /* The 'kingdom' the view is in charge of.  All elements within this element
        are solely controlled by this view.*/
        el: document.querySelector('body'), //el = element
        model: ingredients, //model = the model to update when times are changing
    });
});