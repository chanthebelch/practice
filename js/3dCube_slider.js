window.onload = init;

function init() {
    document.getElementById('xslider').onchange = rotate;
    document.getElementById('yslider').onchange = rotate;
    document.getElementById('zslider').onchange = rotate;
}

function rotate(e) {
    var xRotation = document.getElementById('xslider').value;
    var yRotation = document.getElementById('yslider').value;
    var zRotation = document.getElementById('zslider').value;
    // update labels
    document.getElementById('xdegrees').textContent = xRotation;
    document.getElementById('ydegrees').textContent = yRotation;
    document.getElementById('zdegrees').textContent = zRotation;
    // rotate cube
    var rx = 'rotateX(' + xRotation + 'deg)';
    var ry = 'rotateY(' + yRotation + 'deg)';
    var rz = 'rotateZ(' + zRotation + 'deg)';

    var cube = document.getElementsByClassName('cube')[0];
    cube.style.transform = rx + ry + rz;
}
