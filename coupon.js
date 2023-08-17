document.getElementById("juta1").addEventListener("click",function(){
    addShoePrice(50)
})

document.getElementById("juta2").addEventListener("click",function(){
    addShoePrice(80)
})

document.getElementById("juta3").addEventListener("click",function(){
    addShoePrice(60)
})



function addShoePrice(a){
    const total = document.getElementById("total")
    const intTotal = parseFloat(total.innerText)
    const temp = document.getElementById("total")
    const newTotal = intTotal+a
    console.log(newTotal)
    temp.innerText = newTotal


}
var couponUse = false;
document.getElementById("button").addEventListener("click",function(){
    const get_value = document.getElementById("coupon")
    
    if (get_value.value === "NEW_KAMAL" && couponUse == false){
        couponUse = true;
        const total = document.getElementById("total")
        const intTotal = parseFloat(total.innerText)
        const discount = 0.1 * intTotal;
        const temp = document.getElementById("total")
        const newTotal = intTotal - discount
        console.log(newTotal)
        temp.innerText = newTotal
        const totalText = document.getElementById("totalText");
        totalText.innerText = "Less total"


    }
    else{
        alert("You already used or wrong coupon")
    }
    get_value.value = "";

})

