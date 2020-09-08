// using api
function generate(){
    const md5 = document.getElementById("md5").value;
    const url = "https://md5calc.com/hash/md5.json/" + md5;
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            $("#resultado").html(response);
        }
    })
}
