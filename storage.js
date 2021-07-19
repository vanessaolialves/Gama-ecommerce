window.addEventListener("load", () => {
    const botao = document.getElementById("bt-cadastro");
    
    botao.addEventListener("click", (e) => {
        e.preventDefault();
        let name = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
  
        let data = {
            name,
            email,
        }
        
        if (email === localStorage.getItem("email")) {
            alert("Esse e-mail já está cadastrado!!");
        } else {

            let convertData = JSON.stringify(data);

            localStorage.setItem("key", convertData);
 
            localStorage.setItem("name", data.nome);
            localStorage.setItem("email", data.email);
        
            alert("Cadastro realizado com sucesso!!");
          }
    })
})

