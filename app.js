
let userArray=[]
function register()
{
    let name=document.getElementById("userName").value
    let gmail=document.getElementById("userGmail").value
    let userCount=userArray.filter((x)=>{
        return x.objectGmail==gmail
    })
    if(userCount.length==0)
    {   
        let userDetails={objectName:name,objectGmail:gmail}
        userArray.push(userDetails)
        console.log(userArray)

    }
    else{
        let error=document.getElementById("error")
        error.innerHTML='This Gmail is Already Existed'

        // console.log("This Gmail is Already Existed")
    }
    console.log(userArray)
    document.getElementById("userName").value=""
    document.getElementById("userGmail").value=""

    let userContainer=document.getElementById("userConatainer")
    //to remove the previouse values in user interface//
    userContainer.innerHTML=''

    // to make console to user interface//
    userArray.map((x)=>
    {
        /// creating html code by using js //
    let div=document.createElement('div')
    div.classList.add('userdiv')
    let headingTwo=document.createElement('h2')
    let headingThree=document.createElement('h4')
    headingTwo.innerHTML=x.objectName
    headingThree.innerHTML=x.objectGmail
    // adding into the html page bu js code 
    userContainer.appendChild(div)
    div.appendChild(headingTwo)
    div.appendChild(headingThree)

    })
    
    
}