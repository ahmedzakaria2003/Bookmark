// HTML elment
var siteNameInput = document.getElementById("siteName");
var siteUrlInput = document.getElementById("siteUrl");
var tableContent = document.getElementById("tableContent");
// App variables
if(localStorage.getItem("sites")!=null){
    siteList= JSON.parse(localStorage.getItem("sites"));
    displayData(siteList);

}
var nameRegex=/^[A-Z][a-z]{3,}$/;
var UrlRegex= /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;


// Functions
var siteList=[];
function addBookMark(){
    if(validated(nameRegex,siteNameInput)&&validated(UrlRegex,siteUrlInput)){
    console.log("hhhhh");
    var site ={
        siteName:siteNameInput.value,
        siteUrl:siteUrlInput.value
    };
siteList.push(site);
localStorage.setItem("sites",JSON.stringify(siteList));
displayData(siteList);
clearinputs(siteList);

}
else alert("invalid data")

}
function displayData(arr){
    var cartonna= "";
    for(var i =0 ; i<arr.length ; i++){
        cartonna+=`<tr>
                <td>${i}</td>
                <td>${arr[i].siteName}</td>              
                <td>
                  <a class="btn btn-danger" data-index="0" href="${
                    arr[i].siteUrl.includes("https://")
                      ? arr[i].siteUrl
                      : `https://${arr[i].siteUrl}`
                  }" >
                    <i class="fa-solid fa-eye pe-2"></i>Visit
                  </a>
                </td>
                <td>
                  <button class="btn btn-warning pe-2" data-index="0" onclick="deleteBookMark()">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
            </tr>`
    }
    tableContent.innerHTML=cartonna;
}
function deleteBookMark(index){
    tableContent.innerHTML="";
siteList.splice(index,1);
localStorage.setItem("sites",JSON.stringify(siteList));
displayData(siteList);
}
function  validated(Regex,elment){
    if(Regex.test(elment.value)){
      elment.classList.add("is-valid");
      elment.classList.remove("is-invalid");

  return true;
    }
      elment.classList.add("is-invalid");
      elment.classList.remove("is-valid");

      return false;}
      function clearinputs(){
        siteNameInput.value = "";
        siteUrlInput.value = "";
      }