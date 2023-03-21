//creiamo l'array con le immagini e prendiamo la classe che ci serve
const imgArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg","img/04.jpg" ,"img/05.jpg"];
const listItem = document.getElementsByClassName('list-item');
// console.log(listItem);

//mettiamo le immagini nell'html 
for (let i = 0; i < imgArray.length; i++) {    
    const currentElem = imgArray[i]
    for (j = 0; j < listItem.length; j++){
        listItem[j].innerHTML +=` 
            <div class="item">
                <img src="${currentElem}" alt="">
            </div>`
    }
}
// console.log(listItem.innerHTML);

const leftItemArray = document.querySelectorAll('.left-slide .item');
const rightItemArray = document.querySelectorAll('.slider .item')
const rightImgArray = document.querySelectorAll('.slider .item img')
// console.log(leftItemArray);
let itemArrayIndex = 0
leftItemArray[itemArrayIndex].classList.add('active')
rightItemArray[itemArrayIndex].classList.add('border-opacity')
rightImgArray[itemArrayIndex].classList.add('filter')

const upbtn = document.querySelector('.up-slide')
upbtn.addEventListener('click', function() {
    clearInterval(interval)

    // togliere active da quello corrente
    leftItemArray[itemArrayIndex].classList.remove('active')
    rightItemArray[itemArrayIndex].classList.remove('border-opacity')
    rightImgArray[itemArrayIndex].classList.remove('filter')
    
    //condizione
    if (itemArrayIndex < imgArray.length - 1){
            itemArrayIndex++;
            // aggiungere active a quello successivo
        } else {
            itemArrayIndex = 0
        }
    // aggiungere active a quello successivo
    leftItemArray[itemArrayIndex].classList.add('active')
    rightItemArray[itemArrayIndex].classList.add('border-opacity')
    rightImgArray[itemArrayIndex].classList.add('filter')
    interval = setInterval(autoplay, 3000)
})

// implementiamo la freccia in basso
const dwnbtn = document.querySelector('.down-slide');
dwnbtn.addEventListener('click', function(){
    clearInterval(interval)
    // togliere active da quello corrente
    leftItemArray[itemArrayIndex].classList.remove('active')
    rightItemArray[itemArrayIndex].classList.remove('border-opacity')
    rightImgArray[itemArrayIndex].classList.remove('filter')
    
    // condizione
    if(itemArrayIndex > 0 ){
        // decremento l'index
        itemArrayIndex--;
        // aggiungere active a quello precedente
    } else {
        itemArrayIndex = imgArray.length - 1
    }
    // aggiungere active a quello successivo
    leftItemArray[itemArrayIndex].classList.add('active')
    rightItemArray[itemArrayIndex].classList.add('border-opacity')
    rightImgArray[itemArrayIndex].classList.add('filter')
    interval = setInterval(autoplay, 3000)
})

let interval = setInterval(autoplay, 3000)

function autoplay(){
        // togliere active da quello corrente
        leftItemArray[itemArrayIndex].classList.remove('active')
        rightItemArray[itemArrayIndex].classList.remove('border-opacity')
        rightImgArray[itemArrayIndex].classList.remove('filter')
        
        //condizione
        if (itemArrayIndex < imgArray.length - 1){
                itemArrayIndex++;
                // aggiungere active a quello successivo
            } else {
                itemArrayIndex = 0
            }
        // aggiungere active a quello successivo
        leftItemArray[itemArrayIndex].classList.add('active')
        rightItemArray[itemArrayIndex].classList.add('border-opacity')
        rightImgArray[itemArrayIndex].classList.add('filter')
        
}

// BONUS 2
for (let i = 0; i < leftItemArray.length; i++) {
    const currentItem = leftItemArray[i];
    currentItem.addEventListener('mouseover', function(){
        clearInterval(interval)
    })
    currentItem.addEventListener('mouseout', function(){
        interval = setInterval(autoplay, 3000)
    })
}
