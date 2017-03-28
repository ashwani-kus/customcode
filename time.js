/*two dates comparison*/

var date_start = $dialogContent.find("input[id='edit-start-date--2-datepicker-popup-0']").val();
var date_end = $dialogContent.find("input[id='edit-end-date-datepicker-popup-0']").val();
var startField = $dialogContent.find("input[id='edit-start-date--2-timeEntry-popup-1']").val();
var endField = $dialogContent.find("input[id='edit-end-date-timeEntry-popup-1']").val();
var validate = true;
var end = parseInt(endField);
var start = parseInt(startField);

var d1 = new Date(date_start);
var d2 = new Date(date_end);

                                console.log("----------");   // prints false (wrong!)
                                console.log(d1 == d2);   // prints false (wrong!)
                                console.log(d1 === d2);  // prints false (wrong!)
                                console.log(d1 != d2);   // prints true  (wrong!)
                                console.log(d1 !== d2);  // prints true  (wrong!)
                                console.log(d1.getTime() === d2.getTime()); // prints true (correct)
                                console.log(d1 > d2);

/*cache clear reload */
$.ajax({
        url: window.location.href,
        headers: {
            "Pragma": "no-cache",
            "Expires": -1,
            "Cache-Control": "no-cache"
        }
    }).done(function () {
        window.location.reload(true);
    });

/*cache clear reload end */
