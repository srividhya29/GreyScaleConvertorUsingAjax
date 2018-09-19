// JavaScript source code


/*this.onmessage = function (e) {
    // GOAL: turn e.data.image into an image blob or dataUrl and return it.
    // e.g. this.postMessage(new Blob([e.data.image.data], {type: 'image/jpg'});
    var pixelArray = e.data;
    for (i = 0; i < pixelArray.length; i = i + 4) {

        r = e.data[i] / 2;
        g = e.data[i + 1] / 2;
        b = e.data[i + 2] * 2.5;
        a = e.data[i + 3];

        e.data[i] = r;
        e.data[i + 1] = g;
        e.data[i + 2] = b;
        e.data[i + 3] = a;
    }
    //context.putImageData(pixelArray, 200, 20);
    postMessage(e.data);

}*/
onmessage = function (e) { postMessage(filter(e.data)) };
function filter(imgd) {
    var pix = imgd.image.data;

    for (var i = 0, n = pix.length; i < n; i += 4) {
        var grayscale = pix[i] * .3 + pix[i + 1] * .59
            + pix[i + 2] * .11;
        pix[i] = grayscale; // red
        pix[i + 1] = grayscale; // green
        pix[i + 2] = grayscale; // blue
    }
    imgd['image'].data = pix;
    return imgd;

}




