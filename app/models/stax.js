import DS from "ember-data";


var Stax = DS.Model.extend({
  country: DS.attr('string'),
  service: DS.attr('string'),
  number: DS.attr('number'),
  state: DS.attr('string'),
  barcode: DS.attr('string'),
  XoomTN: DS.attr('number'),
  total: DS.attr('string'),
  logoUrl: DS.attr('string')
});

Stax.reopenClass({
    FIXTURES: [
        {
           id: 1,
           country: 'GT',
           service: 'claro-phone-postpay',
           number: 40516589,
           state: 'ready',
           total: "Q241.50",
           logoUrl: 'https://s3.amazonaws.com/assets.bluekite.com/services/gt/claro-phone-postpay/logos/tall.png'
         },
         {
           id: 2,
           country: 'MX',
           service: 'telmex-phone-postpay',
           number: 2911333863,
           state: 'processed',
           barcode: "29113338630000008333",
           XoomTN: '842278423719',
           total: "$383.00",
           logoUrl: 'https://s3.amazonaws.com/assets.bluekite.com/services/mx/telmex-phone-postpay/logos/tall.png'
         },
         {
           id: 3,
           country: 'SV',
           service: 'delsur-electricity-postpay',
           number: 2343953,
           state: 'processed',
           total: "$3.82",
           logoUrl: 'https://s3.amazonaws.com/assets.bluekite.com/services/sv/delsur-electricity-postpay/logos/tall.png'
         }
    ]
});

export default Stax;
