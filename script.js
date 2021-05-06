
var i=0;

document.querySelector('.toggle_button_container').addEventListener('click',function(){
    console.log('clicking......');

    if(i%2==0){
        console.log(`${i+1} click`);
        document.getElementById('header_menu').style.display ="none";
        i++;
    }
    else{
        console.log(`${i+1} click`);
        document.getElementById('header_menu').style.display ="block";
        i++;  
    }
})