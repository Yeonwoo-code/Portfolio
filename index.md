---
layout: default
title: "My Portfolio"
---

{% include_relative header.md %}

<h1>About LEE</h1>
{% include_relative about.md %}

<h1>My Projects</h1>

<!-- 카테고리 필터 버튼 -->
<div class="category-buttons">
  <button onclick="filterPosts('all')">Show All</button>
  <button onclick="filterPosts('web-development')">Web Development</button>
  <button onclick="filterPosts('ai')">AI</button>
</div>

<!-- 프로젝트 카드 -->
<div class="projects">
  <div class="project-card" data-category="web-development">
    <img src="{{ site.baseurl }}/assets/images/project1.png" alt="Project 1 Image">
    <h2>Project 1</h2>
    <p>A web development project description.</p>
  </div>

  <div class="project-card" data-category="ai">
    <h2>Project 2</h2>
    <p>An AI project description.</p>
  </div>

  <div class="project-card" data-category="web-development ai">
    <h2>Project 3</h2>
    <p>A web development and AI project description.</p>
  </div>
</div>
