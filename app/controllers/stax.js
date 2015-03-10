import Ember from 'ember';

var MX="2911333863";
var SV="2343953";
var GT="54588486";
var XoomTN = "842278423719";
var Barcode ="29113338630000008333";

export default Ember.ArrayController.extend({

    actions: {

      findAccounts: function() {
        var account = document.getElementById('AccountId').value;

        if(account=== XoomTN || account === Barcode)
        {
          account=MX;
        }

        if (account !== MX && account !== GT && account !== SV )
        {
            document.getElementById('divError').style.visibility = "visible";
            document.getElementById('divOk').style.visibility = "hidden";

              document.getElementById(GT).style.display = "none";
              document.getElementById(MX).style.display = "none";
              document.getElementById(SV).style.display = "none";
        }else{
            document.getElementById('accountsList').style.visibility = "visible";
            document.getElementById('divError').style.visibility = "hidden";
            document.getElementById('divOk').style.visibility = "visible";
        }

        if (account === GT)
          {
            document.getElementById(GT).style.display = "inline";
            document.getElementById(MX).style.display = "none";
            document.getElementById(SV).style.display = "none";
          }
        if (account === MX)
          {
            document.getElementById(MX).style.display = "inline";
            document.getElementById(GT).style.display = "none";
            document.getElementById(SV).style.display = "none";
          }
        if (account === SV)
          {
            document.getElementById(SV).style.display = "inline";
            document.getElementById(GT).style.display = "none";
            document.getElementById(MX).style.display = "none";
          }

        document.getElementById(account).style.visibility = "visible";


      },

    }
});
