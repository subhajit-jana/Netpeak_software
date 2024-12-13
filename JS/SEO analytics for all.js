const sco_issu1=document.getElementById('sco_issu1');
const sco_issu1_b=document.getElementById('sco_issu1_b');
// 2nd
const sco_issu2=document.getElementById('sco_issu2');
const sco_issu2_b=document.getElementById('sco_issu2_b');
// 3rd 
const sco_issu3=document.getElementById('sco_issu3');
const sco_issu3_b=document.getElementById('sco_issu3_b');
// 4th 
const sco_issu4=document.getElementById('sco_issu4');
const sco_issu4_b=document.getElementById('sco_issu4_b');
bg_change(sco_issu1_b,sco_issu1);
// other remove 
bg_none(sco_issu2_b,sco_issu2);
bg_none(sco_issu3_b,sco_issu3);
bg_none(sco_issu4_b,sco_issu4);


sco_issu1.addEventListener('click',()=>{
bg_change(sco_issu1_b,sco_issu1);
// other remove 
bg_none(sco_issu2_b,sco_issu2);
bg_none(sco_issu3_b,sco_issu3);
bg_none(sco_issu4_b,sco_issu4);
})


sco_issu2.addEventListener('click',()=>{
    bg_change(sco_issu2_b,sco_issu2);
    // other 
    bg_none(sco_issu1_b,sco_issu1);
    bg_none(sco_issu3_b,sco_issu3);
    bg_none(sco_issu4_b,sco_issu4);


    
});

sco_issu3.addEventListener('click',()=>{
bg_change(sco_issu3_b,sco_issu3);
// other 
bg_none(sco_issu1_b,sco_issu1);
bg_none(sco_issu2_b,sco_issu2);
bg_none(sco_issu4_b,sco_issu4);


});
sco_issu4.addEventListener('click',()=>{
    bg_change(sco_issu4_b,sco_issu4);
    // other 
    bg_none(sco_issu1_b,sco_issu1);
    bg_none(sco_issu2_b,sco_issu2);
    bg_none(sco_issu3_b,sco_issu3);

    
})



function bg_change(a,b){
   a.style.display="block "
   b.style.backgroundColor="#ffbfbf"
}
function bg_none(a,b){
    a.style.display="none"
    b.style.backgroundColor="white"
 }