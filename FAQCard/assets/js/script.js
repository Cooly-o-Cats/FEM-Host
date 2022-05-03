let activeFaq = undefined;

document.querySelectorAll(".faq").forEach(item => {
    item.addEventListener("click", event => {
        closeAccordians();
        openAccordian(item);
    });
});

function closeAccordians(){
    document.querySelectorAll(".faq").forEach(item => {
        const answer = item.querySelector(".answer");

        item.classList.remove("active")
        item.classList.add("closed")
        answer.style.display = "none"
    });
};

function openAccordian(faq){
    const answer = faq.querySelector(".answer");
    if(activeFaq === faq){
        closeAccordians();
        activeFaq = undefined;
    }
    else{
        answer.style.display = "block"
        faq.classList.remove("closed");
        faq.classList.add("active");
        activeFaq = faq;
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }




