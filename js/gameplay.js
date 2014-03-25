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