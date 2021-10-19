$(document).ready(function(){
    $('#one').click(function(){
      document.forms.display.value += 1;
    });
    $('#tow').click(function(){
      document.forms.display.value += 2;
    });
    $('#three').click(function(){
      document.forms.display.value += 3;
    });
    $('#four').click(function(){
      document.forms.display.value += 4;
    });
    $('#five').click(function(){
      document.forms.display.value += 5;
    });
    $('#six').click(function(){
      document.forms.display.value += 6;
    });
    $('#seven').click(function(){
      document.forms.display.value += 7;
    });
    $('#eight').click(function(){
      document.forms.display.value += 8;
    });
    $('#nine').click(function(){
      document.forms.display.value += 9;
    });
    $('#zero').click(function(){
      document.forms.display.value += 0;
    });
    $('#plus').click(function(){
      document.forms.display.value += '+';
    });
    $('#subtract').click(function(){
      document.forms.display.value += '-';
    });
    $('#multi').click(function(){
      document.forms.display.value += '*';
    });
    $('#divide').click(function(){
      document.forms.display.value += '/';
    });
    $('#dot').click(function(){
      document.forms.display.value += '.';
    });
    $('#equal').click(function(){
      if (display.value == "") {
        alert("Please enter any numbers to calculate!");
      }else{
        document.forms.display.value =
        eval(document.forms.display.value);
      }
    });
    $('#CE').click(function(){
      document.forms.display.value = "";
    });
    

    // buttons of currencies 

    // Shekels into US Dollars
    $('#shkl-dlr').click(function(){
      document.forms.display.value *= 0.31;
    });

    // Dollars into Shekels
    $('#dlr-shkl').click(function(){
      document.forms.display.value *= 3.21;
    });

    // Shekels into Euros
    $('#shkl-uro').click(function(){
      document.forms.display.value *= 0.27;
    });

    // Euros into Shekels
    $('#uro-shkl').click(function(){
      document.forms.display.value *= 3.74;
    });
});
