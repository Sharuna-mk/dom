function store(){

    car={
        keyval:key.value,
        brand:brand.value,
        price:price.value,
        

    }

if(key.value=="" || brand.value =="" || price.value==""){
    alert("Please enter all details")
}
else if(key.value in localStorage){
    alert("details already existing")
}
else{
    localStorage.setItem(car.keyval,JSON.stringify(car))
     alert("details added successfully")
    key.value="";
    brand.value="";
    price.value=""
}
}

function retrieve(){
    
  const keydata=keyret.value;
  
  if(keydata in localStorage){
    const car=JSON.parse(localStorage.getItem(keydata))
    result.innerHTML=` <h5 class="text-primary text-center ">Brand</h5>
 <p class="text-center fw-bold">${car.brand}</p>
 <h5 class="text-primary text-center">Price</h5>
 <p class="text-center fw-bold">${car.price}</p>`
  }
else{
    alert("Please enter a valid key")
}    
}

function remove(){
    const key=delkey.value
    if(key in localStorage){
        localStorage.removeItem(key);
        alert("key deleted successfully")
    }
    else{
        alert("please enter a valid key")
    }
}

function clearrec(){
    localStorage.clear();
    alert("All data has been deleted");
}