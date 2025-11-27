// Basic JS to load projects from projects.json and render

async function loadProjects(){
  const grid = document.getElementById('projects-grid');
  try {
    const res = await fetch('./projects.json');
    if(!res.ok) throw new Error('projects.json fetch failed');
    const projects = await res.json();
    grid.innerHTML = projects.map(p=>`<article class="card project-card" id="${p.id}">
      <img src="${p.image}" alt="${p.title}"/>
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
      <p style="font-size:12px;color:#9aa5b1;margin-top:8px">${(p.tools || []).join(' • ')}</p>
      <p style="margin-top:8px"><a href="${p.link}" class="button" target="_blank">View on GitHub</a></p>
    </article>`).join('');
  } catch (err) {
    console.error(err);
    grid.innerHTML = `<div class="card">프로젝트를 불러오지 못했습니다. 콘솔을 확인하세요.</div>`;
  }
}

window.addEventListener('DOMContentLoaded', ()=>{
  loadProjects();
});
