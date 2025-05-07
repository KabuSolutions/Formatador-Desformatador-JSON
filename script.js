if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js')
        .then(registration => {
          console.log('Service Worker registrado com sucesso:', registration);
        })
        .catch(error => {
          console.log('Erro ao registrar o Service Worker:', error);
        });
    });
  }

function desformatarJson() {
    const inputJsonTextarea = document.getElementById('inputJson');
    const outputDiv = document.getElementById('output');
    const jsonText = inputJsonTextarea.value;

    try {
        const jsonObject = JSON.parse(jsonText);
        const jsonDesformatado = JSON.stringify(jsonObject);
        outputDiv.textContent = jsonDesformatado;
    } catch (error) {
        outputDiv.textContent = "Erro ao processar o JSON: " + error.message;
    }
}

function formatarJson() {
    const formattedInputTextarea = document.getElementById('formattedInput');
    const formattedOutputDiv = document.getElementById('formattedOutput');
    const jsonText = formattedInputTextarea.value;

    try {
        const jsonObject = JSON.parse(jsonText);
        const jsonFormatado = JSON.stringify(jsonObject, null, 2);
        formattedOutputDiv.textContent = jsonFormatado;
    } catch (error) {
        formattedOutputDiv.textContent = "Erro ao processar o JSON: " + error.message;
    }
}

function copiarTexto(elementoId) {
    const elemento = document.getElementById(elementoId);
    if (elemento) {
        // Cria um elemento de texto temporário
        const tempInput = document.createElement("textarea");
        tempInput.value = elemento.textContent;
        document.body.appendChild(tempInput);

        // Seleciona o texto
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

        // Copia o texto para a área de transferência
        document.execCommand("copy");

        // Remove o elemento temporário
        document.body.removeChild(tempInput);

        alert("Texto copiado para a área de transferência!"); // Feedback visual (opcional)
    }
}