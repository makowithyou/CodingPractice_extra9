// Datepickerでカレンダー機能
$( "#date" ).datepicker({
    dateFormat: "yy/mm/dd",
    dayNamesMin: [ "月", "火", "水", "木", "金", "土", "日" ],
    monthNames: [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
    showMonthAfterYear: true,
    yearSuffix: "年",
});

// ラジオボタンでテキストの切り替え
$("#online").click(function(){
    $(".online_details").toggle();
    $(".offline_details").toggle();
});
$("#offline").click(function(){
    $(".online_details").toggle();
    $(".offline_details").toggle();
});

$(".submit").click(function(){
    if ($(".input_name").val() == "") {
        $(".required.name").show();
    } else {
        $(".required.name").hide();
    }

    $(".input_tel").each(function(){
        if ($(this).val() == "") {
            $(".required.tel").show();
        } else {
            $(".required.tel").hide();
        }
    })

    if ($(".input_date").val() == "") {
        $(".required.date").show();
    } else {
        $(".required.date").hide();
    }
});
