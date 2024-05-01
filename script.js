const firstinput = document.querySelector('#firstinput');
const add = document.querySelector('#add');
const contain = document.querySelector('.contain');
// Evvelce htmldaa yazdigimiz input button ve diger elementleri .js-da querrySelector ile documente yeni HTML-a birbasa elagelendiririk.


const clearbuttons = document.querySelectorAll('.delete');
clearbuttons.forEach(clearelements => {
clearelements.addEventListener('click', (e)=>{
 e.target.parentElement.parentElement.removeChild(e.target.parentElement)
 })
})
/* Burda parent elementi sile bilmediyimiz ucun childin  parentinin parentine muraciet edib parentimizi sildiririk */
  
add.addEventListener('click', ()=>{

let insidediv =document.createElement('div')
insidediv.classList.add('inside');

let checkboxone = document.createElement('input')
checkboxone.type = 'checkbox';
checkboxone.classList.add('mycheckbox');

let pelement = document.createElement('p');
pelement.innerText = firstinput.value;

let butonelement = document.createElement('button');
butonelement.innerText = "Clear"
butonelement.classList.add('clear');
 /*Burada sonradan .js-da yaratdiqimiz buton input ve checklerimizi create edirik, class id innertextini teyin edirik */

insidediv.append(checkboxone, pelement , butonelement);
 contain.appendChild(insidediv)
/*Burda ise evvelce append metodu ile bayag yaratdigimiz insidediv divine button checkbox ve p elementini elave ediirik.
daha sonra insidediv elementimizide evvel yaratdigimiz contain divine elav edirik */

firstinput.value= ("");
//birinci teyin etdiyimiz inputun deyerini 0-a beraber edirik

const myCheckBoxes = document.querySelectorAll('.mycheckbox')
//yaratdigimiz ve yaradacigimiz checkboxlarin hamisini secmek istediyimiz ucun queryselectorall metodundan istifade edirik

    myCheckBoxes.forEach(dovr=> {
        dovr.addEventListener('input', (e)=>{
     if (e.target.checked) {
               e.target.nextElementSibling.style.textDecoration = 'underline'
            }else{
                e.target.nextElementSibling.style.textDecoration = 'none'
            }
        })
    })
     /* Yuxarida evvelce addeventlistener metodundan istifade edirik , shert teyin edirik ki target checked aninda 
  nextelementsibling metodu ozunden sonra gelen elemente altdan xett teyin etsin eger yazi yoxdursa hecne teyin etmesin.
  En sonda bu shertleri foreach dovru daxilinde yaziriq ki her defe yazilanda avtomatik elave edilsin.
  */

    const clearbuttons = document.querySelectorAll('.clear');

    clearbuttons.forEach(clearelements=> {
        clearelements.addEventListener('click', (e)=>{
         e.target.parentElement.parentElement.removeChild(e.target.parentElement)
        })
    })
  })
  //yuxaridaki  ile eyni funksiyani dasiyir sadece burada delete butonu ucun istifade edirik.
