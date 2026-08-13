import { projects, publications, education, experience, skillGroups } from "/assets/content.js";

const copy = {
  en: {
    skip: "Skip to content", portfolio: "Research notes", nav: ["Research", "Projects", "Publications", "About"],
    homeEyebrow: "Mechanical engineering × scientific machine learning", homeTitle: "Researching how learning systems can reshape engineering design.", homeIntro: "A growing collection of research directions, project notes, methods, and publications across generative design, surrogate modeling, and engineering intelligence.",
    enterResearch: "Enter research", browseProjects: "Browse projects →", portraitCaption: "Researcher in engineering design and scientific machine learning",
    exploreTitle: "Explore the work by section.", nowTitle: "Current questions", nowText: "How can engineering models become faster, differentiable, controllable, and useful inside real design workflows?", contact: "Start a conversation ↗",
    research: "Research", projects: "Projects", publications: "Publications", about: "About",
    portal: [["Research", "Themes, questions, and approaches", "/research/"], ["Projects", "Expandable records of systems and experiments", "/projects/"], ["Publications", "Peer-reviewed research output", "/publications/"], ["About", "Background, experience, and contact", "/about/"]],
    researchTitle: "Research directions", researchIntro: "The site is organized around evolving research questions—not a résumé timeline. Each direction can grow into its own collection of notes, experiments, and projects.",
    themes: [["01", "Generative engineering", "Controllable inverse design for mechanical structures, metamaterials, and graph-based systems.", "Generative models · Inverse design · Design control"], ["02", "Surrogate modeling", "Fast graph- and grid-based predictors for nonlinear fields, deformation, and optimization.", "GNN · U-Net · Differentiable optimization"], ["03", "Engineering intelligence", "Scientific machine learning, knowledge transfer, and language models embedded in engineering workflows.", "Scientific ML · Knowledge systems · LLM"],
    projectsTitle: "Project archive", projectsIntro: "Projects are maintained as expandable research records. Open one to see its question, contribution, and methods; future work can be added without lengthening the homepage.", openProject: "Open project", question: "Research question", contribution: "Contribution", methods: "Methods",
    publicationsTitle: "Publications", publicationsIntro: "Peer-reviewed work and selected research output, grouped as a separate reference collection.",
    aboutTitle: "About", aboutIntro: "Chonghui Zhang is a mechanical engineering researcher working across computational design, scientific machine learning, and AI-assisted engineering workflows.", education: "Education", experience: "Experience", capabilities: "Methods & tools", contactTitle: "Discuss a research question or collaboration.",
    continueWith: "Continue to", footer: "A living research archive.", language: "Language"
  },
  zh: {
    skip: "跳转到主要内容", portfolio: "研究笔记", nav: ["研究", "项目", "论文", "关于"],
    homeEyebrow: "机械工程 × 科学机器学习", homeTitle: "研究学习系统如何重塑工程设计。", homeIntro: "持续整理生成式设计、代理建模与工程智能领域的研究方向、项目记录、方法和论文。",
    enterResearch: "进入研究", browseProjects: "浏览项目 →", portraitCaption: "工程设计与科学机器学习研究者",
    exploreTitle: "按主题进入研究内容。", nowTitle: "当前关注的问题", nowText: "如何让工程模型更快速、可微、可控，并真正进入实际设计流程？", contact: "与我讨论 ↗",
    research: "研究", projects: "项目", publications: "论文", about: "关于",
    portal: [["研究", "研究主题、问题与方法", "/research/"], ["项目", "可展开的系统与实验记录", "/projects/"], ["论文", "同行评议研究成果", "/publications/"], ["关于", "研究背景、经历与联系", "/about/"]],
    researchTitle: "研究方向", researchIntro: "网站围绕持续演化的研究问题组织，而不是简历时间线。每个方向都可以逐步扩展为独立的笔记、实验与项目集合。",
    themes: [["01", "工程生成式设计", "面向机械结构、超材料与图系统的可控逆向设计。", "生成模型 · 逆向设计 · 设计控制"], ["02", "代理建模", "面向非线性场、形变与优化的快速图和网格预测模型。", "图神经网络 · U-Net · 可微优化"], ["03", "工程智能", "嵌入工程工作流的科学机器学习、知识迁移与语言模型。", "科学机器学习 · 知识系统 · 大语言模型"]],
    projectsTitle: "项目档案", projectsIntro: "项目以可展开的研究记录维护。展开后可以查看研究问题、贡献与方法，未来新增内容也不会让主页无限变长。", openProject: "展开项目", question: "研究问题", contribution: "主要贡献", methods: "方法",
    publicationsTitle: "论文", publicationsIntro: "将同行评议论文与代表性研究成果作为独立的参考集合。",
    aboutTitle: "关于", aboutIntro: "Chonghui Zhang 是机械工程研究者，研究计算设计、科学机器学习与 AI 辅助工程工作流。", education: "教育背景", experience: "研究经历", capabilities: "方法与工具", contactTitle: "讨论研究问题或合作。",
    continueWith: "继续浏览", footer: "持续生长的研究档案。", language: "语言"
  }
};

const paths = ["/research/", "/projects/", "/publications/", "/about/"];
const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
const local = (value, language) => value[language];

function render(language) {
  const c = copy[language];
  const page = document.body.dataset.page;
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-copy]").forEach(node => { node.textContent = c[node.dataset.copy]; });
  document.querySelector("[data-site-header]").innerHTML = `<a class="brand" href="/"><strong>Chonghui Zhang</strong><span>${c.portfolio}</span></a><nav aria-label="${c.portfolio}">${c.nav.map((label, index) => `<a href="${paths[index]}"${page === ["research", "projects", "publications", "about"][index] ? ' aria-current="page"' : ""}>${label}</a>`).join("")}</nav><div class="language-switch" aria-label="${c.language}"><button type="button" data-language="en"${language === "en" ? ' class="active" aria-pressed="true"' : ' aria-pressed="false"'}>EN</button><span>/</span><button type="button" data-language="zh"${language === "zh" ? ' class="active" aria-pressed="true"' : ' aria-pressed="false"'}>中</button></div>`;
  document.querySelector("[data-site-footer]").innerHTML = `<span>© ${new Date().getFullYear()} Chonghui Zhang</span><span>${c.footer}</span><a href="mailto:chonghui.zhang@mail.mcgill.ca">Email ↗</a>`;
  document.querySelector("[data-portrait]")?.setAttribute("alt", language === "zh" ? "Chonghui Zhang 在山间的照片" : "Chonghui Zhang in the mountains");

  const portal = document.querySelector("[data-portal-grid]");
  if (portal) portal.innerHTML = c.portal.map(([title, note, href], index) => `<a href="${href}"><span>0${index + 1}</span><h3>${title}</h3><p>${note}</p><b>↗</b></a>`).join("");
  const themes = document.querySelector("[data-theme-list]");
  if (themes) themes.innerHTML = c.themes.map(([number, title, text, methods]) => `<article><span>${number}</span><div><h2>${title}</h2><p>${text}</p></div><small>${methods}</small></article>`).join("");
  const projectList = document.querySelector("[data-project-list]");
  if (projectList) projectList.innerHTML = projects.map((project, index) => `<details id="${escapeHtml(project.slug)}"><summary><span>${String(index + 1).padStart(2, "0")}</span><div><small>${escapeHtml(project.code)} · ${escapeHtml(project.period)}</small><h2>${escapeHtml(local(project.title, language))}</h2></div><b><i>${c.openProject}</i> +</b></summary><div class="project-body"><div><span>${c.question}</span><p>${escapeHtml(local(project.summary, language))}</p></div><div><span>${c.contribution}</span><p>${escapeHtml(local(project.contribution, language))}</p></div><div><span>${c.methods}</span><p>${project.methods.map(escapeHtml).join(" · ")}</p></div></div></details>`).join("");
  const publicationList = document.querySelector("[data-publication-list]");
  if (publicationList) publicationList.innerHTML = publications.map((publication, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><h2>${escapeHtml(publication.title)}</h2><p>${escapeHtml(publication.authors)}</p></div><aside><strong>${escapeHtml(publication.year)}</strong><small>${escapeHtml(publication.venue)}</small></aside></article>`).join("");
  const timeline = (selector, items, orgKey, detailKey) => { const node = document.querySelector(selector); if (node) node.innerHTML = items.map(item => `<article class="timeline"><span>${escapeHtml(item.period)}</span><div><h3>${escapeHtml(local(item[orgKey], language))}</h3><p>${escapeHtml(local(item[detailKey], language))}</p><small>${escapeHtml(local(item.note, language))}</small></div></article>`).join(""); };
  timeline("[data-education-list]", education, "institution", "degree"); timeline("[data-experience-list]", experience, "organization", "role");
  const skills = document.querySelector("[data-skills-list]"); if (skills) skills.innerHTML = skillGroups.map(group => `<div><span>${escapeHtml(local(group.label, language))}</span><p>${group.items.map(escapeHtml).join(" · ")}</p></div>`).join("");
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => {
    try { localStorage.setItem("portfolio-language", button.dataset.language); } catch {}
    render(button.dataset.language);
  }));
}

let initialLanguage = "en";
try { initialLanguage = localStorage.getItem("portfolio-language") === "zh" ? "zh" : "en"; } catch {}
render(initialLanguage);
