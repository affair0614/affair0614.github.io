export const projects = [
  {
    slug: "controllable-structure-generation", code: "GEN / 2D", period: "2023 — 2024",
    title: { en: "Controllable image-based structure generation", zh: "基于图像生成式人工智能的可调结构生成" },
    summary: { en: "A hybrid generative system that produces 2D mechanical structures satisfying target properties and designer preferences.", zh: "生成同时满足目标机械性能与设计师结构偏好的二维机械结构，并提升生成结果的可控性与保真度。" },
    contribution: { en: "Proposed the CVAE–DDPM architecture, guidance-mask interaction, ensemble labeling strategy, and an A*-based path generation method.", zh: "提出 CVAE–DDPM 混合架构、指导掩码交互、集成学习标注策略及基于 A* 的结构生成方法。" },
    methods: ["CVAE", "DDPM", "Ensemble learning", "A*"],
  },
  {
    slug: "stress-field-surrogate", code: "SUR / FEA", period: "2023 — 2024",
    title: { en: "Stress-field prediction and optimization with surrogate models", zh: "基于代理模型的应力场预测与结构优化" },
    summary: { en: "A graph-enhanced convolutional surrogate for mesh-level stress and strain prediction in place of costly nonlinear finite-element simulations.", zh: "用图神经网络增强的卷积代理模型替代昂贵的非线性有限元仿真，实现网格级应力与应变场预测。" },
    contribution: { en: "Integrated U-Net, GraphSAGE, and SE-ResNet; introduced geometric deformation loss, LoRA transfer, and RBF contour optimization.", zh: "融合 U-Net、GraphSAGE 与 SE-ResNet，并引入几何变形损失、LoRA 迁移和 RBF 轮廓优化。" },
    methods: ["GNN", "U-Net", "GraphSAGE", "LoRA", "RBF"],
  },
  {
    slug: "soft-robot-differentiable", code: "ROB / DIFF", period: "2022 — 2023",
    title: { en: "Differentiable surrogate models for soft-robot design", zh: "面向软体机器人设计与轨迹优化的可微代理模型" },
    summary: { en: "A differentiable prediction pipeline for jointly optimizing the structure and trajectory of pneumatic soft robots.", zh: "构建可微预测流程，对气压软体机器人的结构与运动轨迹进行联合优化。" },
    contribution: { en: "Developed a re-entrant-cuff robot and used U-Net and MeshGraphNet surrogates to replace repeated finite-element analyses.", zh: "开发带再入袖口的气压软体机器人，并用 U-Net 与 MeshGraphNet 代理模型替代重复有限元分析。" },
    methods: ["MeshGraphNet", "U-Net", "Differentiable optimization"],
  },
  {
    slug: "truss-graph-generation", code: "GNN / TRUSS", period: "2024",
    title: { en: "Graph-based prediction and generation of truss structures", zh: "基于图神经网络的桁架结构预测与生成" },
    summary: { en: "A spatially aware graph-learning framework for nonlinear truss deformation and adjustable-complexity structure generation.", zh: "面向桁架非线性形变预测与可调复杂度结构生成的空间感知图学习框架。" },
    contribution: { en: "Proposed SA-GNN to reduce overfitting and data demand, together with a conditional graph variational autoencoder for generation.", zh: "提出 SA-GNN 以降低过拟合和数据需求，并使用条件图变分自编码器生成结构。" },
    methods: ["SA-GNN", "CGVAE", "Nonlinear mechanics"],
  },
  {
    slug: "parametric-auxetic-design", code: "INV / MDN", period: "2020 — 2021",
    title: { en: "Generative inverse design of auxetic metamaterials", zh: "负泊松比超材料的生成式逆向设计" },
    summary: { en: "An inverse-design framework that generates diverse parametric structures for target stiffness, stress, and relative density.", zh: "根据目标刚度、最大应力和相对密度，生成多样化参数结构的逆向设计框架。" },
    contribution: { en: "Combined a mixture-density generative model with an MLP surrogate to automate design generation and reduce computational cost.", zh: "将混合密度生成模型与 MLP 代理模型结合，实现设计自动生成并降低计算成本。" },
    methods: ["MDN", "MLP", "Inverse design", "Abaqus"],
  },
  {
    slug: "llm-engineering-education", code: "LLM / CAD", period: "2023 — 2024",
    title: { en: "Large language models in engineering design education", zh: "大语言模型在工程设计教育中的应用" },
    summary: { en: "An investigation of how language models affect concept generation and detailed CAD modeling in engineering education.", zh: "从概念生成与详细 CAD 建模两个层面研究大语言模型对工程设计教育的影响。" },
    contribution: { en: "Designed a progressive prompting approach to improve the reliability of LLM responses in engineering-design contexts.", zh: "设计渐进式提示方法，提高大语言模型在工程设计任务中的回答可靠性。" },
    methods: ["LLM", "Progressive prompting", "CAD", "Design education"],
  },
];

export const publications = [
  { year: "2025", venue: "CMAME", title: "A hybrid deep learning approach for the design of 2D auxetic metamaterials", authors: "C. Zhang, Y. F. Zhao" },
  { year: "2025", venue: "JCISE", title: "Understanding the impact of applying large language models in engineering design education", authors: "C. Zhang, Y. F. Zhao, R. El Haddad" },
  { year: "2024", venue: "Journal of Physics: Materials", title: "A critical review on machine learning in supporting auxetic metamaterial design", authors: "C. Zhang, Y. F. Zhao" },
  { year: "2024", venue: "ICTAM", title: "Graph-based machine learning in the design of lattice-based auxetic metamaterials", authors: "C. Zhang, Y. F. Zhao" },
  { year: "2024", venue: "JCISE", title: "Fairness- and uncertainty-aware data generation for data-driven design based on active learning", authors: "J. Xie, C. Zhang, L. Sun, Y. F. Zhao" },
  { year: "2024", venue: "ICTAM", title: "Composite material microstructure reconstruction using denoising diffusion models", authors: "A. Ridard, C. Zhang, Y. F. Zhao" },
  { year: "2023", venue: "EAAI", title: "A hybrid deep learning approach for the design of 2D low-porosity auxetic metamaterials", authors: "C. Zhang, J. Xie, A. Shanian, et al." },
  { year: "2023", venue: "Mechanics of Materials", title: "Variant design generation and machine learning-aided deformation prediction for auxetic metamaterials", authors: "C. Zhang, A. Ridard, M. Kibsey, et al." },
  { year: "2023", venue: "IEEE RoboSoft", title: "Differentiable surrogate models for design and trajectory optimization of auxetic soft robots", authors: "C. Zhang, A. Sedal, Y. F. Zhao" },
  { year: "2023", venue: "IJPR", title: "A sequential cross-product knowledge accumulation, extraction and transfer framework for ML-based production process modelling", authors: "J. Xie, C. Zhang, M. Sage, et al." },
  { year: "2019", venue: "IEEE CAC", title: "Feed-forward decoupling control of a solvent-based post-combustion CO₂ capture system", authors: "X. Chen, S. Shen, C. Zhang, et al." },
  { year: "2024", venue: "CN Patent", title: "Hierarchical button-cell pressing device · CN109524680A", authors: "C. Zhang, Z. Lü, Y. Chen, et al." },
];

export const education = [
  { period: "2020 — 2025", institution: { en: "McGill University", zh: "麦吉尔大学" }, degree: { en: "PhD, Mechanical Engineering", zh: "机械工程博士（硕博连读）" }, note: { en: "Dissertation: Machine Learning-Aided Design of Auxetic Metamaterials", zh: "博士课题：机器学习辅助的负泊松比超材料设计" } },
  { period: "2016 — 2020", institution: { en: "Southeast University", zh: "东南大学" }, degree: { en: "BEng, Energy and Power Engineering", zh: "能源与动力工程学士" }, note: { en: "Engineering fundamentals, design, and computation", zh: "工程基础、设计与计算" } },
];

export const experience = [
  { period: "2020 — 2025", organization: { en: "McGill University", zh: "麦吉尔大学" }, role: { en: "Doctoral researcher · Advanced Design & Manufacturing Lab", zh: "博士研究员 · 先进设计与制造实验室" }, note: { en: "Supervised by Prof. Yaoyao Fiona Zhao · Research sponsored by Siemens Energy", zh: "导师：Prof. Yaoyao Fiona Zhao · 研究获西门子能源支持" } },
  { period: "2021 — 2023", organization: { en: "McGill University", zh: "麦吉尔大学" }, role: { en: "Teaching Assistant · Mechanical Design Graphics", zh: "助教 · 机械工程设计制图" }, note: { en: "MECH 290", zh: "MECH 290" } },
  { period: "2018", organization: { en: "NIO Inc.", zh: "蔚来汽车" }, role: { en: "Intern · Advanced Intelligent Systems", zh: "实习生 · 先进智能系统部门" }, note: { en: "Shanghai, China", zh: "中国上海" } },
];

export const skillGroups = [
  { label: { en: "Programming", zh: "编程" }, items: ["Python", "PyTorch", "PyG", "TensorFlow", "OpenCV", "C++"] },
  { label: { en: "Machine learning", zh: "机器学习" }, items: ["GNN", "CNN", "VAE", "GAN", "Diffusion", "Active learning", "Knowledge graphs"] },
  { label: { en: "Engineering", zh: "工程软件" }, items: ["Abaqus", "Ansys Fluent", "SolidWorks", "MATLAB", "FreeCAD"] },
];
