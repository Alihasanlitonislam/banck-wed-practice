document.getElementById("diposit").addEventListener("click", function(){
    //pat 1
    const dipositFiet = document.getElementById("diposit-input");
    const dipositString = dipositFiet.value;
    const diposit = parseFloat(dipositString)
    dipositFiet.value = "";
    //pat 2
    const dipositTotleElement = document.getElementById("diposit-totle");
    const dipositTotleString = dipositTotleElement.innerText;
    const dipositTotle = parseFloat(dipositTotleString);
    dipositTotleElement.innerText = dipositTotle + diposit;
    //pat 3
    const averageAmound = document.getElementById("average-amound")
    const averageAmoundString = averageAmound.innerHTML;
    const average = parseFloat(averageAmoundString);
    averageAmound.innerText = dipositTotle + diposit + average;
});

document.getElementById("withdraw").addEventListener("click", function(){
    //pat 1
    const withdrawFiet = document.getElementById("withdraw-input");
    const withdrawAmaound = withdrawFiet.value;
    const withdraw = parseFloat(withdrawAmaound)
    //pat 2
    const withdrawTotleElement = document.getElementById("withdraw-totole")
    const withdrawString = withdrawTotleElement.innerText;
    const withdrawTotle = parseFloat(withdrawString);
    const withdrawAmaoundTotle = withdrawTotle + withdraw
    withdrawFiet.value = "";
    //pat 3
    const averageAmound = document.getElementById("average-amound")
    const averageAmoundString = averageAmound.innerHTML;
    const average = parseFloat(averageAmoundString);
    const averageAmoundTotle = average - withdrawAmaoundTotle;
    
    if(averageAmoundTotle >= withdrawAmaoundTotle){
        //pat 2 value
        withdrawTotleElement.innerText = withdrawTotle + withdraw;
        //pat 3 value
        averageAmound.innerText = averageAmoundTotle;

    }
    else{
        alert(" Flex Your Amoud")
    }
})