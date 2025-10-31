import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '概览',
      link: {
        type: 'generated-index',
        title: '平台概览',
        description: '了解 TianGong LCA 的定位、核心价值以及相关的资源与支持。',
      },
      items: ['intro', 'resources-and-support'],
    },
    {
      type: 'category',
      label: '快速开始',
      link: {
        type: 'generated-index',
        title: '快速开始',
        description: '完成注册、首次登录与核心操作演示，快速熟悉平台。',
      },
      items: ['quick-start/first-login', 'quick-start/demonstrations'],
    },
    {
      type: 'category',
      label: '用户指南',
      link: {
        type: 'generated-index',
        title: '用户指南',
        description: '深入了解平台按键说明、数据管理与协作功能的使用方式。',
      },
      items: [
        'user-guide/overview',
        'user-guide/key-functions-introduction',
        'user-guide/data',
        'user-guide/create-my-data',
        'user-guide/data-use',
        'user-guide/search',
        'user-guide/data-review',
        'user-guide/lcia',
        'user-guide/account-profile',
        'user-guide/team-function',
      ],
    },
    {
      type: 'category',
      label: '数据收集',
      link: {
        type: 'generated-index',
        title: '数据收集',
        description: '掌握数据收集规范，并通过案例了解建模与质量控制流程。',
      },
      items: [
        'data-collection/data-collection-instructions',
        {
          type: 'category',
          label: '案例介绍',
          link: {
            type: 'generated-index',
            title: '数据收集案例',
            description: '基于实际调研与文献的案例解析常见数据处理方法。',
          },
          items: [
            'data-collection/case-introduction/data-evaluation',
            'data-collection/case-introduction/model-building',
            'data-collection/case-introduction/unit-process-construction',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '集成与扩展',
      link: {
        type: 'generated-index',
        title: '集成与扩展',
        description: '连接 MCP 等外部工具，扩展 TianGong LCA 的工作流能力。',
      },
      items: ['MCP/lca_local', 'MCP/lca_remote', 'MCP/KB_remote'],
    },
    {
      type: 'category',
      label: '部署与开发',
      link: {
        type: 'generated-index',
        title: '部署与开发',
        description: '获取私有化部署步骤与开发环境配置指南。',
      },
      items: ['deploy/local-deploy', 'dev/dev-env'],
    },
    {
      type: 'category',
      label: '常见问题',
      link: {
        type: 'generated-index',
        title: '常见问题',
        description: '解答模型构建、数据引用、认证等常见疑问。',
      },
      items: [
        'faq/system-models',
        'faq/sources-and-citation',
        'faq/commercial-database',
        'faq/email-verification',
        'faq/explanation',
      ],
    },
    {
      type: 'category',
      label: '更新日志',
      link: {
        type: 'generated-index',
        title: '更新日志',
        description: '追踪 TianGong LCA 新功能与迭代内容。',
      },
      items: ['changelog/function-update'],
    },
  ],
};

export default sidebars;
