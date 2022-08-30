
   let submit= document.getElementById('submit')
//    submit.onClick(()=>{
//     if(validateForm()){

//     }
//     else{
//         return
//     }

//    })
  function validateForm(){
    
    var valid=true;
   let fname= document.getElementById('fname').value;
   let lname= document.getElementById('lname').value;
   let email= document.getElementById('email').value;
   let phone= document.getElementById('phone').value;
   let batchNo=document.getElementById('Batch').value;
   let Module=document.getElementById('Module').value;
    if(fname.length<3){
        valid=false;
        document.getElementsByName('fname')[0].classList.remove('hidden');

    }
   
   if(lname.length<3){
        valid=false;
        document.getElementsByName('lname')[0].classList.remove('hidden');

    }
    
   if( ! email.match(/^(.+)@(.+)$/)){
        valid=false;
        document.getElementsByName('email')[0].classList.remove('hidden');

    }
    if(phone.length<10 && !phone.match(/\d{10}$/)){
        valid=false;
        document.getElementsByName('phone')[0].classList.remove('hidden');

    }
    if(!batchNo.length){
        valid=false;
        document.getElementsByName('Batch')[0].classList.remove('hidden');
    }
    if(!Module.length){
        valid=false;
        document.getElementsByName('Module')[0].classList.remove('hidden');
    }
    if(valid){
        confirm('Your details have been saved successfully!')
    }
   }

