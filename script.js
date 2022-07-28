$('.input-container').click(function() {
    var target = $(this);
    var targetInput = $(this).find('input');
    var targetSelect = $(this).find('select');
    var styledSelect = $(this).find('.newSelect');
    target.addClass('active');
    targetInput.focus();
    targetInput.change(function() {
      var inputValue = $(this).val();
      var placeholder = target.find('.placeholder')
      target.removeClass('active');
      placeholder.html(inputValue);
    });
    targetSelect.change(function() {
      var inputValue = $(this).val();
      var placeholder = target.find('.placeholder')
      target.removeClass('active');
      placeholder.html(inputValue);
    });
    styledSelect.click(function() {
      var target = $(this);
      setTimeout(function() {
        target.parent().parent().removeClass('active');
      }, 10);
    });
  });
  
  // style selects
  
  // Create the new select
  var select = $('.fancy-select');
  select.wrap('<div class="newSelect"></div>');
  $('.newSelect').prepend('<div class="newOptions"></div>');
  
  //populate the new select
  select.each(function() {
    var selectOption = $(this).find('option');
    var target = $(this).parent().find('.newOptions');
    selectOption.each(function() {
      var optionContents = $(this).html();
      var optionValue = $(this).attr('value');
      target.append('<div class="newOption" data-value="' + optionValue + '">' + optionContents + '</div>')
    });
  });
  // new select functionality
  var newSelect = $('.newSelect');
  var newOption = $('.newOption');
  // update based on selection 
  newOption.on('mouseup', function() {
    var OptionInUse = $(this);
    var siblingOptions = $(this).parent().find('.newOption');
    var newValue = $(this).attr('data-value');
    var selectOption = $(this).parent().parent().find('select option');
    // style selected option
    siblingOptions.removeClass('selected');
    OptionInUse.addClass('selected');
    // update the actual input
    selectOption.each(function() {
      var optionValue = $(this).attr('value');
      if (newValue == optionValue) {
        $(this).prop('selected', true);
      } else {
        $(this).prop('selected', false);
      }
    })
  });
  newSelect.click(function() {
    var target = $(this);
    target.parent().find('select').change();
  });


  var overview ={"Las_Vegas": {"fried_rice": 
  {"a":"Booming Spot Mini Pot", "b":"Oriental House","c":"Veggie House"},
  "rice_noodle": 
  {"a":"Food Express Chinese Restaurant" ,"b":"China Gourmet" ,"c":"Great Bao"},
  "dumplings": 
  {"a":"SUSHISAMBA Las Vegas","b": "Beijing Noodle Cafe","c" :"Asian BBQ & Noodles"}
},
"Phoenix": {"fried rice":
{"a":"Wong's Restaurant", "b":"Great Wok", "c":"Mu Shu Asian Grill"},
 "rice noodle": 
 {"a":"Nee House Chinese Restaurant", "b":"Mu Shu Asian Grill", "c":"Noodle & Rice"}, 
 "dumplings": 
 {"a":"Szechwan Palace", "b":"The Clever Koi","c": "Great Wall Cuisine"} 
}
}

 

var Food_Taste={"Las Vegas": {"fried rice": 
{"a":"Yummy House", "b": "Tasty Station", "c":"Lanai Express"},
"rice noodle": 
{"a":"J & J Szechuan Cuisine", "b": "Dumpling King", "c":"Three Villages Restaurant"},
"dumplings": 
{"a":"Mr. Beijing", "b":"Big Wong Restaurant", "c":"Oriental House"}

},
"Phoenix": {"fried rice": 
{"a":"Beijing Garden Chinese","b": "Red Wok Buffet", "c":"Golden China"},
"rice noodle": 
{"a":"Beijing Garden Chinese","b": "Ling and Louie's Kitchen", "c":"Ming's Pagoda"},
"dumplings": 
{"a":"Hong Kong Gourmet Buffet","b": "Pei Wei Asian Market", "c":"Shangri-La Chinese"}
}
}

function bblselect(){
  var bb=document.getElementById("bbselect");
  display_pr=bb.options[bb.selectedIndex].text;
};

function cclselect(){
  var cc=document.getElementById("ccselect");
  display_ci=cc.options[cc.selectedIndex].text;
};

  function ddlselect(){
    var d=document.getElementById("ddselect");
    displaytext=d.options[d.selectedIndex].text;
  };


  function click_display(){
    if(display_pr=="Overall_Experience"){
      if(display_ci=="Las_Vegas"){
          if(displaytext=="fried_rice"){
            document.getElementById('getResult1').innerHTML= overview.Las_Vegas.fried_rice.a;
            document.getElementById('getResult2').innerHTML= overview.Las_Vegas.fried_rice.b;
            document.getElementById('getResult3').innerHTML= overview.Las_Vegas.fried_rice.c;
             }if(displaytext=="rice_noodle")
            {
            document.getElementById('getResult1').innerHTML= overview.Las_Vegas.rice_noodle.a;
            document.getElementById('getResult2').innerHTML= overview.Las_Vegas.rice_noodle.b;
            document.getElementById('getResult3').innerHTML= overview.Las_Vegas.rice_noodle.c;
              }else{
            document.getElementById('getResult1').innerHTML= overview.Las_Vegas.dumplings.a;
            document.getElementById('getResult2').innerHTML= overview.Las_Vegas.dumplings.b;
            document.getElementById('getResult3').innerHTML= overview.Las_Vegas.dumplings.c;
              } 
            }
        else{
          if(displaytext=="fried_rice"){
            document.getElementById('getResult1').innerHTML= overview.Phoenix.fried_rice.a;
            document.getElementById('getResult2').innerHTML= overview.Phoenix.fried_rice.b;
            document.getElementById('getResult3').innerHTML= overview.Phoenix.fried_rice.c;
          }if(displaytext=="rice_noodle")
                {
            document.getElementById('getResult1').innerHTML= overview.Phoenix.rice_noodle.a;
            document.getElementById('getResult2').innerHTML= overview.Phoenix.rice_noodle.b;
            document.getElementById('getResult3').innerHTML= overview.Phoenix.rice_noodle.c;
              }else{
            document.getElementById('getResult1').innerHTML= overview.Phoenix.dumplings.a;
            document.getElementById('getResult2').innerHTML= overview.Phoenix.dumplings.b;
            document.getElementById('getResult3').innerHTML= overview.Phoenix.dumplings.c;
          }
        }
          }
        
  else{
    if(display_ci=="Las_Vegas"){
      if(displaytext=="fried_rice"){
        document.getElementById('getResult1').innerHTML= Food_Taste.Las_Vegas.fried_rice.a;
        document.getElementById('getResult2').innerHTML= Food_Taste.Las_Vegas.fried_rice.b;
        document.getElementById('getResult3').innerHTML= Food_Taste.Las_Vegas.fried_rice.c;
         }if(displaytext=="rice_noodle")
        {
        document.getElementById('getResult1').innerHTML= Food_Taste.Las_Vegas.rice_noodle.a;
        document.getElementById('getResult2').innerHTML= Food_Taste.Las_Vegas.rice_noodle.b;
        document.getElementById('getResult3').innerHTML= Food_Taste.Las_Vegas.rice_noodle.c;
          }else{
        document.getElementById('getResult1').innerHTML= Food_Taste.Las_Vegas.dumplings.a;
        document.getElementById('getResult2').innerHTML= Food_Taste.Las_Vegas.dumplings.b;
        document.getElementById('getResult3').innerHTML= Food_Taste.Las_Vegas.dumplings.c;
          } 
        }
    else{
      if(displaytext=="fried_rice"){
        document.getElementById('getResult1').innerHTML= Food_Taste.Phoenix.fried_rice.a;
        document.getElementById('getResult2').innerHTML= Food_Taste.Phoenix.fried_rice.b;
        document.getElementById('getResult3').innerHTML= Food_Taste.Phoenix.fried_rice.c;
      }if(displaytext=="rice_noodle")
            {
        document.getElementById('getResult1').innerHTML= Food_Taste.Phoenix.rice_noodle.a;
        document.getElementById('getResult2').innerHTML= Food_Taste.Phoenix.rice_noodle.b;
        document.getElementById('getResult3').innerHTML= Food_Taste.Phoenix.rice_noodle.c;
          }else{
        document.getElementById('getResult1').innerHTML= Food_Taste.Phoenix.dumplings.a;
        document.getElementById('getResult2').innerHTML= Food_Taste.Phoenix.dumplings.b;
        document.getElementById('getResult3').innerHTML= Food_Taste.Phoenix.dumplings.c;
      }
    }

  }
};