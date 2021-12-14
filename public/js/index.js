$(document).ready(function () {
  $("button#copy").click(() => {
    navigator.clipboard.writeText($("#url").val()).then(
      function () {
        alert("URL Copied to Clipboard!");
      },
      function () {
        alert("Failed to copy.");
      }
    );
  });

  $("button#clicks").click(() => {
    window.location = "/count";
  });

  $("#url").bind("paste", (e) => {
    var longUrl = e.originalEvent.clipboardData.getData("text");
    const data = JSON.stringify({
      url: longUrl,
      error: false,
    });
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "/api/new",
      data,
      success: (data) => {
        $("#url").val(`${data.shortUrl}`);
      },
    });
  });
});
