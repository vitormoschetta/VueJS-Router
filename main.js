var home = {
    template:   '<div><h2>Home</h2><p>Essa é a página inicial.</p></div>'
}

var sobre = {
    template:   '<div><h2>Sobre</h2><p>Aqui eu falo sobre mim, sobre o negócio.</p></div>'
}


var contato = {
    template:   '<div><h2>Contato</h2><p>e-mail: vitormoschetta@gmail.com</p></div>'
}


var rotas = [
    { path: '/', component: home },
    { path: '/sobre', component: sobre },
    { path: '/contato', component: contato } 
]

var router = new VueRouter({
    routes: rotas
})

var app = new Vue({
    el: '#app', 
    router
})