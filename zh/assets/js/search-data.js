
const currentUrl = window.location.href;
const siteUrl = "https://haozhangcn.github.io"; 
let updatedUrl = currentUrl.replace("https://haozhangcn.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh".length > 0) {
  updatedUrl = updatedUrl.replace("/zh", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-关于",
    title: "关于",
    section: "导航菜单",
    handler: () => {
      window.location.href = "/zh/";
    },
  },{id: "nav-文章",
          title: "文章",
          description: "",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh/publications/";
          },
        },{id: "nav-项目",
          title: "项目",
          description: "",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh/projects/";
          },
        },{id: "nav-社会荣誉",
          title: "社会荣誉",
          description: "社会服务及个人荣誉",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh/services/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "文章",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "文章",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/assets/pdf/en-us/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2021/diagrams/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2020/twitter/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "文章",
        handler: () => {
          
            window.location.href = "/zh/blog/2015/formatting-and-links/";
          
        },
      },{id: "news-我获得了中国留学基金委-csc-颁发的中国政府奖学金",
          title: '我获得了中国留学基金委（CSC）颁发的中国政府奖学金。',
          description: "",
          section: "新闻",},{id: "news-automatic-soil-desiccation-crack-recognition-using-deep-learning-被选为2013-2023年十年间发表的关于岩土工程人工智能和统计的富有洞察力的论文",
          title: '“Automatic Soil Desiccation Crack Recognition Using Deep Learning” 被选为2013-2023年十年间发表的关于岩土工程人工智能和统计的富有洞察力的论文',
          description: "",
          section: "新闻",handler: () => {
              window.location.href = "/zh/news/zh/20231027_geotech/";
            },},{id: "news-我现在在新加坡-我将在南洋理工大学的chau-yuen教授的小组工作-作为2024年度的访问博士生",
          title: '我现在在新加坡，我将在南洋理工大学的Chau Yuen教授的小组工作，作为2024年度的访问博士生。',
          description: "",
          section: "新闻",},{id: "news-文章-breathing-phenomenon-of-soil-desiccation-cracking-field-monitoring-and-insights-被-journal-of-geophysical-research-earth-surface-接收",
          title: '文章 “Breathing Phenomenon of Soil Desiccation Cracking: Field Monitoring and Insights” 被 Journal...',
          description: "",
          section: "新闻",},{id: "news-文章-sswsrnet-a-semi-supervised-few-shot-learning-framework-for-wireless-signal-recognition-被-ieee-transactions-on-communications-接收",
          title: '文章 “SSwsrNet: A Semi-Supervised Few-Shot Learning Framework for Wireless Signal Recognition” 被 IEEE...',
          description: "",
          section: "新闻",},{id: "news-a-paper-was-accepted-at-the-workshop-on-explainable-artificial-intelligence-xai-at-ijcai-2024",
          title: 'A paper was accepted at the Workshop on Explainable Artificial Intelligence (XAI) at...',
          description: "",
          section: "新闻",handler: () => {
              window.location.href = "/zh/news/zh/20240604_ijcai24/";
            },},{id: "news-文章-breathing-phenomenon-of-soil-desiccation-cracking-field-monitoring-and-insights-由eos网站中的eos编辑亮点报道-详见微信公众号",
          title: '文章 “Breathing Phenomenon of Soil Desiccation Cracking: Field Monitoring and Insights” 由Eos网站中的Eos编辑亮点报道，详见微信公众号。',
          description: "",
          section: "新闻",},{id: "news-文章-soil-desiccation-crack-recognition-new-paradigm-and-field-application-被-journal-of-geophysical-research-machine-learning-and-computation-接收",
          title: '文章 “Soil Desiccation Crack Recognition: New Paradigm and Field Application” 被 Journal of...',
          description: "",
          section: "新闻",},{id: "news-文章-fsos-amc-few-shot-open-set-learning-for-automatic-modulation-classification-被-16th-international-conference-on-wireless-communications-and-signal-processing-wcsp-2024-接收",
          title: '文章 “FSOS-AMC: Few-Shot Open-Set Learning for Automatic Modulation Classification” 被 16th International Conference...',
          description: "",
          section: "新闻",},{id: "news-文章-when-geoscience-meets-foundation-models-towards-general-geoscience-artificial-intelligence-system-被-ieee-geoscience-and-remote-sensing-magazine-接收",
          title: '🎉🎉🎉文章 “When Geoscience Meets Foundation Models: Towards General Geoscience Artificial Intelligence System” 被...',
          description: "",
          section: "新闻",},{id: "news-文章-xgeos-ai-an-interpretable-learning-framework-for-deciphering-geoscience-被-environmental-earth-sciences-接收",
          title: '🎉🎉🎉文章 “XGeoS-AI: An Interpretable Learning Framework for Deciphering Geoscience” 被 Environmental Earth Sciences...',
          description: "",
          section: "新闻",},{id: "news-文章-fsos-amc-few-shot-open-set-learning-for-automatic-modulation-classification-over-multipath-fading-channels-被-ieee-internet-of-things-journal-接收",
          title: '文章 “FSOS-AMC: Few-Shot Open-Set Learning for Automatic Modulation Classification Over Multipath Fading Channels”...',
          description: "",
          section: "新闻",},{id: "news-我完成了博士论文答辩",
          title: '🎉🎉🎉 我完成了博士论文答辩!',
          description: "",
          section: "新闻",},{id: "news-文章-revolution-of-wireless-signal-recognition-for-6g-recent-advances-challenges-and-future-directions-被-ieee-communications-surveys-amp-amp-tutorials-接收",
          title: '🎉🎉🎉文章 “Revolution of Wireless Signal Recognition for 6G: Recent Advances, Challenges and Future...',
          description: "",
          section: "新闻",},{id: "news-文章-a-federated-learning-based-lightweight-network-with-zero-trust-for-uav-authentication-被-ieee-transactions-on-information-forensics-and-security-接收",
          title: '🎉🎉🎉文章 “A Federated Learning-based Lightweight Network with Zero Trust for UAV Authentication” 被...',
          description: "",
          section: "新闻",},{id: "news-三篇文章-ieee-globecom-2025-接收",
          title: '🎉🎉🎉 三篇文章 IEEE Globecom 2025 接收.',
          description: "",
          section: "新闻",},{id: "news-一篇文章被-ieee-transactions-on-vehicular-technology-接收",
          title: '🎉🎉🎉 一篇文章被 IEEE Transactions on Vehicular Technology 接收.',
          description: "",
          section: "新闻",},{id: "news-三篇文章-ucom-2025-接收",
          title: '🎉🎉🎉 三篇文章 Ucom 2025 接收.',
          description: "",
          section: "新闻",},{id: "news-文章-spectrum-cognition-semantic-situation-for-next-generation-spectrum-management-被-ieee-network-接收",
          title: '🎉🎉🎉 文章 “Spectrum Cognition: Semantic Situation for Next-Generation Spectrum Management” 被 IEEE Network...',
          description: "",
          section: "新闻",},{id: "news-文章-distributed-multi-task-learning-for-joint-wireless-signal-enhancement-and-recognition-被-ieee-transactions-on-cognitive-communications-and-networking-接收",
          title: '🎉🎉🎉 文章 “Distributed Multi-Task Learning for Joint Wireless Signal Enhancement and Recognition” 被...',
          description: "",
          section: "新闻",},{id: "news-文章-spectrumfm-a-foundation-model-for-intelligent-spectrum-management-被-ieee-journal-on-selected-areas-in-communications-接收",
          title: '🎉🎉🎉 文章 “SpectrumFM: A Foundation Model for Intelligent Spectrum Management” 被 IEEE Journal...',
          description: "",
          section: "新闻",},{id: "news-我的博士论文-复杂电磁环境下无线信号智能识别方法-获得-中国电子教育学会2025年优秀博士论文",
          title: '🎉🎉🎉 我的博士论文《复杂电磁环境下无线信号智能识别方法》获得 “中国电子教育学会2025年优秀博士论文”.',
          description: "",
          section: "新闻",},{id: "news-个人主页完成重构-同时支持中文和英文",
          title: '🎉🎉🎉 个人主页完成重构，同时支持中文和英文.',
          description: "",
          section: "新闻",},{id: "news-文章-drying-induces-mars-intermediate-sized-cracks-new-evidence-and-insight-from-geometrical-quantification-被-icarus-接收",
          title: '🎉🎉🎉 文章 “Drying induces Mars intermediate-sized cracks: New evidence and insight from geometrical...',
          description: "",
          section: "新闻",},{id: "news-文章-revolution-of-wireless-signal-recognition-for-6g-recent-advances-challenges-and-future-directions-被列为-esi-高被引文章",
          title: '🎉🎉🎉 文章 “Revolution of Wireless Signal Recognition for 6G: Recent Advances, Challenges and...',
          description: "",
          section: "新闻",},{id: "projects-高动态环境下小样本调制方式识别",
          title: '高动态环境下小样本调制方式识别',
          description: "江苏省研究生创新项目",
          section: "项目",handler: () => {
              window.location.href = "/zh/projects/zh/fsamc/";
            },},{id: "projects-轻量化卷积神经网络的研究",
          title: '轻量化卷积神经网络的研究',
          description: "南昌大学研究生创新基金",
          section: "项目",handler: () => {
              window.location.href = "/zh/projects/zh/lightcnn_ncu/";
            },},{id: "projects-基于可解释深度学习的珊瑚混凝土基础岛屿和礁石风力涡轮机综合力学性能研究",
          title: '基于可解释深度学习的珊瑚混凝土基础岛屿和礁石风力涡轮机综合力学性能研究',
          description: "南京航空航天大学博士生跨学科创新基金",
          section: "项目",handler: () => {
              window.location.href = "/zh/projects/zh/xai_nuaa/";
            },},{
        id: 'social-email',
        title: '发送邮件',
        section: '社交链接',
        handler: () => {
          window.open("mailto:", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: '社交链接',
        handler: () => {
          window.open("https://inspirehep.net/authors/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '社交链接',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '社交链接',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=zs9DkEAAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: '社交链接',
        handler: () => {
          window.open("https://www.haozhangcn.com/", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '语言',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '浅色模式',
      description: '切换到浅色模式',
      section: '主题设置',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '深色模式',
      description: '切换到深色模式',
      section: '主题设置',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '系统默认',
      description: '使用系统默认主题',
      section: '主题设置',
      handler: () => {
        setThemeSetting("system");
      },
    },];
