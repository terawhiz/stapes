$(document).ready(function () {
  $("#url").bind("paste", (e) => {
    var longUrl = e.originalEvent.clipboardData.getData("text");
    const data = JSON.stringify({
      url: longUrl,
      error: false,
    });
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/api/count",
      data,
      success: (data) => {},
    });
  });
});
