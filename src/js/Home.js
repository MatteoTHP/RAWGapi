const Home = (argument = "") => {
  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles">Hey, this page is a Home template, about  : ${argument}</div>
      </section>
    `;
  };
  render();
};

export {Home};