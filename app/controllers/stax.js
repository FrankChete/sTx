import Ember from 'ember';

export default Ember.ArrayController.extend({
    actions: {
      findAccounts: function() {
        alert("Boooom@!");
        var account = this.get('AccountId');
        console.log(account);
      }
    }
});
