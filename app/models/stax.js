import DS from "ember-data";


var Stax = DS.Model.extend({
  country: DS.attr('string'),
  service: DS.attr('string'),
  number: DS.attr('number'),
  state: DS.attr('string'),
  foto: DS.attr('string')
});

Stax.reopenClass({
    FIXTURES: [
        {
           id: 1,
           country: 'GT',
           service: 'claro-phone-postpay',
           number: 40516589,
           state: 'ready',
           foto: 'https://s3.amazonaws.com/assets.bluekite.com/services/gt/claro-phone-postpay/logos/tall.png'
         },
         {
           id: 2,
           country: 'MX',
           service: 'telmex-phone-postpay',
           number: 2911333863,
           state: 'invoice',
           foto: 'X'
         },
         {
           id: 3,
           country: 'GT',
           service: 'claro-phone-postpay',
           number: 40516589,
           state: 'ready',
           foto: ''
         }
    ]
});

export default Stax;
