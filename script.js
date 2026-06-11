// Função para navegar entre as "páginas"
function mostrarPagina(idPagina) {
    // Esconde todas as páginas
    const paginas = document.querySelectorAll('.pagina');
    paginas.forEach(pagina => {
        pagina.classList.remove('ativa');
    });

    // Mostra apenas a página selecionada
    document.getElementById(idPagina).classList.add('ativa');
}

// Lógica do Simulador
function atualizarSimulador() {
    // Captura os valores dos inputs
    let temp = parseInt(document.getElementById('temp').value);
    let umidadeAr = parseInt(document.getElementById('umidade-ar').value);
    let umidadeSolo = parseInt(document.getElementById('umidade-solo').value);

    // Atualiza os textos na tela para o usuário ver os números mudando
    document.getElementById('temp-val').innerText = temp;
    document.getElementById('umidade-ar-val').innerText = umidadeAr;
    document.getElementById('umidade-solo-val').innerText = umidadeSolo;

    // Elementos de feedback
    let statusTexto = document.getElementById('status-texto');
    let dicaSustentavel = document.getElementById('dica-sustentavel');
    let painel = document.getElementById('resultado-painel');

    // Remove classes antigas
    painel.classList.remove('status-ideal', 'status-alerta', 'status-critico');

    // Avaliação das Condições (Maracujazeiro)
    // Temperatura ideal: 20 a 30 / Umidade ar: 60 a 80 / Umidade solo: 50 a 70
    
    let problemas = [];
    
    // Checa Temperatura
    if (temp < 15) problemas.push("Temperatura muito baixa (risco de paralisação do crescimento).");
    else if (temp > 35) problemas.push("Temperatura muito alta (risco de queda de flores e frutos).");

    // Checa Umidade do Ar
    if (umidadeAr < 40) problemas.push("Ar muito seco (dificulta a polinização).");
    else if (umidadeAr > 85) problemas.push("Umidade do ar muito alta (favorece fungos e doenças).");

    // Checa Umidade do Solo
    if (umidadeSolo < 40) problemas.push("Solo muito seco (planta sofre estresse hídrico).");
    else if (umidadeSolo > 80) problemas.push("Solo encharcado (risco de apodrecimento das raízes).");

    // Define o resultado baseado na quantidade de problemas
    if (problemas.length === 0) {
        statusTexto.innerHTML = "<strong>Condições Ideais!</strong> O ambiente está perfeito para o cultivo do maracujá.";
        dicaSustentavel.innerText = "Dica Sustentável: Mantenha esses parâmetros! Você está otimizando a água e garantindo máxima produção com mínimo impacto ambiental.";
        painel.classList.add('status-ideal');
    } else if (problemas.length === 1 || problemas.length === 2) {
        statusTexto.innerHTML = "<strong>Atenção:</strong><br> - " + problemas.join("<br> - ");
        dicaSustentavel.innerText = "Dica Sustentável: Ajuste a irrigação ou ventilação. O desperdício de água ou o calor excessivo reduzem a eficiência da estufa e prejudicam a sustentabilidade.";
        painel.classList.add('status-alerta');
    } else {
        statusTexto.innerHTML = "<strong>Condições Críticas!</strong> A plantação está em risco:<br> - " + problemas.join("<br> - ");
        dicaSustentavel.innerText = "Dica Sustentável: A falta de controle gera desperdício de recursos naturais e perda de safra. É preciso buscar o equilíbrio entre produção e meio ambiente urgente!";
        painel.classList.add('status-critico');
    }
}

// Inicia o simulador com os valores padrão ao carregar a página
window.onload = atualizarSimulador;