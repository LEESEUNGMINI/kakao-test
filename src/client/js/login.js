const userIdInput = document.getElementById("userId");
const userPasswordInput = document.getElementById("userPassword");
const joinBtn = document.querySelector(".join");
const loginBtn = document.querySelector(".login");

const loginFetch = async () => {
    const userId = userIdInput.value;
    const userPassword = userPasswordInput.value;
    if(!userId || !userPassword){
        msgAlert("top", "모든 필드를 입력해주세요", "error")
        return;
    }

    const response = await fetch("/api/login", {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            Accept: "application/json", 
        },
        body: JSON.stringify({
            userId,
            userPassword,
        }),
    });
    const result = await response.json();
    console.log(result)
    if(result.status === "success"){
      localStorage.setItem("accessToken",result.data.accessToken)
      msgAlert("center", "로그인 성공", "success");
      setTimeout(()=>{
        window.location.href = "/"
      },1000)
      // accessToken 저장
    }else{
      msgAlert("center", "로그인에 실패하셨습니다.", "error")
    }
};

joinBtn.addEventListener("click", () => {
    window.location.href = "/join";
});
loginBtn.addEventListener("click", loginFetch)
