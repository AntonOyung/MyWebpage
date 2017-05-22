// $('.w3-btn').on('click', function(){
//   $(this).find('body').append('<div class="expand">HIHIHIHIHI</div>');
// });


// $("#button").click(function() {
//   $(".expand").toggleClass('expand-active');
//   // document.getElementById("anton").innerHTML = "anton.oyung@berkeley.edu";
// });
// $('.w3-btn').on('click', function(){
//   $(this).find('body').toggleClass('expand-active');
// });

// $('w3-btn').on("click", function() {
//   var el = $(this);
//   if (el.text() == el.data("anton.oyung")) {
//     el.text(el.data("anton.oyung@berkeley.edu"));
//   } else {
//     el.data("anton.oyung@berkeley.edu", el.text());
//     el.text(el.data("anton.oyung"));
//   }
// });

// button = document.querySelectorAll("button")[0];
// anton = document.querySelectorAll("b")[0];
// button.addEventListener('click', function() {
//     if ("anton.oyung" == anton.innerHTML) {
//       anton.innerHTML = "anton.oyung@berkeley.edu";
//     } else {
//       anton.innerHTML = "anton.oyung"
//     }
// }, false);

// $(function() {
//     $('body').removeClass('fade-out');
// });


var rgb = getAverageRGB(document.getElementById('i'));
photo = document.getElementById('i')
photo.setAttribute("background-color",'rgb('+rgb.r+','+rgb.g+','+rgb.b+')');

function getAverageRGB(imgEl) {
  var blockSize = 5;
  defaultRGB = {r:0,g:0,b:0},
  canvas = document.createElement('canvas'),
  context = canvas.getContext && canvas.getContext('2d'),
  data, width, height,
  i = -4,
  length,
  rgb = {r:0,g:0,b:0},
  count = 0;
  if (!context) {
    return defaultRGB;
  }


  height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl,0,0);

  try {
      data = context.getImageData(0, 0, width, height);
  } catch(e) {
      /* security error, img on diff domain */alert('x');
      return defaultRGB;
  }

  length = data.data.length;

  while ( (i += blockSize * 4) < length ) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i+1];
      rgb.b += data.data[i+2];
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r/count);
  rgb.g = ~~(rgb.g/count);
  rgb.b = ~~(rgb.b/count);

  return rgb;

}
