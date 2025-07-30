$(document).ready(function(){
    let btn = $("<button>Click</button>")
    btn.on("click",function(){
        $("#main").find("p").remove()
    })

    $("#main").append(btn)
    $("#main").prepend("<h2>hello world</h2>")

    let clone = $("<button>Clone Text</button>")
    clone.on("click",function(){
       let copy = $(".text").clone(true)
       $("#main").append(copy)
    })
    $("#main").append(clone)


    let newSpan = $("<span>New Span</span>")

    $("#main").append(newSpan)

    // $("span").remove()
    // $("#main > span").remove()
    // $(newSpan).remove()

    // $("span").css({
    //     color : "red",
    //     height : "20px",
    //     width : "20px",
    //     background: "orange"
    // })

    // $(newSpan).attr("class","orange")
    // $(newSpan).attr("style","color : orange; font-size : 18px")

    
})