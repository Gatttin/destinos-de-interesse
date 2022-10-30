function Form() {
    return (
        <div>
            <h1 className="container-5">Dados Pessoais</h1>
            <form>
                <div className="containerForm">
                    <label htmlFor="name">Nome</label>
                    <input type="name" id="name" name="name" placeholder='Digite seu nome' required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="name" name="name" placeholder='Digite seu melhor Email' required />
                </div>
                <div>
                    <label htmlFor="phone">Telefone</label>
                    <input type="tel" id="phone" name="phome" placeholder='Digite seu Telefone' required />
                </div>
                <div>
                    <label htmlFor="name">CPF</label>
                    <input type="name" id="name" name="name" placeholder='Digite seu CPF' required />
                </div>
            </form>
        </div>
    )
}

export default Form