const userCreate = () => {
    const name = document.getElementById("name").value;

    if (name) {
        document.getElementById("sentButton").disabled = true;
        axios.post(`http://localhost:3000/create`, {
            name: name,
        })
            .then((response) => {
                alert("Nome salvo com sucesso!")
            }, (error) => {
                document.getElementById("sentButton").disabled = false;
                alert("Ocorreu um erro!")
            });
    } else {
        alert("Nome não pode ficar em branco!")
    }
};