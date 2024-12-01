const Pricing_contain_main=document.getElementById('Pricing_contain_main');
const Pricing_contain_main_A=document.getElementById('Pricing_contain_main_A');
const rowaddevntbg = document.querySelectorAll('.rowaddevntbg');
const rowaddevntbg_txt=document.querySelectorAll('.rowaddevntbg_txt');
const product_li_id=document.getElementById('product_li_id');
const company_ld_li=document.getElementById('company_ld_li');
const en_id_li=document.getElementById('en_id_li');
const logo_a=document.getElementById('logo_a');
const logo_b=document.getElementById('logo_b');
const logo_c=document.getElementById('logo_c');
const lft_col_a_div=document.getElementById('lft_col_a_div');
const as_containr_left_side_bar_apear=document.getElementById('as_containr_left_side_bar_apear');




// console.log(product_li_id.lastElementChild);



rowaddevntbg.forEach((e,idx)=>{
e.addEventListener('mouseover',()=>{
e.style.backgroundColor='#F5F6F7';
rowaddevntbg_txt[idx].classList.add('text_hoverglow');

    


})
});
rowaddevntbg.forEach((e,idx)=>{
    e.addEventListener('mouseleave',()=>{
    e.style.backgroundColor='transparent';
    rowaddevntbg_txt[idx].classList.remove('text_hoverglow');

    })
    });


Pricing_contain_main.addEventListener('mouseover',()=>{
    Pricing_contain_main.style.backgroundColor=" #F5F6F7";
    Pricing_contain_main_A.style.color='#55B0FC';
})

Pricing_contain_main.addEventListener('mouseleave',()=>{
    Pricing_contain_main.style.backgroundColor="transparent";
    Pricing_contain_main_A.style.color='black';
});
// product 
let i_product_li_id=0;
product_li_id.addEventListener('click',()=>{
    logo_a.classList.add('rotate30');

    
    product_li_id.classList.toggle('clolr');
    product_li_id.firstChild.classList.toggle('text_hoverglow');
    product_li_id.lastElementChild.color='white';
    // product_li_id.lastChild.style.backgroundColor='white';
    // product_li_id.lastChild.style.color='white';
    if(i_product_li_id==0){
        product_li_id.lastElementChild.classList.remove('d-lg-none')
        product_li_id.lastElementChild.classList.add('d-lg-block');
        i_product_li_id=1;
        logo_a.classList.add('rotate30');
    }else{
        product_li_id.lastElementChild.classList.add('d-lg-none')
        product_li_id.lastElementChild.classList.remove('d-lg-block');
        i_product_li_id=0;
        logo_a.classList.remove('rotate30');
        
    }
    
    
});

product_li_id.addEventListener('mouseover',()=>{
product_li_id.children[0].style.color='#55B0FC';

});

product_li_id.addEventListener('mouseleave',()=>{
    product_li_id.children[0].style.color='black';
})
    


// company?

let i_company_ld_li=0;


company_ld_li.addEventListener('click',()=>{
    company_ld_li.classList.toggle('clolr');
    company_ld_li.firstChild.classList.toggle('text_hoverglow');
    company_ld_li.lastElementChild.color='white';
    console.log('hellow frist');
    
    if(i_company_ld_li==0){
        company_ld_li.lastElementChild.classList.remove('d-lg-none');
        company_ld_li.lastElementChild.classList.add('d-lg-block');
        i_company_ld_li=1;
        console.log('hellow');
        logo_b.classList.add('rotate30');
    }else{
        company_ld_li.lastElementChild.classList.add('d-lg-none');
        company_ld_li.lastElementChild.classList.remove('d-lg-block');
        i_company_ld_li=0;
        logo_b.classList.remove('rotate30');
    }
    
})

company_ld_li.addEventListener('mouseover',()=>{
    company_ld_li.children[0].style.color='#55B0FC';
    
    });
    
    company_ld_li.addEventListener('mouseleave',()=>{
        company_ld_li.children[0].style.color='black';
    });




    // en 
    
let i_en_id_li=0;


en_id_li.addEventListener('click',()=>{
    console.log('click')
    en_id_li.classList.toggle('clolr');
    en_id_li.firstChild.classList.toggle('text_hoverglow');
    en_id_li.lastElementChild.color='white';
    
    
    if(i_en_id_li==0){
        en_id_li.lastElementChild.classList.remove('d-lg-none');
        en_id_li.lastElementChild.classList.add('d-lg-block');
        i_en_id_li=1;
        
        logo_c.classList.add('rotate30');
    }else{
        en_id_li.lastElementChild.classList.add('d-lg-none');
        en_id_li.lastElementChild.classList.remove('d-lg-block');
        i_en_id_li=0;
        logo_c.classList.remove('rotate30');
    }
    
})

en_id_li.addEventListener('mouseover',()=>{
    en_id_li.children[0].style.color='#55B0FC';
    
    });
    
    en_id_li.addEventListener('mouseleave',()=>{
        en_id_li.children[0].style.color='black';
    });


    // en2 
    let i_lft_col_a_div=0;
    lft_col_a_div.addEventListener('click',()=>{
        lft_col_a_div.classList.toggle('clolr');
        lft_col_a_div.firstElementChild.classList.toggle('text_hoverglow');
        lft_col_a_div.lastElementChild.color='white';  


      if(i_lft_col_a_div==0){
        lft_col_a_div.children[1].classList.remove('d-none');
        lft_col_a_div.children[1].classList.add('d-block');
         i_lft_col_a_div=1;
      }else{
        lft_col_a_div.children[1].classList.add('d-none');
        lft_col_a_div.children[1].classList.remove('d-block');
         i_lft_col_a_div=0;
     }
    }); 
    lft_col_a_div.addEventListener('mouseover',()=>{
        lft_col_a_div.children[0].style.color='#55B0FC';
        
        });
        
        lft_col_a_div.addEventListener('mouseleave',()=>{
            lft_col_a_div.children[0].style.color='black';
        });
    