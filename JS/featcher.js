const clickbtnparra=document.querySelectorAll('.click_this_45btn');
const iconthis344=document.querySelectorAll('.click_this_45btn_b');
const clickbtnopen_para=document.querySelectorAll('.click_this_45btn_a');
const parentboss=document.querySelectorAll('.clicklopens45')
for(let i=0; i<clickbtnopen_para.length; i++){
    console.log(i);
    clickbtnparra[i].addEventListener('click',()=>{
        iconthis344[i].classList.toggle('fa-angle-down');
        iconthis344[i].classList.toggle('fa-angle-up');
        clickbtnopen_para[i].classList.toggle('d-none');
        parentboss[i].classList.toggle('bg-infos');
        parentboss[i].classList.toggle('adsfdsf345s4eer4');
    })


}
