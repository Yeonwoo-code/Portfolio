// 프로젝트 필터링 함수
function filterPosts(category) {
  const cards = document.querySelectorAll('.project-card');
  
  cards.forEach(card => {
    const categories = card.getAttribute('data-category').split(' ');
    
    if (category === 'all' || categories.includes(category)) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}
function openModal(element) {
  const modal = document.getElementById("project-modal");
  const modalDetails = document.getElementById("modal-details");
  const projectUrl = element.getAttribute("data-url");

  console.log(`Fetching content from: ${projectUrl}`); // 디버깅 로그 추가

  // Fetch 요청
  fetch(projectUrl)
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error(`Failed to load project details. Status: ${response.status}, URL: ${projectUrl}`);
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const content = doc.querySelector(".post-content");
      modalDetails.innerHTML = content ? content.innerHTML : "Content not found.";
      modal.style.display = "block";
    })
    .catch(error => {
      console.error(error); // 에러 상세 출력
      modalDetails.innerHTML = `<p>Error loading content: ${error.message}</p>`;
      modal.style.display = "block";
    });
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "none";
}
