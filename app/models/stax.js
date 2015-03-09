import DS from "ember-data";

var Stax = DS.Model.extend({
  title: DS.attr(),
  isCompleted: DS.attr()
});

Stax.reopen.Class({
  FIXTURES: [
        {
           id: 1,
           title: 'Learn Ember.js',
           isCompleted: true
         },
         {
           id: 2,
           title: 'asdf',
           isCompleted: false
         },
         {
           id: 3,
           title: 'Profit!',
           isCompleted: false
         }
    ]

});

export default Stax;
