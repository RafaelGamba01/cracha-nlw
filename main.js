 // variaveis: let (pode mudar a variavel durante o codigo) ou const (nao muda a variavel)//
      /* function showMeSomething(){
alert()
} */
      const links = {
        github: 'RafaelGamba01',
        youtube: 'rafaelgamba',
        facebook: 'rafaelgamba',
        instagram: 'carina_rafaelgamba',
        twitter: 'rafaelgamba'
      }
      function changelinks() {
        // userName.textContent = "Pedro" metodo mais facil para acessar o DOM , não precisa colocar document.getelementbyid. colocando o nome da função ponto o q deseja ele ja aceita
      }
      function mudarRedesSociais() {
        for (let li of redeSociais.children) {
         var social = (li.getAttribute('class'))
         li.children[0].href = `https://${social}.com/${links[social]}`

         alert(li.children[0].href)
        }
      }
    function getGithubProfileInfos() {
      let url = `https://api.github.com/users/${links.github}`

      fetch(url)
      .then(response => response.json() )
      .then(data => {
        userName.textContent = data.name
        userbio.textContent = data.bio
        userlink.href = data.html_url
        userLogin.textContent = data.login
      })
    
    }
    getGithubProfileInfos()

  
