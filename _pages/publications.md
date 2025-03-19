---
layout: page
permalink: /publications/
title: Publications
description:  
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->



<!-- Bibsearch Feature -->

<!-- {% include bib_search.liquid %} -->
More information can be found in my [[<b><font color="#4285F4">G</font><font color="#DB4437">o</font><font color="#F4B400">o</font><font color="#4285F4">g</font><font color="#0F9D58">l</font><font color="#DB4437">e</font> <font color="#4285F4">Scholar</font></b>](https://scholar.google.com.hk/citations?user=zs9DkEAAAAAJ)]

## Thesis
- <u><b>Hao Zhang</b></u>. Fast and Efficient Networks for Small Object Detection [D]. Nanchang University, 2020. [[HTML](https://kns.cnki.net/KCMS/detail/detail.aspx?dbname=CMFD202101&filename=1020056234.nh)] <br>
  <u><b>张浩</b></u>. [快速高效小目标检测网络算法研究](https://kns.cnki.net/KCMS/detail/detail.aspx?dbname=CMFD202101&filename=1020056234.nh) [D].南昌大学,2020.
- <u><b>Hao Zhang</b></u>. Accurate and Intelligent Identification Method of Weak Signals in Complex Electromagnetic Environment [D]. Nanjing University of Aeronautics and Astronautics, 2025. <br>
  <u><b>张浩</b></u>. 复杂电磁环境下微弱信号精确智能识别方法 [D]. 南京航空航天大学, 2025.


## Preprints
- <u><b>Hao Zhang</b></u>, Fuhui Zhou, Hongyang Du, Qihui Wu, and Chau Yuen. "Revolution of Wireless Signal Recognition for 6G: Recent Advances, Challenges and Future Directions". *IEEE Communications Surveys & Tutorials* (**Major Revision**) [[arxiv](http://arxiv.org/abs/2503.08091)]
- <u><b>Hao Zhang</b></u>, Fuhui Zhou, Qihui Wu, and Chau Yuen. “Spectrum Cognition: Semantic Situation for Next-Generation Spectrum Management”, (Under Review)
- <u><b>Hao Zhang</b></u>, Fuhui Zhou, Wei Wang, Qihui Wu, and Chau Yuen. “A Federated Learning-based Lightweight Network with Zero Trust for UAV Authentication”, *IEEE Transactions on Information Forensics and Security* (Under Review)
- <u><b>Hao Zhang</b></u>, Fuhui Zhou, Qihui Wu, and Chau Yuen. “Distributed Multi-Task Learning for Joint Wireless Signal Enhancement and Recognition”, (Under Review)
- Jin-Jian Xu, <u><b>Hao Zhang</b></u>, Chao-Sheng Tang, Mohamed Ramy El-Maarry, Yao-Wen Yang, Lin Li, Bin Shi. “Drying Induces Mars Intermediate-Sized Cracks: New Evidence and Insight from Geometrical Quantification”. (Under Review) (Co-first author)
- Shijin Zhao, Qihui Wu, Fuhui Zhou, <u><b>Hao Zhang</b></u>, Yang Huang, and Kai-Kuang Ma. “Cognitive Escape Reinforcement Learning for Complex Decision Making”. Science China Information Sciences (Under Review)


## Papers
<div class="bib-switch mb-4">
  <button onclick="switchBibStyle('compact')" id="btn-compact" class="btn btn-primary active">List</button>
  <button onclick="switchBibStyle('detailed')" id="btn-detailed" class="btn btn-outline-primary">Year</button>
</div>

<div id="bib-container">
  <div id="bib-compact" class="bib-content">
    <div class="publications">
      {% bibliography --template bib_compact %}
    </div>
  </div>

  <div id="bib-detailed" class="bib-content" style="display: none;">
    <div class="selected">
      {% bibliography --template bib --group_by year --order descending %}
    </div>
  </div>
</div>

<style>
  .bib-switch {
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 1000;
    padding: 10px 0;
  }
  .bib-switch .btn {
    margin-right: 10px;
    top: 0;
    background-color: white;
    z-index: 1000;
  }
</style>

<script>
function switchBibStyle(style) {
  const compactDiv = document.getElementById('bib-compact');
  const detailedDiv = document.getElementById('bib-detailed');
  const compactBtn = document.getElementById('btn-compact');
  const detailedBtn = document.getElementById('btn-detailed');

  // Store current scroll position
  const scrollPosition = window.pageYOffset;

  if (style === 'compact') {
    compactDiv.style.display = 'block';
    detailedDiv.style.display = 'none';
    compactBtn.classList.remove('btn-outline-primary');
    compactBtn.classList.add('btn-primary');
    detailedBtn.classList.remove('btn-primary');
    detailedBtn.classList.add('btn-outline-primary');
  } else {
    compactDiv.style.display = 'none';
    detailedDiv.style.display = 'block';
    compactBtn.classList.remove('btn-primary');
    compactBtn.classList.add('btn-outline-primary');
    detailedBtn.classList.remove('btn-outline-primary');
    detailedBtn.classList.add('btn-primary');
  }

  // Restore scroll position after a short delay
  setTimeout(() => {
    window.scrollTo(0, scrollPosition);
  }, 10);
}

document.addEventListener('DOMContentLoaded', function() {
  const bibContainer = document.getElementById('bib-container');
  bibContainer.style.maxHeight = 'none';
});
</script>




