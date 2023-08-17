var click = false;
// var main = document.getElementById("textarea")

document.getElementById("bold").addEventListener("click",function(){
    
    if (click == false){
        const textarea = document.getElementById("textarea").style.fontWeight = "bold"
        
        click = true;

    }
    else{
        const textarea = document.getElementById("textarea").style.fontWeight = "normal"
        click = false;
    }
})

// italic
var click1 = false;

document.getElementById("italic").addEventListener("click",function(){
    if (click1 == false){
        const textarea = document.getElementById("textarea").style.fontStyle = "italic"
        click1 = true;
    }
    else{
        const textarea = document.getElementById("textarea").style.fontStyle = "normal"
        click1 = false;
    }
})
var click2 = false;
// underscore
document.getElementById("under").addEventListener("click",function(){
    if (click2 == false){
        const textarea = document.getElementById("textarea").style.textDecoration = "underline"
        click2 = true;
    }
    else{
        const textarea = document.getElementById("textarea").style.textDecoration = "none";
        click2 = false;
    }
})


// text align

document.getElementById("right").addEventListener("click",function () {
    
        const textarea = document.getElementById("textarea").style.textAlign = "right"
        
    
    // else{
    //     const textarea = document.getElementById("textarea").style.textAlign = "left"
    //     click += 1;
    // }
})

document.getElementById("center").addEventListener("click",function () {
 
        const textarea = document.getElementById("textarea").style.textAlign = "center"
        
    
    // else{
    //     const textarea = document.getElementById("textarea").style.textAlign = "left"
    //     click += 1;
    // }
})

document.getElementById("justify").addEventListener("click",function () {

        const textarea = document.getElementById("textarea").style.textAlign = "justify"
        
    
    // else{
    //     const textarea = document.getElementById("textarea").style.textAlign = "left"
    //     click += 1;
    // }
})

document.getElementById("left").addEventListener("click",function () {

        const textarea = document.getElementById("textarea").style.textAlign = "left"
        
 
    // else{
    //     const textarea = document.getElementById("textarea").style.textAlign = "right"
    //     click3 += 1;
    // }
})

document.getElementById("color").addEventListener("change",function(){
    const code = document.getElementById("color").value
    const textarea = document.getElementById("textarea").style.color = code

})
