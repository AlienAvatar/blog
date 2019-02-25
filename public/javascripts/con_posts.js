$("#like").click(function () {
    alert(1)
    var url="http://localhost:27017/test";
    let count = $("#like").val();
    $.get(url,{
        postId:$("#name").val(),
        like:count
    },function(data,textSattus){
        //$("#comments").html(data);
        /*var data_elem=$(data);
        $("#comments").append(data_elem);*/

        /*var name=data.name;
        var content=data.content;*/
        console.log(data);
        console.log(typeof data);

        var name=data.name;
        var content=data.content;
        $("#comments h6:last").text(name);
        $("#comments p:last").text(content);

    })
});

