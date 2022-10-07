const raffle = () => {
        axios.get(`http://localhost:3000/raffle`, {})
            .then((response) => {
                document.getElementById("winner").innerHTML = `Vencedor (a): ${response.data.name}`;
            }, (error) => {
                alert("Ocorreu um erro!")
            });
};