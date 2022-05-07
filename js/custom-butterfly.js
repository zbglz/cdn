$(function(){
  // Twikoo setting
  function returnTkMetaInput(){
    return document.querySelector(".tk-meta-input")
  }
  var timelimit = 0;
  var getTkMetaInput = setInterval(function(){
    if(returnTkMetaInput()){
      clearInterval(getTkMetaInput)
      //returnTkMetaInput().firstChild.firstChild.innerHTML = "昵称"
      returnTkMetaInput().firstChild.firstChild.nextSibling.setAttribute("placeholder","输入QQ号自动获取头像")
      //returnTkMetaInput().firstChild.nextSibling.firstChild.innerHTML = "邮箱"
      returnTkMetaInput().firstChild.nextSibling.firstChild.nextSibling.setAttribute("placeholder","昵称为QQ号自动为QQ邮箱")
      returnTkMetaInput().lastChild.style.display = "none"
    }
  },300)
  
})