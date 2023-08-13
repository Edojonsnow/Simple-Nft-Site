// 
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 });
tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1  },"-=1");
tl.fromTo(".arrow-gif", { opacity: 0 }, { opacity: 1, duration: 1  },);
tl.fromTo(".header-subtext", { opacity: 0 }, { opacity: 1, duration: 1 });



AOS.init({
    duration: 1000,
    easing: 'ease-in-out-back'
  });
  
  $("i").hover(
    function(){
      $(this).addClass("fa-spin");
    },function(){
      $(this).removeClass("fa-spin");
    }
  )
;

var i =0, text;
text = "ProjectAva is a 3333 collection on the Solana blockchain, with the aim of building a strong and diverse community of individuals and traders."

function typing(){
  if(i<text.length){
    document.getElementById("subtext").innerHTML+= text.charAt(i);
    i++;
    setTimeout(typing,100)
  }
}
typing()