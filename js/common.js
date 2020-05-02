
function videolist() {
    let numPerPage = 20;
    var video;
    var ip_addr = document.location.hostname
    $.get("http://"+ip_addr+":9527/videolist", function (result) {

        totalCount = Object.keys(result).length;
        document.getElementById("total").innerText = totalCount;
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

}
