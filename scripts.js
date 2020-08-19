
let movieName=document.querySelectorAll('.moves');
let movieDate=document.querySelector('input[type="date"]');
let movieTime=document.querySelector('.show-time');
let amount=document.querySelector('.amount');
let pop=document.querySelector('.pop-up-container');
let print=document.querySelector('.print-preview');
let list=document.querySelectorAll('input[type="radio"]')
let seatBlock=document.querySelector('.seat-arrange')
let film=document.querySelector('.movie-name');
let counts=document.querySelector('.total-seats');
let date=document.querySelector('.show-date');
let dates=document.querySelector('#movie-date');
let clock=document.querySelector('.show-timesss');
let matinee=document.querySelectorAll('.show-time');
let datenow=document.querySelector('.datenow');
let timenow=document.querySelector('.timenow');
let localtime=document.querySelector('.locale');
let seatCode=document.querySelector('.seat-number');

// Choosing movie and getting price:

let unitPrice=0;
const price=function(){
     list.forEach((radio)=>{
    radio.addEventListener('click',()=>{
         if(radio.checked){
              let rate=radio.value;
              let movieName=radio.nextElementSibling.innerText;
              film.innerText=`Movie-${movieName}`
               unitPrice=rate;
              return rate;
         }
    })
})
}
price();

// Selecting seats and taking seat number and total number of seats:

let totalCount=0;
let seatNumbers=[]
const numbers=function(){
     seatBlock.addEventListener('click', e =>{
     if(e.target.classList.contains('available')){
          e.target.classList.toggle('selected');
     let selectedSeats=document.querySelectorAll('.row .seat.selected');
     let totalseat=selectedSeats.length;
     totalCount=totalseat;
     counts.innerText=`Seats-${totalseat}`


     selectedSeats.forEach((sts)=>{
          let seatts = sts.getAttribute('data') //get seat number
          if (seatNumbers.indexOf(seatts) === -1) {
          seatNumbers.push(seatts); //only push unique seats in to the array
           }
           seatCode.innerText=`Seat Nos:-${seatNumbers}`;
          
     });
}});}

numbers();

// Selecting Time of the movie show:

matinee.forEach((timess)=>{
     timess.addEventListener('click',()=>{
          let tim=timess.value;
          clock.innerText=`Time-${tim}`;
     })
})

// Selecting date of the movie:

dates.addEventListener('change',()=>{
     let newDate=dates.value;
     date.innerText=`Date-${newDate}`;
})



// Current date and time on DOM:
const nows=new Date();
const dat=(nows.toDateString())
const timenows=(nows.toTimeString())
var newtime=timenows.slice(0,5);
const locale=(nows.toLocaleString())
datenow.innerText=`Date: ${dat}`;
timenow.innerText=`Time: ${newtime}`;
localtime.innerText=`${locale}`;

// Booking summary display button:

print.addEventListener('click',()=>{
     pop.style.display="flex";
     let maxPrice=unitPrice*totalCount;
     amount.innerText=`Total Price to be paid=${unitPrice} * ${totalCount} = ${maxPrice}`;
});

// Booking summary close click:
pop.addEventListener('click',e=>{
     if(!e.target.classList.contains('pop-up')){
         pop.style.display="none";
     }
})
