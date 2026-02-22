document.addEventListener("DOMContentLoaded", function () {
  const periodicTable = document.getElementById("periodicTable");
  const summaryImage = document.getElementById("summary-image");
  const elementSummary = document.getElementById("element-summary");

  // Base URL das imagens
  const baseUrl = "https://raw.githubusercontent.com/priscillawy/inicia-o/main/";

  // Array de elementos principais (períodos 1 a 7, exceto os blocos f)
  const mainElements = [
    // Período 1
    { symbol: "H", group: 1, period: 1, color: "non-metal", image: baseUrl + "elemento 1_20250318_174546_0000.png", mass: "1.008" },
    { symbol: "He", group: 18, period: 1, color: "noble-gas", image: baseUrl + "elemento 2_20250318_174033_0000.png", mass: "4.0026" },
    // Período 2
    { symbol: "Li", group: 1, period: 2, color: "alkali", image: baseUrl + "elemento 3_20250318_223720_0000.png", mass: "6.94" },
    { symbol: "Be", group: 2, period: 2, color: "alkaline", image: baseUrl + "elemento 4_20250322_155900_0000.png", mass: "9.0122" },
    { symbol: "B", group: 13, period: 2, color: "metalloid", image: baseUrl + "elemento 5_20250318_230622_0000.png", mass: "10.81" },
    { symbol: "C", group: 14, period: 2, color: "non-metal", image: baseUrl + "elemento 6_20250318_230955_0000.png", mass: "12.011" },
    { symbol: "N", group: 15, period: 2, color: "non-metal", image: baseUrl + "elemento 7_20250318_231322_0000.png", mass: "14.007" },
    { symbol: "O", group: 16, period: 2, color: "non-metal", image: baseUrl + "elemento 8_20250318_231612_0000.png", mass: "15.999" },
    { symbol: "F", group: 17, period: 2, color: "halogen", image: baseUrl + "elemento 9_20250318_232151_0000.png", mass: "18.998" },
    { symbol: "Ne", group: 18, period: 2, color: "noble-gas", image: baseUrl + "elemento 10_20250322_214640_0000.png", mass: "20.180" },
    // Período 3
    { symbol: "Na", group: 1, period: 3, color: "alkali", image: baseUrl + "elemento 11_20250318_223846_0000.png", mass: "22.990" },
    { symbol: "Mg", group: 2, period: 3, color: "alkaline", image: baseUrl + "elemento 12_20250318_180100_0000.png", mass: "24.305" },
    { symbol: "Al", group: 13, period: 3, color: "post-transition", image: baseUrl + "elemento 13_20250318_230832_0000.png", mass: "26.982" },
    { symbol: "Si", group: 14, period: 3, color: "metalloid", image: baseUrl + "elemento 14_20250318_231153_0000.png", mass: "28.085" },
    { symbol: "P", group: 15, period: 3, color: "non-metal", image: baseUrl + "elemento 15_20250318_182130_0000.png", mass: "30.974" },
    { symbol: "S", group: 16, period: 3, color: "non-metal", image: baseUrl + "elemento 16_20250318_231811_0000.png", mass: "32.06" },
    { symbol: "Cl", group: 17, period: 3, color: "halogen", image: baseUrl + "elemento 17_20250318_232332_0000.png", mass: "35.45" },
    { symbol: "Ar", group: 18, period: 3, color: "noble-gas", image: baseUrl + "elemento 18_20250318_181330_0000.png", mass: "39.948" },
    // Período 4
    { symbol: "K", group: 1, period: 4, color: "alkali", image: baseUrl + "elemento 19_20250318_224008_0000.png", mass: "39.098" },
    { symbol: "Ca", group: 2, period: 4, color: "alkaline", image: baseUrl + "elemento 20_20250318_174158_0000.png", mass: "40.078" },
    { symbol: "Sc", group: 3, period: 4, color: "transition", image: baseUrl + "elemento 21_20250318_224339_0000.png", mass: "44.956" },
    { symbol: "Ti", group: 4, period: 4, color: "transition", image: baseUrl + "elemento 22_20250318_180716_0000.png", mass: "47.867" },
    { symbol: "V", group: 5, period: 4, color: "transition", image: baseUrl + "elemento 23_20250322_215530_0000.png", mass: "50.942" },
    { symbol: "Cr", group: 6, period: 4, color: "transition", image: baseUrl + "elemento 24_20250318_224648_0000.png", mass: "51.996" },
    { symbol: "Mn", group: 7, period: 4, color: "transition", image: baseUrl + "elemento 25_20250318_183109_0000.png", mass: "54.938" },
    { symbol: "Fe", group: 8, period: 4, color: "transition", image: baseUrl + "elemento 26_20250318_224852_0000.png", mass: "55.845" },
    { symbol: "Co", group: 9, period: 4, color: "transition", image: baseUrl + "elemento 27_20250319_210210_0000.png", mass: "58.933" },
    { symbol: "Ni", group: 10, period: 4, color: "transition", image: baseUrl + "elemento 28_20250318_225213_0000.png", mass: "58.693" },
    { symbol: "Cu", group: 11, period: 4, color: "transition", image: baseUrl + "elemento 29_20250318_225948_0000.png", mass: "63.546" },
    { symbol: "Zn", group: 12, period: 4, color: "transition", image: baseUrl + "elemento 30_20250318_175233_0000.png", mass: "65.38" },
    { symbol: "Ga", group: 13, period: 4, color: "post-transition", image: baseUrl + "elemento 31_20250318_182824_0000.png", mass: "69.723" },
    { symbol: "Ge", group: 14, period: 4, color: "metalloid", image: baseUrl + "elemento 32_20250319_205728_0000.png", mass: "72.630" },
    { symbol: "As", group: 15, period: 4, color: "metalloid", image: baseUrl + "elemento 33_20250322_205627_0000.png", mass: "74.922" },
    { symbol: "Se", group: 16, period: 4, color: "non-metal", image: baseUrl + "elemento 34_20250318_231950_0000.png", mass: "78.971" },
    { symbol: "Br", group: 17, period: 4, color: "halogen", image: baseUrl + "elemento 35_20250322_231532_0000.png", mass: "79.904" },
    { symbol: "Kr", group: 18, period: 4, color: "noble-gas", image: baseUrl + "elemento 36_20250318_174921_0000.png", mass: "83.798" },
    // Período 5
    { symbol: "Rb", group: 1, period: 5, color: "alkali", image: baseUrl + "elemento 37_20250322_155816_0000.png", mass: "85.468" },
    { symbol: "Sr", group: 2, period: 5, color: "alkaline", image: baseUrl + "elemento 38_20250318_224219_0000.png", mass: "87.62" },
    { symbol: "Y", group: 3, period: 5, color: "transition", image: baseUrl + "elemento 39_20250322_155323_0000.png", mass: "88.906" },
    { symbol: "Zr", group: 4, period: 5, color: "transition", image: baseUrl + "elemento 40_20250322_154706_0000.png", mass: "91.224" },
    { symbol: "Nb", group: 5, period: 5, color: "transition", image: baseUrl + "elemento 41_20250322_160822_0000.png", mass: "92.906" },
    { symbol: "Mo", group: 6, period: 5, color: "transition", image: baseUrl + "elemento 42_20250318_180515_0000.png", mass: "95.95" },
    { symbol: "Tc", group: 7, period: 5, color: "transition", image: baseUrl + "elemento 43_20250322_202020_0000.png", mass: "98" },
    { symbol: "Ru", group: 8, period: 5, color: "transition", image: baseUrl + "elemento 44_20250318_225017_0000.png", mass: "101.07" },
    { symbol: "Rh", group: 9, period: 5, color: "transition", image: baseUrl + "elemento 45_20250319_210101_0000.png", mass: "102.91" },
    { symbol: "Pd", group: 10, period: 5, color: "transition", image: baseUrl + "elemento 46_20250318_225635_0000.png", mass: "106.42" },
    { symbol: "Ag", group: 11, period: 5, color: "transition", image: baseUrl + "elemento 47_20250322_230914_0000.png", mass: "107.87" },
    { symbol: "Cd", group: 12, period: 5, color: "transition", image: baseUrl + "elemento 48_20250319_210425_0000.png", mass: "112.41" },
    { symbol: "In", group: 13, period: 5, color: "post-transition", image: baseUrl + "elemento 49_20250318_182510_0000.png", mass: "114.82" },
    { symbol: "Sn", group: 14, period: 5, color: "post-transition", image: baseUrl + "elemento 50_20250322_231729_0000.png", mass: "118.71" },
    { symbol: "Sb", group: 15, period: 5, color: "metalloid", image: baseUrl + "elemento 51_20250318_210416_0000.png", mass: "121.76" },
    { symbol: "Te", group: 16, period: 5, color: "metalloid", image: baseUrl + "elemento 52_20250322_205736_0000.png", mass: "127.60" },
    { symbol: "I", group: 17, period: 5, color: "halogen", image: baseUrl + "elemento 53_20250318_181526_0000.png", mass: "126.90" },
    { symbol: "Xe", group: 18, period: 5, color: "noble-gas", image: baseUrl + "elemento 54_20250318_173756_0000.png", mass: "131.29" },
    // Período 6 (excluindo os lanthanídeos)
    { symbol: "Cs", group: 1, period: 6, color: "alkali", image: baseUrl + "elemento 55_20250322_155637_0000.png", mass: "132.91" },
    { symbol: "Ba", group: 2, period: 6, color: "alkaline", image: baseUrl + "elemento 56_20250320_064118_0000.png", mass: "137.33" },
    { symbol: "Hf", group: 4, period: 6, color: "transition", image: baseUrl + "elemento 72_20250322_160353_0000.png", mass: "178.49" },
    { symbol: "Ta", group: 5, period: 6, color: "transition", image: baseUrl + "elemento 73_20250318_224506_0000.png", mass: "180.95" },
    { symbol: "W", group: 6, period: 6, color: "transition", image: baseUrl + "elemento 74_20250318_175645_0000.png", mass: "183.84" },
    { symbol: "Re", group: 7, period: 6, color: "transition", image: baseUrl + "elemento 75_20250322_202232_0000.png", mass: "186.21" },
    { symbol: "Os", group: 8, period: 6, color: "transition", image: baseUrl + "elemento 76_20250322_202705_0000.png", mass: "190.23" },
    { symbol: "Ir", group: 9, period: 6, color: "transition", image: baseUrl + "elemento 77_20250322_203221_0000.png", mass: "192.22" },
    { symbol: "Pt", group: 10, period: 6, color: "transition", image: baseUrl + "elemento 78_20250322_230125_0000.png", mass: "195.08" },
    { symbol: "Au", group: 11, period: 6, color: "transition", image: baseUrl + "elemento 79_20250318_230131_0000.png", mass: "196.97" },
    { symbol: "Hg", group: 12, period: 6, color: "transition", image: baseUrl + "elemento 80_20250318_230257_0000.png", mass: "200.59" },
    { symbol: "Tl", group: 13, period: 6, color: "post-transition", image: baseUrl + "elemento 81_20250322_204731_0000.png", mass: "204.38" },
    { symbol: "Pb", group: 14, period: 6, color: "post-transition", image: baseUrl + "elemento 82_20250318_174426_0000.png", mass: "207.2" },
    { symbol: "Bi", group: 15, period: 6, color: "post-transition", image: baseUrl + "elemento 83_20250318_231452_0000.png", mass: "208.98" },
    { symbol: "Po", group: 16, period: 6, color: "metalloid", image: baseUrl + "elemento 84_20250322_205820_0000.png", mass: "209" },
    { symbol: "At", group: 17, period: 6, color: "halogen", image: baseUrl + "elemento 85_20250322_214816_0000.png", mass: "210" },
    { symbol: "Rn", group: 18, period: 6, color: "noble-gas", image: baseUrl + "elemento 86_20250322_214912_0000.png", mass: "222" },
    // Período 7 (excluindo os actinídeos, que ficarão na linha 9)
    { symbol: "Fr", group: 1, period: 7, color: "alkali", image: baseUrl + "elemento 87_20250322_155519_0000.png", mass: "223" },
    { symbol: "Ra", group: 2, period: 7, color: "alkaline", image: baseUrl + "elemento 88_20250322_155431_0000.png", mass: "226" },
    { symbol: "Rf", group: 4, period: 7, color: "transition", image: baseUrl + "elemento 104_20250322_160525_0000.png", mass: "267" },
    { symbol: "Db", group: 5, period: 7, color: "transition", image: baseUrl + "elemento 105_20250322_160928_0000.png", mass: "270" },
    { symbol: "Sg", group: 6, period: 7, color: "transition", image: baseUrl + "elemento 106_20250322_201504_0000.png", mass: "271" },
    { symbol: "Bh", group: 7, period: 7, color: "transition", image: baseUrl + "elemento 107_20250322_202350_0000.png", mass: "270" },
    { symbol: "Hs", group: 8, period: 7, color: "transition", image: baseUrl + "elemento 108_20250322_202737_0000.png", mass: "277" },
    { symbol: "Mt", group: 9, period: 7, color: "transition", image: baseUrl + "elemento 109_20250322_203526_0000.png", mass: "276" },
    { symbol: "Ds", group: 10, period: 7, color: "transition", image: baseUrl + "elemento 110_20250322_203852_0000.png", mass: "281" },
    { symbol: "Rg", group: 11, period: 7, color: "transition", image: baseUrl + "elemento 111_20250322_204108_0000.png", mass: "280" },
    { symbol: "Cn", group: 12, period: 7, color: "transition", image: baseUrl + "elemento 112_20250322_204438_0000.png", mass: "285" },
    { symbol: "Nh", group: 13, period: 7, color: "post-transition", image: baseUrl + "elemento 113_20250322_204809_0000.png", mass: "286" },
    { symbol: "Fl", group: 14, period: 7, color: "post-transition", image: baseUrl + "elemento 114_20250322_205251_0000.png", mass: "289" },
    { symbol: "Mc", group: 15, period: 7, color: "post-transition", image: baseUrl + "elemento 115_20250322_214228_0000.png", mass: "290" },
    { symbol: "Lv", group: 16, period: 7, color: "post-transition", image: baseUrl + "elemento 116_20250322_214306_0000.png", mass: "293" },
    { symbol: "Ts", group: 17, period: 7, color: "halogen", image: baseUrl + "elemento 117_20250322_214947_0000.png", mass: "294" },
    { symbol: "Og", group: 18, period: 7, color: "noble-gas", image: baseUrl + "elemento 118_20250322_215118_0000.png", mass: "294" }
  ];

  // Dados dos lanthanídeos (linha 8, colunas 4 a 18)
  const lanthanides = [
    { symbol: "La", mass: "138.91", image: baseUrl + "elemento 57_20250322_160634_0000.png", color: "lanthanide" },
    { symbol: "Ce", mass: "140.12", image: baseUrl + "elemento 58_20250319_210832_0000.png", color: "lanthanide" },
    { symbol: "Pr", mass: "140.91", image: baseUrl + "elemento 59_20250322_201605_0000.png", color: "lanthanide" },
    { symbol: "Nd", mass: "144.24", image: baseUrl + "elemento 60_20250319_210641_0000.png", color: "lanthanide" },
    { symbol: "Pm", mass: "145", image: baseUrl + "elemento 61_20250322_202816_0000.png", color: "lanthanide" },
    { symbol: "Sm", mass: "150.36", image: baseUrl + "elemento 62_20250322_203741_0000.png", color: "lanthanide" },
    { symbol: "Eu", mass: "151.96", image: baseUrl + "elemento 63_20250318_225817_0000.png", color: "lanthanide" },
    { symbol: "Gd", mass: "157.25", image: baseUrl + "elemento 64_20250319_205932_0000.png", color: "lanthanide" },
    { symbol: "Tb", mass: "158.93", image: baseUrl + "elemento 65_20250318_230423_0000.png", color: "lanthanide" },
    { symbol: "Dy", mass: "162.50", image: baseUrl + "elemento 66_20250322_204859_0000.png", color: "lanthanide" },
    { symbol: "Ho", mass: "164.93", image: baseUrl + "elemento 67_20250322_205337_0000.png", color: "lanthanide" },
    { symbol: "Er", mass: "167.26", image: baseUrl + "elemento 68_20250322_214342_0000.png", color: "lanthanide" },
    { symbol: "Tm", mass: "168.93", image: baseUrl + "elemento 69_20250319_205523_0000.png", color: "lanthanide" },
    { symbol: "Yb", mass: "173.05", image: baseUrl + "elemento 70_20250319_205251_0000.png", color: "lanthanide" },
    { symbol: "Lu", mass: "174.97", image: baseUrl + "elemento 71_20250322_215219_0000.png", color: "lanthanide" }
  ];

  // Dados dos actinídeos (linha 9, colunas 4 a 18)
  const actinides = [
    { symbol: "Ac", mass: "227", image: baseUrl + "elemento 89_20250322_160728_0000.png", color: "actinide" },
    { symbol: "Th", mass: "232.04", image: baseUrl + "elemento 90_20250322_161130_0000.png", color: "actinide" },
    { symbol: "Pa", mass: "231.04", image: baseUrl + "elemento 91_20250322_201915_0000.png", color: "actinide" },
    { symbol: "U", mass: "238.03", image: baseUrl + "elemento 92_20250322_202535_0000.png", color: "actinide" },
    { symbol: "Np", mass: "237", image: baseUrl + "elemento 93_20250322_203004_0000.png", color: "actinide" },
    { symbol: "Pu", mass: "244", image: baseUrl + "elemento 94_20250322_203813_0000.png", color: "actinide" },
    { symbol: "Am", mass: "243", image: baseUrl + "elemento 95_20250322_204031_0000.png", color: "actinide" },
    { symbol: "Cm", mass: "247", image: baseUrl + "elemento 96_20250322_204344_0000.png", color: "actinide" },
    { symbol: "Bk", mass: "247", image: baseUrl + "elemento 97_20250322_204534_0000.png", color: "actinide" },
    { symbol: "Cf", mass: "251", image: baseUrl + "elemento 98_20250322_204958_0000.png", color: "actinide" },
    { symbol: "Es", mass: "252", image: baseUrl + "elemento 99_20250322_205431_0000.png", color: "actinide" },
    { symbol: "Fm", mass: "257", image: baseUrl + "elemento 100_20250322_214536_0000.png", color: "actinide" },
    { symbol: "Md", mass: "258", image: baseUrl + "elemento 101_20250322_214610_0000.png", color: "actinide" },
    { symbol: "No", mass: "259", image: baseUrl + "elemento 102_20250322_215443_0000.png", color: "actinide" },
    { symbol: "Lr", mass: "262", image: baseUrl + "elemento 103_20250322_215322_0000.png", color: "actinide" }
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
  window.closeElement = function() {
    elementSummary.classList.remove("show");
  }
});