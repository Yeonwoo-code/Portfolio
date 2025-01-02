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

  console.log(`Fetching content from: ${projectUrl}`); // 요청 URL 디버깅

  // Fetch 요청
  fetch(projectUrl)
    .then(response => {
      if (response.ok) {
        console.log(`Successfully fetched content from: ${projectUrl}`); // 성공 로그
        return response.text();
      }
      throw new Error(`Failed to load project details. Status: ${response.status}, URL: ${projectUrl}`);
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const content = doc.querySelector(".post-content");
      if (content) {
        console.log(`Modal content successfully retrieved for URL: ${projectUrl}`);
        modalDetails.innerHTML = content.innerHTML;
      } else {
        console.warn(`Content not found in response for URL: ${projectUrl}`);
        modalDetails.innerHTML = "Content not found.";
      }
      modal.style.display = "block";
    })
    .catch(error => {
      console.error(`Error fetching content: ${error.message}`); // 에러 상세 출력
      modalDetails.innerHTML = `<p>Error loading content: ${error.message}</p>`;
      modal.style.display = "block";
    });
}


// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.style.display = "none";
}
