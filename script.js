document.addEventListener("DOMContentLoaded", function () {
  const periodicTable = document.getElementById("periodicTable");
  const summaryImage = document.getElementById("summary-image");
  const elementSummary = document.getElementById("element-summary");

  // Base URL das imagens
  const baseUrl = "https://icaroabg.github.io/Imagens-//";
  const img = (n) => baseUrl + `elemento${n}.png`;

  // Array de elementos principais (períodos 1 a 7, exceto os blocos f)
  const mainElements = [
    // Período 1
    { symbol: "H",  group: 1,  period: 1, color: "non-metal",      image: img(1),   mass: "1.008" },
    { symbol: "He", group: 18, period: 1, color: "noble-gas",      image: img(2),   mass: "4.0026" },

    // Período 2
    { symbol: "Li", group: 1,  period: 2, color: "alkali",         image: img(3),   mass: "6.94" },
    { symbol: "Be", group: 2,  period: 2, color: "alkaline",       image: img(4),   mass: "9.0122" },
    { symbol: "B",  group: 13, period: 2, color: "metalloid",      image: img(5),   mass: "10.81" },
    { symbol: "C",  group: 14, period: 2, color: "non-metal",      image: img(6),   mass: "12.011" },
    { symbol: "N",  group: 15, period: 2, color: "non-metal",      image: img(7),   mass: "14.007" },
    { symbol: "O",  group: 16, period: 2, color: "non-metal",      image: img(8),   mass: "15.999" },
    { symbol: "F",  group: 17, period: 2, color: "halogen",        image: img(9),   mass: "18.998" },
    { symbol: "Ne", group: 18, period: 2, color: "noble-gas",      image: img(10),  mass: "20.180" },

    // Período 3
    { symbol: "Na", group: 1,  period: 3, color: "alkali",         image: img(11),  mass: "22.990" },
    { symbol: "Mg", group: 2,  period: 3, color: "alkaline",       image: img(12),  mass: "24.305" },
    { symbol: "Al", group: 13, period: 3, color: "post-transition",image: img(13),  mass: "26.982" },
    { symbol: "Si", group: 14, period: 3, color: "metalloid",      image: img(14),  mass: "28.085" },
    { symbol: "P",  group: 15, period: 3, color: "non-metal",      image: img(15),  mass: "30.974" },
    { symbol: "S",  group: 16, period: 3, color: "non-metal",      image: img(16),  mass: "32.06" },
    { symbol: "Cl", group: 17, period: 3, color: "halogen",        image: img(17),  mass: "35.45" },
    { symbol: "Ar", group: 18, period: 3, color: "noble-gas",      image: img(18),  mass: "39.948" },

    // Período 4
    { symbol: "K",  group: 1,  period: 4, color: "alkali",         image: img(19),  mass: "39.098" },
    { symbol: "Ca", group: 2,  period: 4, color: "alkaline",       image: img(20),  mass: "40.078" },
    { symbol: "Sc", group: 3,  period: 4, color: "transition",     image: img(21),  mass: "44.956" },
    { symbol: "Ti", group: 4,  period: 4, color: "transition",     image: img(22),  mass: "47.867" },
    { symbol: "V",  group: 5,  period: 4, color: "transition",     image: img(23),  mass: "50.942" },
    { symbol: "Cr", group: 6,  period: 4, color: "transition",     image: img(24),  mass: "51.996" },
    { symbol: "Mn", group: 7,  period: 4, color: "transition",     image: img(25),  mass: "54.938" },
    { symbol: "Fe", group: 8,  period: 4, color: "transition",     image: img(26),  mass: "55.845" },
    { symbol: "Co", group: 9,  period: 4, color: "transition",     image: img(27),  mass: "58.933" },
    { symbol: "Ni", group: 10, period: 4, color: "transition",     image: img(28),  mass: "58.693" },
    { symbol: "Cu", group: 11, period: 4, color: "transition",     image: img(29),  mass: "63.546" },
    { symbol: "Zn", group: 12, period: 4, color: "transition",     image: img(30),  mass: "65.38" },
    { symbol: "Ga", group: 13, period: 4, color: "post-transition",image: img(31),  mass: "69.723" },
    { symbol: "Ge", group: 14, period: 4, color: "metalloid",      image: img(32),  mass: "72.630" },
    { symbol: "As", group: 15, period: 4, color: "metalloid",      image: img(33),  mass: "74.922" },
    { symbol: "Se", group: 16, period: 4, color: "non-metal",      image: img(34),  mass: "78.971" },
    { symbol: "Br", group: 17, period: 4, color: "halogen",        image: img(35),  mass: "79.904" },
    { symbol: "Kr", group: 18, period: 4, color: "noble-gas",      image: img(36),  mass: "83.798" },

    // Período 5
    { symbol: "Rb", group: 1,  period: 5, color: "alkali",         image: img(37),  mass: "85.468" },
    { symbol: "Sr", group: 2,  period: 5, color: "alkaline",       image: img(38),  mass: "87.62" },
    { symbol: "Y",  group: 3,  period: 5, color: "transition",     image: img(39),  mass: "88.906" },
    { symbol: "Zr", group: 4,  period: 5, color: "transition",     image: img(40),  mass: "91.224" },
    { symbol: "Nb", group: 5,  period: 5, color: "transition",     image: img(41),  mass: "92.906" },
    { symbol: "Mo", group: 6,  period: 5, color: "transition",     image: img(42),  mass: "95.95" },
    { symbol: "Tc", group: 7,  period: 5, color: "transition",     image: img(43),  mass: "98" },
    { symbol: "Ru", group: 8,  period: 5, color: "transition",     image: img(44),  mass: "101.07" },
    { symbol: "Rh", group: 9,  period: 5, color: "transition",     image: img(45),  mass: "102.91" },
    { symbol: "Pd", group: 10, period: 5, color: "transition",     image: img(46),  mass: "106.42" },
    { symbol: "Ag", group: 11, period: 5, color: "transition",     image: img(47),  mass: "107.87" },
    { symbol: "Cd", group: 12, period: 5, color: "transition",     image: img(48),  mass: "112.41" },
    { symbol: "In", group: 13, period: 5, color: "post-transition",image: img(49),  mass: "114.82" },
    { symbol: "Sn", group: 14, period: 5, color: "post-transition",image: img(50),  mass: "118.71" },
    { symbol: "Sb", group: 15, period: 5, color: "metalloid",      image: img(51),  mass: "121.76" },
    { symbol: "Te", group: 16, period: 5, color: "metalloid",      image: img(52),  mass: "127.60" },
    { symbol: "I",  group: 17, period: 5, color: "halogen",        image: img(53),  mass: "126.90" },
    { symbol: "Xe", group: 18, period: 5, color: "noble-gas",      image: img(54),  mass: "131.29" },

    // Período 6 (excluindo os lanthanídeos)
    { symbol: "Cs", group: 1,  period: 6, color: "alkali",         image: img(55),  mass: "132.91" },
    { symbol: "Ba", group: 2,  period: 6, color: "alkaline",       image: img(56),  mass: "137.33" },
    { symbol: "Hf", group: 4,  period: 6, color: "transition",     image: img(72),  mass: "178.49" },
    { symbol: "Ta", group: 5,  period: 6, color: "transition",     image: img(73),  mass: "180.95" },
    { symbol: "W",  group: 6,  period: 6, color: "transition",     image: img(74),  mass: "183.84" },
    { symbol: "Re", group: 7,  period: 6, color: "transition",     image: img(75),  mass: "186.21" },
    { symbol: "Os", group: 8,  period: 6, color: "transition",     image: img(76),  mass: "190.23" },
    { symbol: "Ir", group: 9,  period: 6, color: "transition",     image: img(77),  mass: "192.22" },
    { symbol: "Pt", group: 10, period: 6, color: "transition",     image: img(78),  mass: "195.08" },
    { symbol: "Au", group: 11, period: 6, color: "transition",     image: img(79),  mass: "196.97" },
    { symbol: "Hg", group: 12, period: 6, color: "transition",     image: img(80),  mass: "200.59" },
    { symbol: "Tl", group: 13, period: 6, color: "post-transition",image: img(81),  mass: "204.38" },
    { symbol: "Pb", group: 14, period: 6, color: "post-transition",image: img(82),  mass: "207.2" },
    { symbol: "Bi", group: 15, period: 6, color: "post-transition",image: img(83),  mass: "208.98" },
    { symbol: "Po", group: 16, period: 6, color: "metalloid",      image: img(84),  mass: "209" },
    { symbol: "At", group: 17, period: 6, color: "halogen",        image: img(85),  mass: "210" },
    { symbol: "Rn", group: 18, period: 6, color: "noble-gas",      image: img(86),  mass: "222" },

    // Período 7 (excluindo os actinídeos)
    { symbol: "Fr", group: 1,  period: 7, color: "alkali",         image: img(87),  mass: "223" },
    { symbol: "Ra", group: 2,  period: 7, color: "alkaline",       image: img(88),  mass: "226" },
    { symbol: "Rf", group: 4,  period: 7, color: "transition",     image: img(104), mass: "267" },
    { symbol: "Db", group: 5,  period: 7, color: "transition",     image: img(105), mass: "270" },
    { symbol: "Sg", group: 6,  period: 7, color: "transition",     image: img(106), mass: "271" },
    { symbol: "Bh", group: 7,  period: 7, color: "transition",     image: img(107), mass: "270" },
    { symbol: "Hs", group: 8,  period: 7, color: "transition",     image: img(108), mass: "277" },
    { symbol: "Mt", group: 9,  period: 7, color: "transition",     image: img(109), mass: "276" },
    { symbol: "Ds", group: 10, period: 7, color: "transition",     image: img(110), mass: "281" },
    { symbol: "Rg", group: 11, period: 7, color: "transition",     image: img(111), mass: "280" },
    { symbol: "Cn", group: 12, period: 7, color: "transition",     image: img(112), mass: "285" },
    { symbol: "Nh", group: 13, period: 7, color: "post-transition",image: img(113), mass: "286" },
    { symbol: "Fl", group: 14, period: 7, color: "post-transition",image: img(114), mass: "289" },
    { symbol: "Mc", group: 15, period: 7, color: "post-transition",image: img(115), mass: "290" },
    { symbol: "Lv", group: 16, period: 7, color: "post-transition",image: img(116), mass: "293" },
    { symbol: "Ts", group: 17, period: 7, color: "halogen",        image: img(117), mass: "294" },
    { symbol: "Og", group: 18, period: 7, color: "noble-gas",      image: img(118), mass: "294" }
  ];

  // Dados dos lanthanídeos (linha 8, colunas 4 a 18)
  const lanthanides = [
    { symbol: "La", mass: "138.91", image: img(57), color: "lanthanide" },
    { symbol: "Ce", mass: "140.12", image: img(58), color: "lanthanide" },
    { symbol: "Pr", mass: "140.91", image: img(59), color: "lanthanide" },
    { symbol: "Nd", mass: "144.24", image: img(60), color: "lanthanide" },
    { symbol: "Pm", mass: "145",    image: img(61), color: "lanthanide" },
    { symbol: "Sm", mass: "150.36", image: img(62), color: "lanthanide" },
    { symbol: "Eu", mass: "151.96", image: img(63), color: "lanthanide" },
    { symbol: "Gd", mass: "157.25", image: img(64), color: "lanthanide" },
    { symbol: "Tb", mass: "158.93", image: img(65), color: "lanthanide" },
    { symbol: "Dy", mass: "162.50", image: img(66), color: "lanthanide" },
    { symbol: "Ho", mass: "164.93", image: img(67), color: "lanthanide" },
    { symbol: "Er", mass: "167.26", image: img(68), color: "lanthanide" },
    { symbol: "Tm", mass: "168.93", image: img(69), color: "lanthanide" },
    { symbol: "Yb", mass: "173.05", image: img(70), color: "lanthanide" },
    { symbol: "Lu", mass: "174.97", image: img(71), color: "lanthanide" }
  ];

  // Dados dos actinídeos (linha 9, colunas 4 a 18)
  const actinides = [
    { symbol: "Ac", mass: "227",    image: img(89),  color: "actinide" },
    { symbol: "Th", mass: "232.04", image: img(90),  color: "actinide" },
    { symbol: "Pa", mass: "231.04", image: img(91),  color: "actinide" },
    { symbol: "U",  mass: "238.03", image: img(92),  color: "actinide" },
    { symbol: "Np", mass: "237",    image: img(93),  color: "actinide" },
    { symbol: "Pu", mass: "244",    image: img(94),  color: "actinide" },
    { symbol: "Am", mass: "243",    image: img(95),  color: "actinide" },
    { symbol: "Cm", mass: "247",    image: img(96),  color: "actinide" },
    { symbol: "Bk", mass: "247",    image: img(97),  color: "actinide" },
    { symbol: "Cf", mass: "251",    image: img(98),  color: "actinide" },
    { symbol: "Es", mass: "252",    image: img(99),  color: "actinide" },
    { symbol: "Fm", mass: "257",    image: img(100), color: "actinide" },
    { symbol: "Md", mass: "258",    image: img(101), color: "actinide" },
    { symbol: "No", mass: "259",    image: img(102), color: "actinide" },
    { symbol: "Lr", mass: "262",    image: img(103), color: "actinide" }
  ];

  // Função para atualizar o painel de resumo – agora apenas atualiza a imagem
  function atualizarResumo(el) {
    summaryImage.src = el.image;
  }

  // Função para criar um elemento na tabela
  function criarElemento(el, gridRow = null, gridColumn = null) {
    const elDiv = document.createElement("div");
    elDiv.classList.add("element", el.color);
    elDiv.textContent = el.symbol;
    if (gridRow !== null) elDiv.style.gridRow = gridRow;
    if (gridColumn !== null) elDiv.style.gridColumn = gridColumn;
    elDiv.addEventListener("click", function () {
      atualizarResumo(el);
      elementSummary.classList.add("show");
    });
    periodicTable.appendChild(elDiv);
  }

  // Criação dos elementos principais
  mainElements.forEach((el) => {
    criarElemento(el, el.period, el.group);
  });

  // Criação dos lanthanídeos (linha 8, colunas 4 a 18)
  lanthanides.forEach((el, index) => {
    criarElemento(el, 8, index + 4);
  });

  // Criação dos actinídeos (linha 9, colunas 4 a 18)
  actinides.forEach((el, index) => {
    criarElemento(el, 9, index + 4);
  });

  // Função para fechar o painel de resumo
  window.closeElement = function () {
    elementSummary.classList.remove("show");
  };
});
