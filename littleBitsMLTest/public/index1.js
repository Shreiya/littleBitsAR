console.log('i am alive');
var url = 'http://localhost:8000';

function addImage1() {
  var img1 = document.createElement('img');
  img1.src = 'power.png';
  document.getElementById('putImage1').appendChild(img1)
};

document.getElementById('submitTest1').addEventListener('click', function(event) {
  console.log('clicked');
  addImage1();
  $.ajax({
    url: url + '/getPower',
    method: 'POST',
    dataType: 'image/jpg'
  }).always(function(response) {
    console.log("oye?");
    var infoTime1 = response.responseText;
    var infoShow1 = document.getElementById('imgInfo1');

    infoShow1.innerHTML = infoTime1;

    console.log("it's happening", response);
  });
});;

function addImage2() {
  var img2 = document.createElement('img');
  img2.src = 'accel.jpg';
  document.getElementById('putImage2').appendChild(img2)
};

document.getElementById('submitTest2').addEventListener('click', function(event) {
  console.log('clicked');
  addImage2();
  $.ajax({
    url: url + '/getAccel',
    method: 'POST',
    dataType: 'image/jpg'
  }).always(function(response) {
    console.log("oye?");
    var infoTime2 = response.responseText;
    var infoShow2 = document.getElementById('imgInfo2');

    infoShow2.innerHTML = infoTime2;

    console.log("it's happening", response);
  });
});;

function addImage3() {
  var img3 = document.createElement('img');
  img3.src = 'perf.jpg';
  document.getElementById('putImage3').appendChild(img3)
};

document.getElementById('submitTest3').addEventListener('click', function(event) {
  console.log('clicked');
  addImage3();
  $.ajax({
    url: url + '/getPerf',
    method: 'POST',
    dataType: 'image/jpg'
  }).always(function(response) {
    console.log("oye?");
    var infoTime3 = response.responseText;
    var infoShow3 = document.getElementById('imgInfo3');

    infoShow3.innerHTML = infoTime3;

    console.log("it's happening", response);
  });
});

function addImage4() {
  var img4 = document.createElement('img');
  img4.src = 'brightLed.jpg';
  document.getElementById('putImage4').appendChild(img4)
};

document.getElementById('submitTest4').addEventListener('click', function(event) {
  console.log('clicked');
  addImage4();
  $.ajax({
    url: url + '/getLed',
    method: 'POST',
    dataType: 'image/jpg'
  }).always(function(response) {
    console.log("oye?");
    var infoTime4 = response.responseText;
    var infoShow4 = document.getElementById('imgInfo4');

    infoShow4.innerHTML = infoTime4;

    console.log("it's happening", response);
  });
});;

function addImage5() {
  var img5 = document.createElement('img');
  img5.src = 'button.jpg';
  document.getElementById('putImage5').appendChild(img5)
};

document.getElementById('submitTest5').addEventListener('click', function(event) {
  console.log('clicked');
  addImage5();
  $.ajax({
    url: url + '/getButton',
    method: 'POST',
    dataType: 'image/jpg'
  }).always(function(response) {
    console.log("oye?");
    var infoTime5 = response.responseText;
    var infoShow5 = document.getElementById('imgInfo5');

    infoShow5.innerHTML = infoTime5;

    console.log("it's happening", response);
  });
});;

function addImage6() {
  var img6 = document.createElement('img');
  img6.src = 'inverter.jpg';
  document.getElementById('putImage6').appendChild(img6)
};

document.getElementById('submitTest6').addEventListener('click', function(event) {
  console.log('clicked');
  addImage6();
  $.ajax({
    url: url + '/getInverter',
    method: 'POST',
    dataType: 'image/jpg'
  }).always(function(response) {
    console.log("oye?");
    var infoTime6 = response.responseText;
    var infoShow6 = document.getElementById('imgInfo6');

    infoShow6.innerHTML = infoTime6;

    console.log("it's happening", response);
  });
});;
