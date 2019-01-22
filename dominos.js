document.getElementById('play-button').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

// trying to close the modal by clicking outside of it

$(document).click(function(event){
    //$('.bg-modal').removeClass("visible")
    if (!$(event.target).closest(".content-modal,.button").length){
        $("body").find(".content-modal").removeClass("visible");
    }
});

// click on submit, and it's should dispatch seven cart for 3 people

//