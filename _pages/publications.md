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
- <u><b>Hao Zhang</b></u>. Intelligent Wireless Signal Recognition Method in Complex Electromagnetic Environment [D]. Nanjing University of Aeronautics and Astronautics, 2025. <br>
  <u><b>张浩</b></u>. 复杂电磁环境下无线信号智能识别方法 [D]. 南京航空航天大学, 2025.


## Preprints
- <u><b>Hao Zhang</b></u>, Fuhui Zhou, Qihui Wu, and Chau Yuen. “Spectrum Cognition: Semantic Situation for Next-Generation Spectrum Management”, *IEEE Network* (**Major Revision**)
- <u><b>Hao Zhang</b></u>, Fuhui Zhou, Qihui Wu, and Chau Yuen. “Distributed Multi-Task Learning for Joint Wireless Signal Enhancement and Recognition”, *IEEE Transactions on Cognitive Communications and Networking* (Under Review)
- Jin-Jian Xu, <u><b>Hao Zhang</b></u>, Chao-Sheng Tang, Mohamed Ramy El-Maarry, Yao-Wen Yang, Lin Li, Bin Shi. “Drying Induces Mars Intermediate-Sized Cracks: New Evidence and Insight from Geometrical Quantification”. (Under Review) (Co-first author)
- Fuhui Zhou, Chunyu Liu, <u><b>Hao Zhang</b></u>, Wei Wu, Qihui Wu, Derrick Wing Kwan Ng, Tony Q. S. Quek, and Chan-Byoung Chae, “SpectrumFM: A Foundation Model for Intelligent Spectrum Management”, submitted to IEEE (Under Review) [[arXiv](https://arxiv.org/abs/2505.06256)]
- Chunyu Liu, <u><b>Hao Zhang</b></u>, Fuhui Zhou, Wei Wu, Qihui Wu, Derrick Wing Kwan Ng, Tony Q. S. Quek, and Chan-Byoung Chae, “SpectrumFM: Redefining Spectrum Cognition via Foundation Modeling”, submitted to IEEE GC (Under Review)
- Yifan Wei, Xiaodong Liu, <u><b>Hao Zhang</b></u>, Fuhui Zhou and Qihui Wu. “GenSpectraLM: Large Model-Driven Spectrum Map Construction with Electromagnetic Propagation”, submitted to IEEE GC (Under Review)
- Ming Xu, Huixin Ma, <u><b>Hao Zhang</b></u>, Fuhui Zhou and Qihui Wu. “PLMSNet: A Pseudo Labeling Multi-Scale Network for Semi-Supervised Spectrum Sensing”, submitted to IEEE GC (Under Review)
- Shijin Zhao, Qihui Wu, Fuhui Zhou, <u><b>Hao Zhang</b></u>, Yang Huang, and Kai-Kuang Ma. “Cognitive Escape Reinforcement Learning for Complex Decision Making”. IEEE Transactions on Vehicular Technology (**Major Revision**)


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




