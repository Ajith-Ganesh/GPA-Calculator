function getvalue(){
  let totalgradepoints=0;
  let totalcreditpoints=0;


  let englishs1= document.getElementById("select-div-one");
  let mathss2 = document.getElementById("select-div-two");
  let physicss3= document.getElementById("select-div-three");
  let chemistrys4= document.getElementById("select-div-four");
  let pythons5= document.getElementById("select-div-five");
  let graphicss6= document.getElementById("select-div-six");
  let lab1s7= document.getElementById("select-div-seven");
  let lab2s8= document.getElementById("select-div-eight");


  let credit1 = 3;
  let credit2 = 4;
  let credit3 = 3;
  let credit4 = 3;
  let credit5 = 3;
  let credit6 = 4;
  let credit7 = 2;
  let credit8 = 2;


  if(englishs1.value !==""){
    totalgradepoints += parseFloat(englishs1.value) * credit1;
    totalcreditpoints += credit1;
  }

  if(mathss2.value !==""){
    totalgradepoints += parseFloat(mathss2.value) * credit2;
    totalcreditpoints += credit2;
  }

  if(physicss3.value !==""){
    totalgradepoints += parseFloat(physicss3.value) * credit3;
    totalcreditpoints += credit3;
  }

  if(chemistrys4.value !==""){
    totalgradepoints += parseFloat(chemistrys4.value) * credit4;
    totalcreditpoints += credit4;
  }

  if(pythons5.value !==""){
    totalgradepoints += parseFloat(pythons5.value) * credit5;
    totalcreditpoints += credit5;
  }

  if(graphicss6.value !==""){
    totalgradepoints += parseFloat(graphicss6.value) * credit6;
    totalcreditpoints += credit6;
  }

  if(lab1s7.value !==""){
    totalgradepoints += parseFloat(lab1s7.value) * credit7;
    totalcreditpoints += credit7;
  }

  if(lab2s8.value !==""){
    totalgradepoints += parseFloat(lab2s8.value) * credit8;
    totalcreditpoints += credit8;
  }
  
  let gpa = (totalgradepoints/totalcreditpoints);
  gpa = parseFloat(gpa).toFixed(2);
  window.location.href = "display.html?gpa=" + gpa;
}

//let gpaElement = document.getElementById("result");
//gpaElement.innerHTML = "your gpa is "+ gpa.toFixed(2);
  
