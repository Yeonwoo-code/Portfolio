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

// 모달 열기 함수
function openModal(element) {
  const modal = document.getElementById("project-modal");
  const modalDetails = document.getElementById("modal-details");
  const projectUrl = element.getAttribute("data-url");

  // Fetch로 콘텐츠 가져오기
  fetch(projectUrl)
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error("Failed to load project details.");
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const content = doc.querySelector(".post-content"); // 포스트 레이아웃에 맞게 수정
      modalDetails.innerHTML = content ? content.innerHTML : "Content not found.";
      modal.style.display = "block";
    })
    .catch(error => {
      modalDetails.innerHTML = `<p>Error loading content: ${error.message}</p>`;
      modal.style.display = "block";
    });
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "none";
}
