//绑定canvas的点击事件
let bindCanvas = function (canvasId) {
    let canvas = document.getElementById(canvasId);
    let context = canvas.getContext("2d");
    canvas.setAttribute("scale",1);
    canvas.style.cursor="pointer"
    context.shadowBlur = 20;
    context.shadowColor = "#000000";
    context.clearRect(0, 0, canvas.width, canvas.height);

    canvas.onclick = function (event) {
        let x = event.offsetX;
        let y = event.offsetY;
        let scale=this.getAttribute("scale");
        let imageData = context.getImageData(x/scale, y/scale, 1, 1);
        // 获取该点像素数据
        let pixel = imageData.data;
        let r = pixel[0];
        let g = pixel[1];
        let b = pixel[2];
        let a = pixel[3] / 255;

        let rHex = r.toString(16);
        r < 16 && (rHex = "0" + rHex);
        let gHex = g.toString(16);
        g < 16 && (gHex = "0" + gHex);
        let bHex = b.toString(16);
        b < 16 && (bHex = "0" + bHex);
        let rgbaColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
        let rgbColor = "rgb(" + r + "," + g + "," + b + ")";
        let hexColor = "#" + rHex + gHex + bHex;
        let coordinate = "(" + x + "," + y + ")"
        let result = {
            rgba: rgbaColor,
            rgb: rgbColor,
            hex: hexColor,
            r: r,
            g: g,
            b: b,
            a: a,
            x: x,
            y: y,
            coordinate : coordinate
        };
        showResult(result);
    }

    return canvas;
}

//更改图片后，更改canvas大小 重新画图
let pickImg = function (canvas, img) {
    console.log("-->pick: " + img.width + "  " + img.height);
    var containerNode=canvas.parentElement; 
    let cw=containerNode.clientWidth-20;
    let ch=containerNode.clientHeight-20;

    let h,w,s;
    //img h/w > ch/cw内容比container可视区域小,高度充满
    if(img.height*1.0/img.width>ch*1.0/cw){
        h=ch;//padding 20
        s=ch*1.0/img.height;
        w=img.width*s;
        console.log("高度填满");
    }
    else{
        w=cw;
        s=cw*1.0/img.width;
        h=img.height*s;
        console.log("宽度填满")
    }
    console.log("h---》"+h);
    console.log("w---》"+w);
    canvas.setAttribute("scale",s);
    canvas.width=img.width;
    canvas.height=img.height;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";

    if(h<ch){
        console.log("h-->"+h+" "+"ch-->"+ch);
        canvas.style.marginTop=(ch-h)/2+"px";
    }else{
        canvas.style.marginTop="0px";
    }
    let context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
}

//显示结果
let showResult = function (result) {
    document.getElementById("R-value").innerText = result.r;
    document.getElementById("G-value").innerText = result.g;
    document.getElementById("B-value").innerText = result.b;
    document.getElementById("a-value").innerText = result.a;
    document.getElementById("axis-x").value = result.x;
    document.getElementById("axis-y").value = result.y;
    document.getElementById("rgba-value").innerText = result.rgba;
    document.getElementById("hex-value").innerText = result.hex;
    document.getElementById("rgb-value").innerText = result.rgb;
    document.getElementById("coordinate").innerText = result.coordinate;
    document.getElementById("oldColor").style.backgroundColor = document.getElementById("newColor").style.backgroundColor;
    document.getElementById("newColor").style.backgroundColor = result.rgb;
    
}

let canvasdom = bindCanvas("canvas");
let img = new Image();
// var nilai = $('#imagecap').val();
// img.src = nilai;
img.src = document.getElementById("imagecap").value;

img.onload = function () {


    pickImg(canvasdom, img);
}

let fileBtn = document.getElementById("filebtn");
fileBtn.addEventListener("change", function (e) {
    let f = this.files[0];
    if (!f.type.match("image.*")) {
        return;
    }

    let reader = new FileReader();
    reader.onload = function (event) {
        let bytes = this.result;
        let image = new Image();
        image.src = "" + bytes;
        image.onload = function () {
            pickImg(canvasdom, image);
        }
    }
    reader.readAsDataURL(f);
})

let zoomInBtn = document.getElementById("zoomin");
zoomInBtn.onclick = function () {
    zoomCancas(canvasdom, 2);
}
let zoomOutBtn = document.getElementById("zoomout");
zoomOutBtn.onclick = function () {
    zoomCancas(canvasdom, 0.5);
}

let zoomCancas = function (canvasNode, scaleValue) {
    let cssWidth = parseInt(canvasNode.style.width.slice(0,canvasNode.style.width.length-2));
    let cssHeight = parseInt(canvasNode.style.height.slice(0,canvasNode.style.height.length-2));
    canvasNode.style.width = cssWidth*scaleValue+"px";
    canvasNode.style.height = cssHeight*scaleValue+"px";
    canvasNode.setAttribute("scale",canvas.getAttribute("scale")*scaleValue);
    console.log(cssWidth + " " + cssHeight);
}