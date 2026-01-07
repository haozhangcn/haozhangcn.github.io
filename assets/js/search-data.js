
const currentUrl = window.location.href;
const siteUrl = "https://haozhangcn.github.io"; 
let updatedUrl = currentUrl.replace("https://haozhangcn.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-services",
          title: "services",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/en-us/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "news-i-was-awarded-the-chinese-government-scholarship-by-the-chinese-scholarship-council-csc",
          title: 'I was awarded the Chinese Government Scholarship by the Chinese Scholarship Council (CSC)....',
          description: "",
          section: "News",},{id: "news-automatic-soil-desiccation-crack-recognition-using-deep-learning-was-selected-as-the-insightful-paper-on-artificial-intelligence-and-statistics-in-geotechnics-published-in-the-decade-2013-2023",
          title: '“Automatic Soil Desiccation Crack Recognition Using Deep Learning” was selected as the insightful...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/en-us/20231027_geotech/";
            },},{id: "news-i-am-now-in-singpore-and-i-will-work-in-assoc-prof-chau-yuen-s-group-in-nanyang-technological-university-as-a-visiting-ph-d-student-in-year-2024",
          title: 'I am now in Singpore, and I will work in Assoc Prof Chau...',
          description: "",
          section: "News",},{id: "news-our-paper-breathing-phenomenon-of-soil-desiccation-cracking-field-monitoring-and-insights-is-accepted-by-journal-of-geophysical-research-earth-surface",
          title: 'Our paper “Breathing Phenomenon of Soil Desiccation Cracking: Field Monitoring and Insights” is...',
          description: "",
          section: "News",},{id: "news-our-paper-sswsrnet-a-semi-supervised-few-shot-learning-framework-for-wireless-signal-recognition-is-accpeted-by-ieee-transactions-on-communications",
          title: 'Our paper “SSwsrNet: A Semi-Supervised Few-Shot Learning Framework for Wireless Signal Recognition” is...',
          description: "",
          section: "News",},{id: "news-a-paper-was-accepted-at-the-workshop-on-explainable-artificial-intelligence-xai-at-ijcai-2024",
          title: 'A paper was accepted at the Workshop on Explainable Artificial Intelligence (XAI) at...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/en-us/20240604_ijcai24/";
            },},{id: "news-our-paper-breathing-phenomenon-of-soil-desiccation-cracking-field-monitoring-and-insights-is-reported-by-eos-editors-highlights-in-eos-website-and-wechat",
          title: 'Our paper “Breathing Phenomenon of Soil Desiccation Cracking: Field Monitoring and Insights” is...',
          description: "",
          section: "News",},{id: "news-our-paper-soil-desiccation-crack-recognition-new-paradigm-and-field-application-is-accpeted-by-journal-of-geophysical-research-machine-learning-and-computation",
          title: 'Our paper “Soil Desiccation Crack Recognition: New Paradigm and Field Application” is accpeted...',
          description: "",
          section: "News",},{id: "news-our-paper-fsos-amc-few-shot-open-set-learning-for-automatic-modulation-classification-is-accepted-by-16th-international-conference-on-wireless-communications-and-signal-processing-wcsp-2024",
          title: 'Our paper “FSOS-AMC: Few-Shot Open-Set Learning for Automatic Modulation Classification” is accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-when-geoscience-meets-foundation-models-towards-general-geoscience-artificial-intelligence-system-is-accepted-by-ieee-geoscience-and-remote-sensing-magazine",
          title: '🎉🎉🎉Our paper “When Geoscience Meets Foundation Models: Towards General Geoscience Artificial Intelligence System”...',
          description: "",
          section: "News",},{id: "news-our-paper-xgeos-ai-an-interpretable-learning-framework-for-deciphering-geoscience-is-accepted-by-environmental-earth-sciences",
          title: '🎉🎉🎉Our paper “XGeoS-AI: An Interpretable Learning Framework for Deciphering Geoscience” is accepted by...',
          description: "",
          section: "News",},{id: "news-our-paper-fsos-amc-few-shot-open-set-learning-for-automatic-modulation-classification-over-multipath-fading-channels-is-accepted-by-ieee-internet-of-things-journal",
          title: 'Our paper “FSOS-AMC: Few-Shot Open-Set Learning for Automatic Modulation Classification Over Multipath Fading...',
          description: "",
          section: "News",},{id: "news-i-have-successfully-completed-my-phd-dissertation-defense",
          title: '🎉🎉🎉 I have successfully completed my PhD dissertation defense!',
          description: "",
          section: "News",},{id: "news-our-paper-revolution-of-wireless-signal-recognition-for-6g-recent-advances-challenges-and-future-directions-is-accepted-by-ieee-communications-surveys-amp-amp-tutorials",
          title: '🎉🎉🎉Our paper “Revolution of Wireless Signal Recognition for 6G: Recent Advances, Challenges and...',
          description: "",
          section: "News",},{id: "news-our-paper-a-federated-learning-based-lightweight-network-with-zero-trust-for-uav-authentication-is-accepted-by-ieee-transactions-on-information-forensics-and-security",
          title: '🎉🎉🎉Our paper “A Federated Learning-based Lightweight Network with Zero Trust for UAV Authentication”...',
          description: "",
          section: "News",},{id: "news-three-papers-are-accepted-by-ieee-globecom-2025",
          title: '🎉🎉🎉 Three papers are accepted by IEEE Globecom 2025.',
          description: "",
          section: "News",},{id: "news-one-paper-is-accepted-by-ieee-transactions-on-vehicular-technology",
          title: '🎉🎉🎉 One paper is accepted by IEEE Transactions on Vehicular Technology.',
          description: "",
          section: "News",},{id: "news-three-papers-are-accepted-by-ucom-2025",
          title: '🎉🎉🎉 Three papers are accepted by Ucom 2025.',
          description: "",
          section: "News",},{id: "news-our-paper-spectrum-cognition-semantic-situation-for-next-generation-spectrum-management-is-accepted-by-ieee-network",
          title: '🎉🎉🎉 Our paper “Spectrum Cognition: Semantic Situation for Next-Generation Spectrum Management” is accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-distributed-multi-task-learning-for-joint-wireless-signal-enhancement-and-recognition-is-accepted-by-ieee-transactions-on-cognitive-communications-and-networking",
          title: '🎉🎉🎉 Our paper “Distributed Multi-Task Learning for Joint Wireless Signal Enhancement and Recognition”...',
          description: "",
          section: "News",},{id: "news-our-paper-spectrumfm-a-foundation-model-for-intelligent-spectrum-management-is-accepted-by-ieee-journal-on-selected-areas-in-communications",
          title: '🎉🎉🎉 Our paper “SpectrumFM: A Foundation Model for Intelligent Spectrum Management” is accepted...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-excellent-doctoral-dissertation-award-of-china-electronics-education-society-cese-for-my-dissertation-intelligent-wireless-signal-recognition-method-in-complex-electromagnetic-environment",
          title: '🎉🎉🎉 I was awarded “Excellent Doctoral Dissertation Award of China Electronics Education Society...',
          description: "",
          section: "News",},{id: "news-my-homepage-has-been-rebuilt-to-support-both-english-and-chinese",
          title: '🎉🎉🎉 My homepage has been rebuilt to support both English and Chinese.',
          description: "",
          section: "News",},{id: "projects-few-sample-modulation-identification-under-high-dynamic-environment",
          title: 'Few Sample Modulation Identification under High Dynamic Environment',
          description: "Postgraduate Research &amp; Practice Innovation Program of Jiangsu Province",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/fsamc/";
            },},{id: "projects-research-on-lightweight-convolutional-neural-networks",
          title: 'Research on Lightweight Convolutional Neural Networks',
          description: "Innovation Fund for Graduate of Nanchang University",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/lightcnn_ncu/";
            },},{id: "projects-research-on-comprehensive-mechanical-performance-of-coral-concrete-foundation-island-and-reef-wind-turbines-based-on-interpretable-deep-learning",
          title: 'Research on Comprehensive Mechanical Performance of Coral Concrete Foundation Island and Reef Wind...',
          description: "Interdisciplinary Innovation Fund for Doctoral Students of NUAA",
          section: "Projects",handler: () => {
              window.location.href = "/projects/en-us/xai_nuaa/";
            },},{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
          id: 'lang-zh',
          title: 'zh',
          section: 'Languages',
          handler: () => {
            window.location.href = "/zh" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
