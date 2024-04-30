'use strict'

const button = document.getElementById('send-question')

const consultarGemini = (question) => {
    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:genarateContent?key=' + keyGoogle

    // Estrutura da propria documentação
    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
}

fetch(url, requestOptions)
.then(response => response.json())
// Nova estrtura de fuction 
.then(data => {
    const respostaTextIa = data.candidates[0].content.parts[0].text
    respostaIA(respostaTextIa)

})
// Tratar os erros
.catch(error => console.error('Error: ', error));
}

const respostaIA = (respostaTextIa) => {
    // aonde vou inserir a resposta da minha IA
    const textAreaPt = document.getElementById('app')
    textAreaPt.textContent = respostaTextIa
}

button.addEventListener('click', () => {
    const question = document.getElementById('ask--user').value
    consultarGemini(question)
})