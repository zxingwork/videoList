
function videolist() {
    let numPerPage = 20;
    var video;
    var ip_addr = document.location.hostname
    $.get("http://"+ip_addr+":9527/videolist", function (result) {

        totalCount = Object.keys(result).length;
        // document.getElementById("total").innerText = totalCount;
        resultDict = result;
        pageitemNum = Math.round(totalCount/numPerPage);
        console.log(pageitemNum)
        for (var i=1;i<=pageitemNum;i++){
            var x = document.createElement("li");
            x.setAttribute("title", i);
            x.setAttribute("class", "be-page-item");
            x.setAttribute("onclick","clickbepageritem(event)")
            x.innerHTML=i;
            document.getElementById("be-pager").appendChild(x);
        }
        //////////
        return result;
    })
}

function Pagelist(pagetitle) {
    numPerPage = 20;
    var resultList = new Array();
    for (var i=(pagetitle-1)*20;i<pagetitle*20;i++){
        resultList[i]=resultDict[i]
    }
    console.log(resultList)
    return resultList
}

function clickbepageritem(event) {
    pagetitle = event.currentTarget;
    var list = new Array();
    list = Pagelist(pagetitle.title);
    console.log(pagetitle.title)
    document.getElementById("showvideo").innerHTML="";
    for (key in list){
        if (list[key] != undefined){
            var x = document.createElement("video");
            x.setAttribute("controls", "controls");
            x.setAttribute("poster", "/videoimg/"+list[key].split('.')[0]+".jpg")
            x.setAttribute("src", "/video/"+list[key]);
            document.getElementById("showvideo").appendChild(x);
        }
    }
}

function fullrightdiv() {
    let numPerPage = 20;
    var video;
    var ip_addr = document.location.hostname
    $.get("http://"+ip_addr+":9527/videolist", function (result) {

        totalCount = Object.keys(result).length;
        // document.getElementById("total").innerText = totalCount;
        resultDict = result;
        pageitemNum = Math.round(totalCount/numPerPage);
        console.log(pageitemNum)
        for (var i=1;i<=totalCount;i++){
            var x = document.createElement("img");
            var y = document.createElement("a")
            // var z = document.createElement("div")
            x.setAttribute("class", "right-div-img")
            x.setAttribute("src", "/videoimg/"+result[i].split('.')[0]+".jpg")
            // y.setAttribute("href","#top")
            // y.setAttribute("onclick", "mainVideoPlay(event)")
            // y.setAttribute("class", "a-video")

            // y.setAttribute("href", "#top")
            // x.setAttribute("alt",result[i].split('.')[0])
            // y.addEventListener(onclick, mainVideoPlay(event))
            // x.setAttribute("width", "114px")
            // x.setAttribute("height","70px")
            // x.setAttribute("padding", "5px")
            // x.setAttribute("border-radius", "15px")
            y.setAttribute("href", "/video/"+result[i])
            document.getElementById("right-div").appendChild(y);
            // z.appendChild(y)
            y.appendChild(x);
        }
        //////////
    })
}



function mainVideoPlay(event) {
    x = event.currentTarget.firstChild
    var video = "/video/"+x.alt+".mp4"
    console.log(video)
    // document.getElementById("left-div").innerHTML=""
    document.getElementById("mainvideo-play").src = video
}