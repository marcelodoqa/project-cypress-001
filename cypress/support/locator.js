const loc = {
    // LOGIN: {
    //     USER: '[data-test="email"]',
    //     SENHA: '[data-test="passwd"]',
    //     BTN_LOGIN: '.btn'
    // },
    login: {
        user: '[data-test="email"]',
        senha: '[data-test="passwd"]',
        btnLogin: '.btn'
    },
    menu: {
        home: '[data-test="menu-home"]',
        movimentacoes: '[data-test="menu-movimentacao"]',
        extrato: '[data-test="menu-extrato"]',
        configs: '[data-test="menu-settings"]',
        contas: '[href="/contas"]',
        reset: '[href="/reset"]',
        logout: '[href="/logout"]'
    },
    mensagem: '.toast-message'

    
}

export default loc;