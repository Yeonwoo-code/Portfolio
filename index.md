---
layout: default
title: "My Portfolio"
---
{% include header.html %}
<h1>About LEE</h1>

{% include about.html %}
<h1>My Projects</h1>

<!-- 카테고리 필터 버튼 -->
<div class="category-buttons">
  <button onclick="filterPosts('all')">Show All</button>
  <button onclick="filterPosts('Programing')">Web Development</button>
  <button onclick="filterPosts('Bigdata')">AI</button>
</div>

{% include projects.html %}
