import { projects, publications, education, experience, skillGroups } from "./content.js";

const copy = {
  en: {
    portfolio: "Research portfolio", nav: ["Research", "Projects", "Publications", "Experience"],
    eyebrow: "Mechanical Engineering × Scientific Machine Learning", name: "Chonghui Zhang", role: "I build learning systems for engineering design.",
    intro: "Mechanical engineer and researcher working across surrogate modeling, generative design, graph learning, and AI-assisted engineering workflows.",
    explore: "Explore selected work", email: "Start a conversation", coordinates: "Research coordinates", degree: "PhD · Mechanical Engineering", university: "McGill University · 2025",
    researchLabel: "Research", researchTitle: "From expensive simulation to fast, differentiable design intelligence.", researchText: "My work connects mechanical modeling with machine learning to generate structures, predict nonlinear fields, and optimize design decisions with fewer simulations.",
    themes: [["01", "Generative engineering", "Controllable inverse design for auxetic metamaterials and truss structures."], ["02", "Surrogate modeling", "Graph- and grid-based predictors for stress, strain, and nonlinear deformation."], ["03", "Engineering intelligence", "Scientific ML, knowledge transfer, and language models for engineering workflows."]],
    selected: "Selected projects", selectedTitle: "Mechanics problems, treated as learning systems.", contribution: "Contribution", methods: "Methods",
    publications: "Publications", publicationsTitle: "Selected research output", publicationsIntro: "Peer-reviewed work spanning metamaterials, soft robotics, generative models, and engineering design.", showAll: "View complete publication list",
    education: "Education & experience", educationTitle: "A foundation in mechanics, design, and intelligent systems.", educationLabel: "Education", experienceLabel: "Experience", capabilities: "Capabilities",
    contactKicker: "Open to research and engineering collaboration", contactTitle: "Let’s turn complex engineering workflows into useful intelligence.", contactText: "I am interested in surrogate models, engineering agents, generative design, and applied AI for science.", contactButton: "Email Chonghui", footer: "Built as a living research portfolio.", backToTop: "Back to top ↑",
    portraitAlt: "Chonghui Zhang in the mountains", primaryNav: "Primary navigation", profileLabel: "Research coordinates", skip: "Skip to content"
  },
  zh: {
    portfolio: "研究作品集", nav: ["研究方向", "专业项目", "学术成果", "经历"],
    eyebrow: "机械工程 × 科学机器学习", name: "张崇辉", role: "面向工程设计，构建可用的学习系统。", intro: "机械工程与人工智能研究者，关注代理模型、生成式设计、图机器学习与智能体驱动的工程工作流。",
    explore: "查看代表项目", email: "与我联系", coordinates: "研究坐标", degree: "机械工程博士", university: "麦吉尔大学 · 2025",
    researchLabel: "研究方向", researchTitle: "将昂贵仿真转化为快速、可微分的设计智能。", researchText: "连接机械建模与机器学习，用更少的仿真完成结构生成、非线性场预测与设计决策优化。",
    themes: [["01", "工程生成式设计", "面向负泊松比超材料与桁架结构的可控逆向设计。"], ["02", "预测代理模型", "面向应力、应变和非线性形变的图与网格预测模型。"], ["03", "工程智能", "科学机器学习、知识迁移与面向工程工作流的大语言模型。"]],
    selected: "代表项目", selectedTitle: "把力学问题重新组织为学习系统。", contribution: "主要贡献", methods: "关键方法",
    publications: "学术成果", publicationsTitle: "代表性研究产出", publicationsIntro: "研究覆盖机械超材料、软体机器人、生成模型与工程设计。", showAll: "查看完整成果列表",
    education: "教育与经历", educationTitle: "以力学、设计与智能系统为基础。", educationLabel: "教育经历", experienceLabel: "工作经历", capabilities: "专业能力",
    contactKicker: "期待研究与工程合作", contactTitle: "让复杂工程流程转化为真正可用的智能。", contactText: "我关注代理模型、工程智能体、生成式设计及 AI for Science 的实际应用。", contactButton: "发送邮件", footer: "一个持续生长的研究与工程作品集。", backToTop: "返回顶部 ↑",
    portraitAlt: "张崇辉在山间的照片", primaryNav: "主导航", profileLabel: "研究坐标", skip: "跳转到主要内容"
  }
};

const anchors = ["#research", "#projects", "#publications", "#experience"];
const localize = (value, language) => value[language];
const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);

function render(language) {
  const c = copy[language];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-copy]").forEach(node => { node.textContent = c[node.dataset.copy]; });
  document.querySelector(".skip-link").textContent = c.skip;
  document.querySelector("nav").setAttribute("aria-label", c.primaryNav);
  document.querySelector("#profile-panel").setAttribute("aria-label", c.profileLabel);
  document.querySelector("#portrait").alt = c.portraitAlt;
  document.querySelector("#primary-nav").innerHTML = c.nav.map((label, index) => `<a href="${anchors[index]}">${escapeHtml(label)}</a>`).join("");
  document.querySelector("#research-grid").innerHTML = c.themes.map(([number, title, description]) => `<article><span>${number}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></article>`).join("");
  document.querySelector("#project-list").innerHTML = projects.map((project, index) => `<article class="project-card"><div class="project-visual visual-${(index % 3) + 1}" aria-hidden="true"><span class="project-number">${String(index + 1).padStart(2, "0")}</span><div class="visual-grid"></div><div class="visual-orbit"></div><p>${escapeHtml(project.code)}</p></div><div class="project-copy"><p class="project-period">${escapeHtml(project.period)}</p><h3>${escapeHtml(localize(project.title, language))}</h3><p class="project-summary">${escapeHtml(localize(project.summary, language))}</p><div class="project-detail"><div><span>${c.contribution}</span><p>${escapeHtml(localize(project.contribution, language))}</p></div><div><span>${c.methods}</span><p>${project.methods.map(escapeHtml).join(" · ")}</p></div></div></div></article>`).join("");
  const publicationMarkup = (items, offset = 0) => items.map((publication, index) => `<article><span>${String(index + offset + 1).padStart(2, "0")}</span><div><h3>${escapeHtml(publication.title)}</h3><p>${escapeHtml(publication.authors)}</p></div><div class="publication-meta"><strong>${escapeHtml(publication.year)}</strong><span>${escapeHtml(publication.venue)}</span></div></article>`).join("");
  document.querySelector("#featured-publications").innerHTML = publicationMarkup(publications.slice(0, 5));
  document.querySelector("#more-publications").innerHTML = publicationMarkup(publications.slice(5), 5);
  document.querySelector("#education-list").innerHTML = education.map(item => `<article class="timeline-item"><p>${escapeHtml(item.period)}</p><h4>${escapeHtml(localize(item.institution, language))}</h4><span>${escapeHtml(localize(item.degree, language))}</span><small>${escapeHtml(localize(item.note, language))}</small></article>`).join("");
  document.querySelector("#experience-list").innerHTML = experience.map(item => `<article class="timeline-item"><p>${escapeHtml(item.period)}</p><h4>${escapeHtml(localize(item.organization, language))}</h4><span>${escapeHtml(localize(item.role, language))}</span><small>${escapeHtml(localize(item.note, language))}</small></article>`).join("");
  document.querySelector("#skills-list").innerHTML = skillGroups.map(group => `<div><span>${escapeHtml(localize(group.label, language))}</span><p>${group.items.map(escapeHtml).join(" · ")}</p></div>`).join("");
  document.querySelectorAll("[data-language]").forEach(button => { const active = button.dataset.language === language; button.classList.toggle("active", active); button.setAttribute("aria-pressed", String(active)); });
  localStorage.setItem("portfolio-language", language);
}

document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => render(button.dataset.language)));
document.querySelector("#year").textContent = new Date().getFullYear();
render(localStorage.getItem("portfolio-language") === "zh" ? "zh" : "en");
