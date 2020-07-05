let html = document.querySelector("#html")
let sytle = document.querySelector("#style")
let n = 1;
let string = `
/*这是一段自我介绍
hello everyone
接下来我要做一个动态的页面了
**/
#div1{
    border : 1px solid red;
    width : 300px;
    height :300px;
}
/*接下来开始做一个八卦图
*首先，变成一个圆形
**/
#div1{
    border-radius : 50%;
    box-shadow : 0 0 3px rgb(0,0,0,0.5);
    border : none;   
}
/*接下来开始
*分调阴阳
**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 000%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 49%, rgba(0,0,0,1) 100%);
}
#div1::before{
    width : 150px;
    height : 150px;
    top : 0;
    left : 50%;
    transform : translateX(-50%);
    background: #000;
    border-radius : 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 000%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width : 150px;
    height : 150px;  
    bottom : 0;
    left : 50%;
    transform : translateX(-50%);
    background: #fff;
    border-radius : 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 000%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;


let string2 = "";
// string = string.replace(/\n/g,"<br>")



let step = () =>{
    setTimeout(()=>{
        string2 += string[n] === "\n" ? "<br>" : string[n];
        // 如果当前字符为回车，则变<br> 负责加该字符
            n += 1;
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999)
        if(n < string.length){
            step();
        }
    },0)
};

step();
