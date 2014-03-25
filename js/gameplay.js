function updateProgress(newValue) {
    var pBar = document.getElementById('progressBar');
    pBar.value += newValue;
}

function getRandomX() {
    return Math.random() * 500;
}

function getRandomY() {
    return Math.random() * 250;
}

function init() {
    var stage = new Kinetic.Stage({
        container: 'container',
        width: 1000,
        height: 450
    });
    var layer = new Kinetic.Layer();

    var mouseObj = new Image();
    var mouse = new Kinetic.Image({
        x: 0,
        y: 10,
        width: 180,
        height: 150,
        draggable: true,
        image: mouseObj,
    });
    mouseObj.src = 'http://imgur.com/KUSUobb.png';

    mouse.on('dragmove', function() {
        if (areTheyColliding(mouse, target)) {
            // box touched the goal
            //mouse.setX(100);
            //mouse.setY(50);
            //alert("You Win!");       
            updateProgress(0.5);
        }
    });

    // bowl
    var bowlObj = new Image();
    var target = new Kinetic.Image({
        x: 200,
        y: 330,
        width: 250,
        height: 120,
        image: bowlObj
    });
    bowlObj.src = 'http://imgur.com/iZn40QK.png';

    function areTheyColliding(rect1, rect2) {
        return !(rect2.getX() > rect1.getX() + rect1.getWidth() || //
            rect2.getX() + rect2.getWidth() < rect1.getX() || // 
            rect2.getY() > rect1.getY() + rect1.getHeight() || //
            rect2.getY() + rect2.getHeight() < rect1.getY()); //
    }
    layer.add(target);
    layer.add(mouse);
    stage.add(layer);
}
$(document).ready(function() {
    init();
    $('#pauseBtn').click(function() {
        $('#dialog').dialog({

            maxWidth: 400,
            maxHeight: 300,
            width: 400,
            height: 300,
            modal: true,
            buttons: {
                "Resume": function() {
                    $(this).dialog("close");
                },
                "Restart": function() {
                    $(this).dialog("close");
                },
                "Settings": function() {
                    $(this).dialog("close");
                }
            },
            close: function() {}
        });
    });
});