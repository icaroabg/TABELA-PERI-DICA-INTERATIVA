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
    { symbol: "H",  number: 1,  group: 1,  period: 1, color: "non-metal", image: img(1),  mass: "1.008" },
    { symbol: "He", number: 2,  group: 18, period: 1, color: "noble-gas", image: img(2),  mass: "4.0026" },

    // Período 2
    { symbol: "Li", number: 3,  group: 1,  period: 2, color: "alkali",    image: img(3),  mass: "6.94" },
    { symbol: "Be", number: 4,  group: 2,  period: 2, color: "alkaline",  image: img(4),  mass: "9.0122" },
    { symbol: "B",  number: 5,  group: 13, period: 2, color: "metalloid", image: img(5),  mass: "10.81" },
    { symbol: "C",  number: 6,  group: 14, period: 2, color: "non-metal", image: img(6),  mass: "12.011" },
    { symbol: "N",  number: 7,  group: 15, period: 2, color: "non-metal", image: img(7),  mass: "14.007" },
    { symbol: "O",  number: 8,  group: 16, period: 2, color: "non-metal", image: img(8),  mass: "15.999" },
    { symbol: "F",  number: 9,  group: 17, period: 2, color: "halogen",   image: img(9),  mass: "18.998" },
    { symbol: "Ne", number: 10, group: 18, period: 2, color: "noble-gas", image: img(10), mass: "20.180" },

    // Período 3
    { symbol: "Na", number: 11, group: 1,  period: 3, color: "alkali",    image: img(11), mass: "22.990" },
    { symbol: "Mg", number: 12, group: 2,  period: 3, color: "alkaline",  image: img(12), mass: "24.305" },
    { symbol: "Al", number: 13, group: 13, period: 3, color: "post-transition", image: img(13), mass: "26.982" },
    { symbol: "Si", number: 14, group: 14, period: 3, color: "metalloid", image: img(14), mass: "28.085" },
    { symbol: "P",  number: 15, group: 15, period: 3, color: "non-metal", image: img(15), mass: "30.974" },
    { symbol: "S",  number: 16, group: 16, period: 3, color: "non-metal", image: img(16), mass: "32.06" },
    { symbol: "Cl", number: 17, group: 17, period: 3, color: "halogen",   image: img(17), mass: "35.45" },
    { symbol: "Ar", number: 18, group: 18, period: 3, color: "noble-gas", image: img(18), mass: "39.948" },

    // Período 4
    { symbol: "K",  number: 19, group: 1,  period: 4, color: "alkali",    image: img(19), mass: "39.098" },
    { symbol: "Ca", number: 20, group: 2,  period: 4, color: "alkaline",  image: img(20), mass: "40.078" },
    { symbol: "Sc", number: 21, group: 3,  period: 4, color: "transition",image: img(21), mass: "44.956" },
    { symbol: "Ti", number: 22, group: 4,  period: 4, color: "transition",image: img(22), mass: "47.867" },
    { symbol: "V",  number: 23, group: 5,  period: 4, color: "transition",image: img(23), mass: "50.942" },
    { symbol: "Cr", number: 24, group: 6,  period: 4, color: "transition",image: img(24), mass: "51.996" },
    { symbol: "Mn", number: 25, group: 7,  period: 4, color: "transition",image: img(25), mass: "54.938" },
    { symbol: "Fe", number: 26, group: 8,  period: 4, color: "transition",image: img(26), mass: "55.845" },
    { symbol: "Co", number: 27, group: 9,  period: 4, color: "transition",image: img(27), mass: "58.933" },
    { symbol: "Ni", number: 28, group: 10, period: 4, color: "transition",image: img(28), mass: "58.693" },
    { symbol: "Cu", number: 29, group: 11, period: 4, color: "transition",image: img(29), mass: "63.546" },
    { symbol: "Zn", number: 30, group: 12, period: 4, color: "transition",image: img(30), mass: "65.38" },
    { symbol: "Ga", number: 31, group: 13, period: 4, color: "post-transition", image: img(31), mass: "69.723" },
    { symbol: "Ge", number: 32, group: 14, period: 4, color: "metalloid", image: img(32), mass: "72.630" },
    { symbol: "As", number: 33, group: 15, period: 4, color: "metalloid", image: img(33), mass: "74.922" },
    { symbol: "Se", number: 34, group: 16, period: 4, color: "non-metal", image: img(34), mass: "78.971" },
    { symbol: "Br", number: 35, group: 17, period: 4, color: "halogen",   image: img(35), mass: "79.904" },
    { symbol: "Kr", number: 36, group: 18, period: 4, color: "noble-gas", image: img(36), mass: "83.798" },

    // Período 5
    { symbol: "Rb", number: 37, group: 1,  period: 5, color: "alkali",    image: img(37), mass: "85.468" },
    { symbol: "Sr", number: 38, group: 2,  period: 5, color: "alkaline",  image: img(38), mass: "87.62" },
    { symbol: "Y",  number: 39, group: 3,  period: 5, color: "transition",image: img(39), mass: "88.906" },
    { symbol: "Zr", number: 40, group: 4,  period: 5, color: "transition",image: img(40), mass: "91.224" },
    { symbol: "Nb", number: 41, group: 5,  period: 5, color: "transition",image: img(41), mass: "92.906" },
    { symbol: "Mo", number: 42, group: 6,  period: 5, color: "transition",image: img(42), mass: "95.95" },
    { symbol: "Tc", number: 43, group: 7,  period: 5, color: "transition",image: img(43), mass: "98" },
    { symbol: "Ru", number: 44, group: 8,  period: 5, color: "transition",image: img(44), mass: "101.07" },
    { symbol: "Rh", number: 45, group: 9,  period: 5, color: "transition",image: img(45), mass: "102.91" },
    { symbol: "Pd", number: 46, group: 10, period: 5, color: "transition",image: img(46), mass: "106.42" },
    { symbol: "Ag", number: 47, group: 11, period: 5, color: "transition",image: img(47), mass: "107.87" },
    { symbol: "Cd", number: 48, group: 12, period: 5, color: "transition",image: img(48), mass: "112.41" },
    { symbol: "In", number: 49, group: 13, period: 5, color: "post-transition", image: img(49), mass: "114.82" },
    { symbol: "Sn", number: 50, group: 14, period: 5, color: "post-transition", image: img(50), mass: "118.71" },
    { symbol: "Sb", number: 51, group: 15, period: 5, color: "metalloid", image: img(51), mass: "121.76" },
    { symbol: "Te", number: 52, group: 16, period: 5, color: "metalloid", image: img(52), mass: "127.60" },
    { symbol: "I",  number: 53, group: 17, period: 5, color: "halogen",   image: img(53), mass: "126.90" },
    { symbol: "Xe", number: 54, group: 18, period: 5, color: "noble-gas", image: img(54), mass: "131.29" },

    // Período 6 (excluindo os lantanídeos)
    { symbol: "Cs", number: 55, group: 1,  period: 6, color: "alkali",    image: img(55), mass: "132.91" },
    { symbol: "Ba", number: 56, group: 2,  period: 6, color: "alkaline",  image: img(56), mass: "137.33" },
    { symbol: "Hf", number: 72, group: 4,  period: 6, color: "transition",image: img(72), mass: "178.49" },
    { symbol: "Ta", number: 73, group: 5,  period: 6, color: "transition",image: img(73), mass: "180.95" },
    { symbol: "W",  number: 74, group: 6,  period: 6, color: "transition",image: img(74), mass: "183.84" },
    { symbol: "Re", number: 75, group: 7,  period: 6, color: "transition",image: img(75), mass: "186.21" },
    { symbol: "Os", number: 76, group: 8,  period: 6, color: "transition",image: img(76), mass: "190.23" },
    { symbol: "Ir", number: 77, group: 9,  period: 6, color: "transition",image: img(77), mass: "192.22" },
    { symbol: "Pt", number: 78, group: 10, period: 6, color: "transition",image: img(78), mass: "195.08" },
    { symbol: "Au", number: 79, group: 11, period: 6, color: "transition",image: img(79), mass: "196.97" },
    { symbol: "Hg", number: 80, group: 12, period: 6, color: "transition",image: img(80), mass: "200.59" },
    { symbol: "Tl", number: 81, group: 13, period: 6, color: "post-transition", image: img(81), mass: "204.38" },
    { symbol: "Pb", number: 82, group: 14, period: 6, color: "post-transition", image: img(82), mass: "207.2" },
    { symbol: "Bi", number: 83, group: 15, period: 6, color: "post-transition", image: img(83), mass: "208.98" },
    { symbol: "Po", number: 84, group: 16, period: 6, color: "metalloid", image: img(84), mass: "209" },
    { symbol: "At", number: 85, group: 17, period: 6, color: "halogen",   image: img(85), mass: "210" },
    { symbol: "Rn", number: 86, group: 18, period: 6, color: "noble-gas", image: img(86), mass: "222" },

    // Período 7 (excluindo os actinídeos)
    { symbol: "Fr", number: 87, group: 1,  period: 7, color: "alkali",    image: img(87), mass: "223" },
    { symbol: "Ra", number: 88, group: 2,  period: 7, color: "alkaline",  image: img(88), mass: "226" },
    { symbol: "Rf", number: 104, group: 4, period: 7, color: "transition",image: img(104), mass: "267" },
    { symbol: "Db", number: 105, group: 5, period: 7, color: "transition",image: img(105), mass: "270" },
    { symbol: "Sg", number: 106, group: 6, period: 7, color: "transition",image: img(106), mass: "271" },
    { symbol: "Bh", number: 107, group: 7, period: 7, color: "transition",image: img(107), mass: "270" },
    { symbol: "Hs", number: 108, group: 8, period: 7, color: "transition",image: img(108), mass: "277" },
    { symbol: "Mt", number: 109, group: 9, period: 7, color: "transition",image: img(109), mass: "276" },
    { symbol: "Ds", number: 110, group: 10, period: 7, color: "transition",image: img(110), mass: "281" },
    { symbol: "Rg", number: 111, group: 11, period: 7, color: "transition",image: img(111), mass: "280" },
    { symbol: "Cn", number: 112, group: 12, period: 7, color: "transition",image: img(112), mass: "285" },
    { symbol: "Nh", number: 113, group: 13, period: 7, color: "post-transition", image: img(113), mass: "286" },
    { symbol: "Fl", number: 114, group: 14, period: 7, color: "post-transition", image: img(114), mass: "289" },
    { symbol: "Mc", number: 115, group: 15, period: 7, color: "post-transition", image: img(115), mass: "290" },
    { symbol: "Lv", number: 116, group: 16, period: 7, color: "post-transition", image: img(116), mass: "293" },
    { symbol: "Ts", number: 117, group: 17, period: 7, color: "halogen", image: img(117), mass: "294" },
    { symbol: "Og", number: 118, group: 18, period: 7, color: "noble-gas", image: img(118), mass: "294" }
  ];

  // Lanthanídeos (linha 8, colunas 4 a 18)
  const lanthanides = [
    { symbol: "La", number: 57, mass: "138.91", image: img(57), color: "lanthanide" },
    { symbol: "Ce", number: 58, mass: "140.12", image: img(58), color: "lanthanide" },
    { symbol: "Pr", number: 59, mass: "140.91", image: img(59), color: "lanthanide" },
    { symbol: "Nd", number: 60, mass: "144.24", image: img(60), color: "lanthanide" },
    { symbol: "Pm", number: 61, mass: "145",    image: img(61), color: "lanthanide" },
    { symbol: "Sm", number: 62, mass: "150.36", image: img(62), color: "lanthanide" },
    { symbol: "Eu", number: 63, mass: "151.96", image: img(63), color: "lanthanide" },
    { symbol: "Gd", number: 64, mass: "157.25", image: img(64), color: "lanthanide" },
    { symbol: "Tb", number: 65, mass: "158.93", image: img(65), color: "lanthanide" },
    { symbol: "Dy", number: 66, mass: "162.50", image: img(66), color: "lanthanide" },
    { symbol: "Ho", number: 67, mass: "164.93", image: img(67), color: "lanthanide" },
    { symbol: "Er", number: 68, mass: "167.26", image: img(68), color: "lanthanide" },
    { symbol: "Tm", number: 69, mass: "168.93", image: img(69), color: "lanthanide" },
    { symbol: "Yb", number: 70, mass: "173.05", image: img(70), color: "lanthanide" },
    { symbol: "Lu", number: 71, mass: "174.97", image: img(71), color: "lanthanide" }
  ];

  // Actinídeos (linha 9, colunas 4 a 18)
  const actinides = [
    { symbol: "Ac", number: 89,  mass: "227",    image: img(89),  color: "actinide" },
    { symbol: "Th", number: 90,  mass: "232.04", image: img(90),  color: "actinide" },
    { symbol: "Pa", number: 91,  mass: "231.04", image: img(91),  color: "actinide" },
    { symbol: "U",  number: 92,  mass: "238.03", image: img(92),  color: "actinide" },
    { symbol: "Np", number: 93,  mass: "237",    image: img(93),  color: "actinide" },
    { symbol: "Pu", number: 94,  mass: "244",    image: img(94),  color: "actinide" },
    { symbol: "Am", number: 95,  mass: "243",    image: img(95),  color: "actinide" },
    { symbol: "Cm", number: 96,  mass: "247",    image: img(96),  color: "actinide" },
    { symbol: "Bk", number: 97,  mass: "247",    image: img(97),  color: "actinide" },
    { symbol: "Cf", number: 98,  mass: "251",    image: img(98),  color: "actinide" },
    { symbol: "Es", number: 99,  mass: "252",    image: img(99),  color: "actinide" },
    { symbol: "Fm", number: 100, mass: "257",    image: img(100), color: "actinide" },
    { symbol: "Md", number: 101, mass: "258",    image: img(101), color: "actinide" },
    { symbol: "No", number: 102, mass: "259",    image: img(102), color: "actinide" },
    { symbol: "Lr", number: 103, mass: "262",    image: img(103), color: "actinide" }
  ];

  // Função para atualizar o painel de resumo – agora apenas atualiza a imagem
  function atualizarResumo(el) {
    summaryImage.src = el.image;
  }

  // Função para criar um elemento na tabela (com número atômico + símbolo + massa)
  function criarElemento(el, gridRow = null, gridColumn = null) {
    const elDiv = document.createElement("div");
    elDiv.classList.add("element", el.color);

    elDiv.innerHTML = `
      <span class="atomic-number">${el.number}</span>
      <span class="symbol">${el.symbol}</span>
      <span class="atomic-mass">${el.mass}</span>
    `;

    if (gridRow !== null) elDiv.style.gridRow = gridRow;
    if (gridColumn !== null) elDiv.style.gridColumn = gridColumn;

    elDiv.addEventListener("click", function () {
      atualizarResumo(el);
      elementSummary.classList.add("show");
    });

    periodicTable.appendChild(elDiv);
  }

  // Criação dos elementos principais
  mainElements.forEach((el) => criarElemento(el, el.period, el.group));

  // Criação dos lanthanídeos (linha 8, colunas 4 a 18)
  lanthanides.forEach((el, index) => criarElemento(el, 8, index + 4));

  // Criação dos actinídeos (linha 9, colunas 4 a 18)
  actinides.forEach((el, index) => criarElemento(el, 9, index + 4));

  // Função para fechar o painel de resumo
  window.closeElement = function () {
    elementSummary.classList.remove("show");
  };
});
