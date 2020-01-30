// select2 init

$(function(){

    // basic
    $("#option_s1").select2();

    // nested
    $('#option_s2').select2({
        placeholder: "Select a state"
    });

    // multi select
    $('#option_s3').select2({
        placeholder: "Select a state"
    });

    // placeholder
    $("#option_s4").select2({
        placeholder: "Select a State",
        allowClear: true
    });

    // placeholder
    $("#option_s5").select2({
        minimumInputLength: 2
    });

    // loading data from array
    var data = [{
        id: 0,
        text: 'Bootstrap'
    }, {
        id: 1,
        text: 'Admin'
    }, {
        id: 2,
        text: 'Dashboard'
    }, {
        id: 3,
        text: 'Modern'
    }, {
        id: 4,
        text: 'Sazzad'
    },
        {
        id: 5,
        text: 'Sabrin'
    }];

    $('#option_s6').select2({
        placeholder: "Select a value",
        data: data
    });

    // disabled mode
    $('#option_s7').select2({
        placeholder: "Select an option"
    });

    // hiding the search box
    $('#option_s8').select2({
        placeholder: "Select hidden option",
        minimumResultsForSearch: Infinity
    });

    // tagging support
    $('#option_s9').select2({
        placeholder: "Add a tag",
        tags: true
    });

});



