// Examine the code in the editor. It's using a method that has side effects in the program, causing incorrect behaviour.
// The final list of open tabs, stored in finalTabs.tabs, should be ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] but the list produced by the code is slightly different.

// Change Window.prototype.tabClose so that it removes the correct tab.

// tabs é um array de títulos de cada site aberto na janela
const Window = function (tabs) {
  this.tabs = tabs; // Mantemos um registro do array dentro do objeto
};

// Quando você junta duas janelas em apenas uma
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// Quando você abre uma nova aba no final
Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab"); // Vamos abrir uma nova aba por enquanto
  return this;
};

// Quando você fecha uma aba
Window.prototype.tabClose = function (index) {
  // Altere apenas o código abaixo desta linha

  const tabsBeforeIndex = this.tabs.slice(0, index); // Obtém as abas antes da aba
  console.log(tabsBeforeIndex);
  const tabsAfterIndex = this.tabs.slice(index + 1); // Obtém as abas após a aba
  // const tabsAfterIndex = this.tabs.splice(1); // Obtém as abas após a aba
  console.log(tabsAfterIndex);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Junte-as

  // Altere apenas o código acima desta linha

  return this;
};

// Vamos criar três janelas no navegador
const workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]); // Sua caixa de correio, unidade e outros locais de trabalho
const socialWindow = new Window([
  "FB",
  "Gitter",
  "Reddit",
  "Twitter",
  "Medium",
]); // Sites sociais
const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Sites de entretenimento

// Agora, realize a abertura e o fechamento da aba, assim como outras operações
const finalTabs = socialWindow
  .tabOpen() // Abra uma nova aba para memes de gato
  .join(videoWindow.tabClose(2)) // Fechar a terceira aba na janela de vídeo e entrar
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
