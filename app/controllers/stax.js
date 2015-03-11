import Ember from 'ember';

var MX="2911333863";
var SV="2343953";
var GT="54588486";
var GT2 = "54588948";
var GT3 = "54589836";
var GTN = "5458";
var XoomTN = "842278423719";
var Barcode ="29113338630000008333";

export default Ember.ArrayController.extend({

    actions: {
      showAdvancedSearch: function() {
        alert(12);
      },
      refreshBalance: function() {
        var total = $('#6');
        var body = '<p style="background-color: #99FFFF">Loading new balance';
        total.html(body + '</p>');
        setTimeout(function(){ total.html(body + '..</p>') }, 500);
        setTimeout(function(){ total.html(body + '....</p>') }, 1000);
        setTimeout(function(){ total.html(body + '......</p>') }, 1500);

        total.html(body + '</p>');
        setTimeout(function(){ total.html(body + '..</p>') }, 2000);
        setTimeout(function(){ total.html(body + '....</p>') }, 2500);
        setTimeout(function(){ total.html(body + '......</p>') }, 3000);

        setTimeout(function(){ total.html('<h5>Total: Q698.21</h5>') }, 3500);
      },

      findAccounts: function() {
        var account = document.getElementById('AccountId').value;

        if(account=== XoomTN || account === Barcode)
        {
          account=MX;
        }

        if (account !== MX && account !== GT && account !== SV && account !== GTN)
        {
            document.getElementById('divError').style.visibility = "visible";
            document.getElementById('divOk').style.visibility = "hidden";

              document.getElementById(GT).style.display = "none";
              document.getElementById(GT2).style.display = "none";
              document.getElementById(GT3).style.display = "none";
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
            document.getElementById(GT2).style.display = "none";
            document.getElementById(GT3).style.display = "none";
            document.getElementById(MX).style.display = "none";
            document.getElementById(SV).style.display = "none";
          }
        if (account === MX)
          {
            document.getElementById(MX).style.display = "inline";
            document.getElementById(GT).style.display = "none";
            document.getElementById(GT2).style.display = "none";
            document.getElementById(GT3).style.display = "none";
            document.getElementById(SV).style.display = "none";
          }
        if (account === SV)
          {
            document.getElementById(SV).style.display = "inline";
            document.getElementById(GT).style.display = "none";
            document.getElementById(GT2).style.display = "none";
            document.getElementById(GT3).style.display = "none";
            document.getElementById(MX).style.display = "none";
          }

        if (account === GTN){
          document.getElementById(SV).style.display = "none";
          document.getElementById(GT).style.display = "inline";
          document.getElementById(GT).style.visibility = "visible";
          document.getElementById(GT2).style.display = "inline";
          document.getElementById(GT2).style.visibility = "visible";
          document.getElementById(GT3).style.display = "inline";
          document.getElementById(GT3).style.visibility = "visible";
          document.getElementById(MX).style.display = "none";
        }

        document.getElementById(account).style.visibility = "visible";

      },

    }
});
