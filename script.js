


    let ques_container=document.getElementsByClassName("que");
    let que_text=document.getElementsByClassName("que-text");
    // console.log(que_text[0].parentNode.nextElementSibling);
    
    
    for(let i=0;i<que_text.length;i++){
        ques_container[i].addEventListener("click",(e)=>{
            
             let ans_text=que_text[i].parentNode.nextElementSibling;
             let imgsrc=que_text[i].nextElementSibling;
             console.log("Question clicked:", que_text[i].textContent);
             console.log("Answer text:", ans_text);
            
             if(ans_text.style.display==="none"){
                ans_text.style.display="block";
                imgsrc.src="./assest/icon-minus.svg";
                
            }else{
                ans_text.style.display="none";
                imgsrc.src="./assest/icon-plus.svg";
            }
             
        })
    }


