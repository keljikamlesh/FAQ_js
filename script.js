
const myAccordion = function() {
    const headTab = document.getElementsByClassName('faq-head');
    let headCont = document.getElementsByClassName('faq-cont');
    for(let i = 0; i < headTab.length; i++  ){        
        headTab[i].addEventListener('click', function(){  
            for(let i=0; i < headTab.length; i++){
                headTab[i].classList.toggle('active'); 
            } 
            this.className += ' active';
            const matchdiv = this.getAttribute('data-tab');
            for(let i=0; i < headCont.length; i++){
                headCont[i].style.transform = 'scaleY(0)';
                headCont[i].style.height = '0';
            } 
            document.getElementById(matchdiv).style.transform = 'scaleY(1)';
            document.getElementById(matchdiv).style.height = 'auto';            
            document.getElementById(matchdiv).classList.toggle = 'toggle';            

        },false);
    }
}
myAccordion();

