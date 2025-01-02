---
layout: default
title: "My Portfolio"
---
{% include header.html %}

{% include about.html %}

<!-- 카테고리 필터 버튼 -->
<div class="category-buttons">
  <button onclick="filterPosts('all')">Show All</button>
  <button onclick="filterPosts('Programing')"> Programing </button>
  <button onclick="filterPosts('ETC')"> Etc. </button>
</div>

{% include projects.html %}
