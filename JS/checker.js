const firstclick=document.getElementById('clickfor6th');
const fistp=document.getElementById('clickfor6th_p');
// 
const imgfirst=document.getElementById('imgscr');
// 
const firstclick2=document.getElementById('clickfor6th2');
const fistp2=document.getElementById('clickfor6th_p2');
// 
const firstclick3=document.getElementById('clickfor6th3');
const fistp3=document.getElementById('clickfor6th_p3');
// 
const firstclick4=document.getElementById('clickfor6th4');
const fistp4=document.getElementById('clickfor6th_p4');
// 
const firstclick5=document.getElementById('clickfor6th5');
const fistp5=document.getElementById('clickfor6th_p5');
const pclickBox=document.querySelectorAll(".click_wrpaer")

// 

firstclick.addEventListener('click',()=>{
    addblock(fistp);
    adddd(fistp2,fistp3,fistp4,fistp5);
    imgfirst.src="../IMG/seo3.jpg"
   

})

firstclick2.addEventListener('click',()=>{
    addblock(fistp2);
    adddd(fistp,fistp3,fistp4,fistp5);
    imgfirst.src="../IMG/seo2.jpg"

})

firstclick3.addEventListener('click',()=>{
    addblock(fistp3);
    adddd(fistp,fistp2,fistp4,fistp5);
    imgfirst.src="../IMG/seo4.jpg"

})

firstclick4.addEventListener('click',()=>{
    addblock(fistp4);
    adddd(fistp,fistp2,fistp3,fistp5);
    imgfirst.src="../IMG/seo5.jpg"

})
firstclick5.addEventListener('click',()=>{
    addblock(fistp5);
    adddd(fistp,fistp2,fistp3,fistp4);
    imgfirst.src="../IMG/seo9.png"

})

// funtons
function adddd(a,b,c,d){

    
    c.classList.add("d-none");
    b.classList.add("d-none");
    a.classList.add("d-none");
    d.classList.add("d-none");
    a.parentElement.style.backgroundColor="white";
    b.parentElement.style.backgroundColor="white";
    c.parentElement.style.backgroundColor="white";
    d.parentElement.style.backgroundColor="white";
}

function addblock(a,b){
    a.classList.add('d-block')
    a.classList.remove('d-none');
    a.parentElement.style.backgroundColor="#CAD39C";

}



pclickBox.forEach((a)=>{
    a.addEventListener('mouseover',()=>{
    a.classList.add('coloraddd');
    })
    a.addEventListener('mouseleave',()=>{
        a.classList.remove('coloraddd');
        })

})