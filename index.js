let btn = document.getElementById("btn")
let brt = document.getElementById("birthday")
let res = document.getElementById("result")

btn.addEventListener("click",()=>{
    let brtval = brt.value;
    if (brtval === "") {
        alert("please enter valid date and month")
    } else {
        getmonth(brtval)
       
        
    }

})
function getmonth(brtval) {
    let current = new Date()
    let brth = new Date(brtval)
    let age = current.getFullYear() - brth.getFullYear();
    console.log(age);
    let month = current.getMonth() - brth.getMonth()
     res.innerHTML = `your age is ${age} year old`
      if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }

  return age;
}
