const password_show_hide_btn=document.getElementById('password_show_hide_btn');
const input_password_fill=document.getElementById('input_password_fill');

password_show_hide_btn.addEventListener('click',()=>{
    console.log("hellwo world");
    
if(input_password_fill. type =="password"){
    input_password_fill.type="text"
}else{
    input_password_fill.type = "password"
}
})
