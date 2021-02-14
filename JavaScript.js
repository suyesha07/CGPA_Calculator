var count = 1;
var array = [];

//Add row when pressing enter
$(window).keydown(function(){
 
    var checkbox = "<td><input type = \"checkbox\" class=\"form-control check\"/></td>";
    var nTerm = "<td><input type = \"text\" class=\"form-control term\"/></td>";
    var nGPA = "<td><input name = \"mark\" type = \"number\" min = \"0\" max = \"100\" class=\"form-control gpa\"/></td>";
    
    if (event.keyCode == 13) {
      $('.table tr:eq(1)').after("<tr>"+checkbox+nTerm+nGPA+"</tr>");
      count++;
      return count;
    }    

});

//Delete selected row
$('.delete').on("click", function () {
    $('table tr').has('input[type = "checkbox"]:checked').remove();
});

//Clear form
$('.clear').click(function(){
  $(':input').val('');
  $('.final').css("background-color","white");
  $('.letter').css("background-color","white");
});

//Calculate CGPA:
 


//Letter Conversion

function letterGrade(){
  if(total > 4.33){
    return letter = "A+";
  }else if(total > 4.00){
    return letter = "A";
  }else if(total > 3.67){
    return letter = "A-";
  }else if(total > 3.33){
    return letter = "B+";
  }else if(total > 3.00){
    return letter = "B";
  }else if(total > 2.67){
    return letter = "B-";
  }else if(total > 2.33){
    return letter = "C+";
  }else if(total > 2.00){
    return letter = "C";
  }else if(total > 1.67){
    return letter = "C-";
  }else if(total > 1.33){
    return letter = "D+";
  }else if(total > 1.00){
    return letter = "D";
  }else if(total < .67){
    return letter = "D-";
  }else{
    return letter = "F";
  }  
};

var add = parseInt($('#cgps').val())+parseInt($('#cgpa').val());
//Submit button
$('.submit').click(function(){
  // $('.final').css("background-color","yellow").val();
  // $('.letter').css("background-color","yellow").val();
  alert(add);
});
