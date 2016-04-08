var frontwheel, backwheel, bike;
bike = document.getElementById('bike');
backwheel = document.getElementById('backwheel');
frontwheel = document.getElementById('frontwheel');

function pedal() {
    if (bike.className) {
        bike.className = '';
        backwheel.className = '';
        frontwheel.className = '';
    }
    else {
        bike.className = 'move';
        backwheel.className = 'spin';
        frontwheel.className = 'spin';
    }
}

bike.addEventListener('click', pedal, false);
