import { products } from "../data/products.js";



renderProducts("All");
magnifingTheImages();

document.querySelectorAll(".js-category-button").forEach((button)=>{
  button.addEventListener('click',()=>{
    let category = button.dataset.categoryType;
    renderProducts(category);
    magnifingTheImages();
    console.log(category);
  })
});

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:true,
  dots:true,
  responsive:{
  0:{
    items:1
  },
  900:{
    items:2
  }
  }
});

// sticky navigation menu 
let headerOffestTop = $('.header').height()+50;
console.log(headerOffestTop);

headerFixed();

function headerFixed(){
  if($('.header').length){
    $(window).scroll(()=>{
      let scroll = $(window).scrollTop();
      if(scroll>=headerOffestTop){
        $('.header').addClass('header-fixed');
      }else
      $('.header').removeClass('header-fixed');

    });
  }
}




function magnifingTheImages(){
  $('.test-popup-link').magnificPopup({
    type: 'image',
    gallery:{enabled:true}
  });
}
function renderProducts(type){
  let matchingItem;
  let productsHtml = '';
  document.querySelector(".js-products-container").innerHTML='';
  products.forEach((product)=>{

    if(type==='All'){
      matchingItem = product;
    }
    else if(product.category===type){
      matchingItem = product;
    }

 if(matchingItem){ 
   let html = `
   <div class="product">
   <div class="product-img">
     <a class="test-popup-link" href=${matchingItem.img}>
       <img src=${matchingItem.img} alt="">
     </a>     
   </div>
   <div class="product-info">
     <h1>${matchingItem.name}</h1>
     <h4>${matchingItem.category}, ${matchingItem.kind}</h4>
   </div>          
 </div>`;
    productsHtml += html;
    matchingItem = '';
  }
  });
  document.querySelector(".js-products-container").innerHTML=productsHtml; 

}
