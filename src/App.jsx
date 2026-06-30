import { useState, useRef } from "react";

const AVATAR_B64 = "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";

function drawCard(canvas, texto, avatarImg) {
  const ctx = canvas.getContext("2d");
  const W = 1080, H = 1080;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, W, 8);

  // Avatar
  const AX = 90, AY = 80, AR = 58;
  ctx.save();
  ctx.beginPath();
  ctx.arc(AX + AR, AY + AR, AR, 0, Math.PI * 2);
  ctx.clip();
  if (avatarImg && avatarImg.complete && avatarImg.naturalWidth > 0) {
    ctx.drawImage(avatarImg, AX, AY, AR * 2, AR * 2);
  } else {
    ctx.fillStyle = "#e0e0e0";
    ctx.fillRect(AX, AY, AR * 2, AR * 2);
  }
  ctx.restore();
  ctx.beginPath();
  ctx.arc(AX + AR, AY + AR, AR + 3, 0, Math.PI * 2);
  ctx.strokeStyle = "#111"; ctx.lineWidth = 3; ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = "#111";
  ctx.font = "bold 44px Georgia, serif";
  ctx.fillText("Guilherme Stange", AX + AR * 2 + 26, AY + AR - 2);
  ctx.fillStyle = "#888";
  ctx.font = "32px Georgia, serif";
  ctx.fillText("@guilhermestangeconsorcio", AX + AR * 2 + 26, AY + AR + 38);

  ctx.strokeStyle = "#eee"; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(90, 232); ctx.lineTo(W - 90, 232); ctx.stroke();

  // Main text — now centered in a taller area since bottom is shorter
  const groups = texto.split(/\n\n+/);
  const FONT_SIZE = texto.length > 120 ? 50 : 56;
  const LINE_H = FONT_SIZE * 1.55;
  const PARA_GAP = 50;
  const MAX_W = W - 180;
  ctx.font = `${FONT_SIZE}px Georgia, serif`;

  function getLines(text) {
    const words = text.split(" ");
    let line = "", lines = [];
    for (let w of words) {
      const test = line + (line ? " " : "") + w;
      if (ctx.measureText(test).width > MAX_W && line) { lines.push(line); line = w; }
      else line = test;
    }
    if (line) lines.push(line);
    return lines;
  }

  const allGroups = groups.map(g => getLines(g.trim()));
  let totalH = 0;
  allGroups.forEach((lines, i) => {
    totalH += lines.length * LINE_H;
    if (i < allGroups.length - 1) totalH += PARA_GAP;
  });

  const TOP = 270, BOT = H - 90;
  let y = TOP + (BOT - TOP - totalH) / 2 + FONT_SIZE;
  ctx.fillStyle = "#111";
  allGroups.forEach((lines, gi) => {
    lines.forEach(l => { ctx.fillText(l, 90, y); y += LINE_H; });
    if (gi < allGroups.length - 1) y += PARA_GAP;
  });

  // Bottom divider only
  ctx.strokeStyle = "#eee"; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(90, H - 70); ctx.lineTo(W - 90, H - 70); ctx.stroke();
}

// --- Geração inteligente local (sem custo) ---
// Detecta se o usuário escreveu uma frase pronta ou só um assunto/palavra,
// e gera variações diferentes em cada caso, evitando repetição.

const ABERTURAS_TEMA = [
  (a) => `Ninguém domina ${a} da noite para o dia.`,
  (a) => `${a} não é sobre sorte.`,
  (a) => `Toda vez que penso em ${a}, lembro de uma coisa.`,
  (a) => `Quem entende ${a} de verdade, sabe que tudo começa pequeno.`,
  (a) => `Existe um jeito certo de pensar sobre ${a}.`,
  (a) => `Falar de ${a} é falar de escolhas diárias.`,
  (a) => `${a} separa quem planeja de quem só sonha.`,
  (a) => `Se você ainda não pensou em ${a} com seriedade, talvez seja a hora.`,
  (a) => `Por que tanta gente trava quando o assunto é ${a}?`,
  (a) => `${a}. Poucas palavras carregam tanto peso quanto essa.`,
];

const DESENVOLVIMENTOS_TEMA = [
  () => `Quem entende isso, constrói com consistência — não com pressa.`,
  () => `O segredo está nas decisões repetidas, não nas grandes promessas.`,
  () => `O que parece distante hoje fica perto com o plano certo.`,
  () => `Cada escolha pequena conta mais do que parece.`,
  () => `Disciplina vence motivação na maioria das vezes.`,
  () => `O caminho certo costuma ser mais simples do que imaginamos.`,
  () => `Quem tem um guia certo, chega mais rápido e com menos erros.`,
  () => `A diferença está em quem age — não em quem só pensa.`,
  () => `Informação certa muda completamente a forma de decidir.`,
  () => `O medo geralmente vem da falta de clareza, não do risco real.`,
];

const FECHAMENTOS_TEMA = [
  () => `Estratégia, consistência e o parceiro certo fazem toda a diferença.`,
  () => `Comece com o que você tem. O resto se ajusta no caminho.`,
  () => `O primeiro passo é simples: decidir agora.`,
  () => `Simule, planeje, e comece — o resto é consequência.`,
  () => `Não é sobre ter tudo certo. É sobre começar certo.`,
  () => `O melhor momento pra agir continua sendo agora.`,
  () => `Toda jornada de patrimônio começa com uma decisão simples.`,
  () => `Conhecimento é o que separa quem trava de quem avança.`,
];

// Quando o usuário cola uma frase já elaborada, ampliamos com uma reflexão complementar
const EXPANSOES_FRASE = [
  (f) => `${f}\n\nÉ exatamente essa mentalidade que separa quem só sonha de quem constrói de verdade.`,
  (f) => `${f}\n\nVale lembrar disso sempre que a pressa tentar tomar o lugar da estratégia.`,
  (f) => `${f}\n\nNo fim, isso resume bem por que planejamento vale mais que pressa.`,
  (f) => `${f}\n\nE quem entende isso, chega mais longe com menos esforço.`,
  (f) => `${f}\n\nQuem aplica isso no dia a dia, sente a diferença a longo prazo.`,
  (f) => `${f}\n\nUma reflexão simples, mas que muda a forma de ver o próprio plano.`,
];

function pareceFrasePronta(texto) {
  const t = texto.trim();
  // Heurística simples: tem mais de 6 palavras, ou termina com pontuação, ou tem mais de 35 caracteres
  const palavras = t.split(/\s+/).length;
  return palavras > 6 || /[.!?]$/.test(t) || t.length > 35;
}

function sortear(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

function gerarFraseLocal(entrada) {
  const texto = (entrada || "consórcio e patrimônio").trim();

  if (pareceFrasePronta(texto)) {
    // Usuário colou uma frase/ideia já elaborada — expandimos com uma reflexão complementar
    const expandida = sortear(EXPANSOES_FRASE)(texto);
    return expandida;
  }

  // Usuário digitou só um assunto/palavra — criamos do zero
  const tema = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  const abre = sortear(ABERTURAS_TEMA)(tema);
  const meio = sortear(DESENVOLVIMENTOS_TEMA)();
  const fecha = sortear(FECHAMENTOS_TEMA)();
  return `${abre}\n\n${meio}\n\n${fecha}`;
}

const EMOJIS_LEGENDA = ["💭", "🧭", "📋", "🎯", "📈", "🏡", "💡", "🔑"];
const CTAS_LEGENDA = [
  "Se quiser entender como isso se aplica ao seu caso, me chama no WhatsApp.",
  "Quer simular seu plano? É só clicar no WhatsApp na bio.",
  "Bora conversar sobre o seu plano? Te espero no WhatsApp.",
  "Simulação sem compromisso — só mandar mensagem no WhatsApp.",
  "Se identificou? Vamos conversar sobre seu plano pelo WhatsApp.",
  "Toda dúvida começa com uma conversa. Te espero no WhatsApp.",
];

function gerarLegendaLocal(entrada, frase) {
  const tema = (entrada || "consórcio").trim().toLowerCase().replace(/[^a-zà-ú0-9\s]/gi, "");
  const hashtagTema = tema.split(/\s+/).slice(0, 2).join("");
  const emoji = sortear(EMOJIS_LEGENDA);
  const cta = sortear(CTAS_LEGENDA);
  const primeiraLinha = frase.split("\n")[0];
  return `${primeiraLinha} ${emoji}\n\n${cta} 📲\n\n#consorcio #${hashtagTema} #planejamentofinanceiro #patrimonio`;
}

export default function App() {
  const [assunto, setAssunto] = useState("consórcio e patrimônio");
  const [texto, setTexto] = useState("Ninguém constrói patrimônio por acaso.\n\nConstrói com escolhas certas, repetidas todos os dias.\n\nEstratégia, consistência e o parceiro certo fazem toda a diferença.");
  const [legenda, setLegenda] = useState("Ninguém constrói patrimônio por acaso. 💭\n\nSe quiser entender como isso se aplica ao seu caso, me chama no WhatsApp. 📲\n\n#consorcio #consórcioepatrimônio #planejamentofinanceiro #patrimonio");
  const [imgSrc, setImgSrc] = useState(null);
  const [copiado, setCopiado] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const canvasRef = useRef(null);
  const avatarRef = useRef(null);

  if (!avatarRef.current) {
    const img = new Image();
    img.src = "data:image/jpeg;base64," + AVATAR_B64;
    avatarRef.current = img;
  }

  function gerar() {
    const canvas = canvasRef.current;
    const draw = () => { drawCard(canvas, texto, avatarRef.current); setImgSrc(canvas.toDataURL("image/png")); };
    if (avatarRef.current.complete) draw();
    else avatarRef.current.onload = draw;
  }

  function gerarComIA() {
    if (!assunto.trim()) return;
    setCarregando(true);
    setErro("");
    // pequeno delay para dar a sensação de processamento
    setTimeout(() => {
      try {
        const novaFrase = gerarFraseLocal(assunto);
        setTexto(novaFrase);
        setLegenda(gerarLegendaLocal(assunto, novaFrase));
        setImgSrc(null);
      } catch (e) {
        setErro("Não consegui gerar agora. Tenta de novo.");
      } finally {
        setCarregando(false);
      }
    }, 400);
  }

  function copiarLegenda() {
    navigator.clipboard.writeText(legenda).then(() => {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    });
  }

  const s = {
    page: { background: "#f2f2f2", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 16px 48px", gap: 18, fontFamily: "-apple-system, 'Segoe UI', sans-serif" },
    card: { background: "#fff", borderRadius: 18, padding: 20, width: "100%", maxWidth: 500, display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 2px 16px rgba(0,0,0,0.07)" },
    label: { fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#aaa", marginBottom: 6, display: "block" },
    input: { width: "100%", background: "#f8f8f8", border: "1.5px solid #e8e8e8", borderRadius: 12, color: "#111", fontFamily: "inherit", fontSize: "0.95rem", padding: "12px 14px", outline: "none" },
    btn: { background: "#111", border: "none", borderRadius: 12, color: "#fff", fontFamily: "inherit", fontSize: "0.95rem", fontWeight: 700, padding: 15, cursor: "pointer", width: "100%" },
  };

  return (
    <div style={s.page}>
      <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#999" }}>
        Cards · Guilherme Stange
      </p>

      <div style={s.card}>
        <div>
          <span style={s.label}>Sobre o que você quer postar?</span>
          <input type="text" value={assunto} onChange={e => setAssunto(e.target.value)}
            placeholder="Ex: medo de investir, juros, ou cole uma frase pra eu melhorar..."
            style={s.input} />
          <p style={{ fontSize: "0.72rem", color: "#bbb", marginTop: 6 }}>
            Digite uma palavra/assunto (ex: "juros") para criar uma frase nova, ou cole uma frase que você já tem para ela ser expandida.
          </p>
        </div>

        <button onClick={gerarComIA} disabled={carregando}
          style={{ background: carregando ? "#ddd" : "#fff", border: "1.5px solid #111", borderRadius: 12, color: "#111", fontFamily: "inherit", fontSize: "0.85rem", fontWeight: 700, padding: 12, cursor: carregando ? "default" : "pointer", width: "100%" }}>
          {carregando ? "Pensando..." : "🪄 Gerar frase com IA"}
        </button>

        {erro && <p style={{ color: "#c0392b", fontSize: "0.78rem" }}>{erro}</p>}

        <div>
          <span style={s.label}>Texto do card (edite se quiser)</span>
          <textarea value={texto} onChange={e => { setTexto(e.target.value); setImgSrc(null); }} rows={5}
            style={{ width: "100%", background: "#f8f8f8", border: "1.5px solid #e8e8e8", borderRadius: 12, color: "#111", fontFamily: "inherit", fontSize: "0.92rem", padding: "11px 13px", resize: "vertical", outline: "none", lineHeight: 1.5 }} />
        </div>

        <div>
          <span style={s.label}>Legenda sugerida (edite se quiser)</span>
          <textarea value={legenda} onChange={e => setLegenda(e.target.value)} rows={4}
            style={{ width: "100%", background: "#f8f8f8", border: "1.5px solid #e8e8e8", borderRadius: 12, color: "#111", fontFamily: "inherit", fontSize: "0.85rem", padding: "11px 13px", resize: "vertical", outline: "none", lineHeight: 1.5 }} />
        </div>

        <button onClick={gerar} style={s.btn}>✦ Gerar Card</button>
      </div>

      <canvas ref={canvasRef} width={1080} height={1080} style={{ display: "none" }} />

      {imgSrc && (
        <div style={{ width: "100%", maxWidth: 500, display: "flex", flexDirection: "column", gap: 12 }}>
          <img src={imgSrc} alt="Card" style={{ width: "100%", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.13)", display: "block" }} />
          <div style={{ background: "#111", borderRadius: 14, padding: "16px 18px", display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>📲</span>
            <div>
              <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.88rem", marginBottom: 4 }}>Salvar na galeria:</p>
              <p style={{ color: "#ccc", fontSize: "0.82rem", lineHeight: 1.6 }}>
                Pressione e segure a imagem acima → toque em <strong style={{ color: "#fff" }}>"Salvar foto"</strong>
              </p>
            </div>
          </div>

          <button onClick={copiarLegenda}
            style={{ background: copiado ? "#1a7a3c" : "#fff", border: "1.5px solid #111", borderRadius: 12, color: copiado ? "#fff" : "#111", fontFamily: "inherit", fontSize: "0.88rem", fontWeight: 700, padding: 14, cursor: "pointer", width: "100%", transition: "all 0.2s" }}>
            {copiado ? "✓ Legenda copiada!" : "📋 Copiar legenda"}
          </button>
        </div>
      )}
    </div>
  );
}
