const joinBtn = document.getElementById("joinBtn");

const userIdInput = document.getElementById("userId");
const userPasswordInput = document.getElementById("userPassword")
const userNameInput = document.getElementById("userName")



const joinFetch = async () =>{
  const userId = userIdInput.value
  const userPassword = userPasswordInput.value
  const userName = userNameInput.value

  if(!userId || !userPassword || !userName){
    msgAlert("bottom","모든 필드를 입력해주세요", "error")
    return
  }
  const response = await fetch("/api/join",{
    method: "POST",
    headers: {
      'content-Type': "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      userId,
      userPassword,
      userName,
    }),
  });
  console.log(response);
  const data = await response.json();
  if(data.status === 'success'){
    msgAlert("bottom","회원가입 성공", "success")
    setTimeout(()=>{
      window.location.href = "/login";
    }, 1000)
  }else{
    msgAlert("bottom","모든 필드를 입력해주세요", "error")
  }
  console.log(data)
};

joinBtn.addEventListener("click", joinFetch)