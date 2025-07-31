fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('app-list');
    const searchInput = document.getElementById('search');

    function renderList(filter = '') {
      container.innerHTML = '';
      data.filter(app => app.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(app => {
          const div = document.createElement('div');
          div.className = 'card';
          div.innerHTML = `<h3>${app.name}</h3><p>${app.desc}</p>`;
          container.appendChild(div);
        });
    }

    searchInput.addEventListener('input', (e) => renderList(e.target.value));
    renderList();
  });