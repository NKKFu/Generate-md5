// using api
function generate(){
    md5 = document.getElementById("md5").value;
    url = "https://md5calc.com/hash/md5.json/" + md5;
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            $("#resultado").html(response);
        }
    })
}