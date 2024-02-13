const parElement = document.querySelector('#gameDetail');

const render = (data) => {
  console.log(data);
  parElement.innerHTML = `جزییات بازی`;
};

export { render };
