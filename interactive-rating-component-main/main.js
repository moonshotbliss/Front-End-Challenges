let  rating = document.getElementById('rating-id');
let ratingItems  = rating.getElementsByClassName('rating');
let  ratingArray = Array.from(ratingItems);
let submit = document.getElementById('submitValue');
let ratingContainer = document.querySelector('.rating-cont');
let thankyouContainer = document.querySelector('.thankyou-cont');
let result = document.querySelector('.selected-cont')
let backPage = document.getElementById('delete');

// Selected Value
ratingArray.forEach(function(items){
    items.addEventListener('click',function (e){
        e.preventDefault();
        ratingArray.forEach(function (active){
            active.classList.remove("selected");
            //console.log(active)
            
        });
    
        items.classList.add('selected');
        //console.log(items);
    });
});
// Submit Value
submit.addEventListener('click', function(e){
    

    e.preventDefault();
    let selectedRating = document.querySelector('.selected');
    let selectedValue = selectedRating.textContent;
    console.log(selectedValue);
    ratingContainer.style.display = 'none';
    thankyouContainer.style.display = 'flex';
    result.textContent = `You selected ${selectedValue} out of 5`

});
//Back Home

backPage.addEventListener('click',function(e){
 
    ratingContainer.style.display = 'flex';
    thankyouContainer.style.display = 'none';
})