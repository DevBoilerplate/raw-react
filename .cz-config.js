module.exports = {
    types: [
        { value: ":sparkles: feat", name: "✨ feat:    新的特性" },
        { value: ":bug: fix", name: "🐛 fix:    修复bug" },
        { value: ":pencil: docs", name: "📝 docs:    更改文档" },
        {
            value: ":lipstick: ui",
            name: "💄 ui:    主题样式修改",
        },
        {
            value: ":zap: perf",
            name: "⚡️ perf:    提升性能修改",
        },
        {
            value: ":recycle: refactor",
            name: "♻️ refactor:    代码重构",
        },
        {
            value: ":art: style",
            name:
                "🎨 style:  更改代码风格, 不涉及功能的更改 (空格, 格式化代码, 等等)",
        },
        { value: ":mag: perf", name: "🔍 perf:    SEO优化" },
        {
            value: ":globe_with_meridians: localization",
            name: "🌐 localization:    本土化或国际化",
        },
        {
            value: ":page_facing_up: license",
            name: "📄 license: 新增或更新许可证",
        },
        { value: ":white_check_mark: test", name: "✅ test:    测试" },
        { value: ":hammer: build", name: "🔨 build:    新增或更新构建脚本" },
        {
            value: ":rocket: deploy",
            name: "🚀 deploy:    项目部署",
        },
        {
            value: ":package: package",
            name: "📦 package:    新增或者更新编译代码或者包",
        },
        {
            value: ":bookmark: release",
            name: "🔖 release:    发布新的版本",
        },
        {
            value: ":wrench: chore",
            name: "🔧 chore:    构建流程和辅助工具更改, 比如依赖库",
        },
        { value: ":rewind: revert", name: "⏪ revert:    回滚代码" },
        {
            value: ":construction_worker: ci",
            name: "👷 ci:    持续集成系统",
        },
    ],

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: "TICKET-",
    ticketNumberRegExp: "\\d{1,5}",

    // override the messages, defaults are as follows
    messages: {
        type: "选择你要commit的类型:\n",
        subject: "输入简短精炼的更改描述\n",
        body: '对于更改的详细描述 (可选). 使用 "|" 换行:\n',
        breaking: "列出 BREAKING CHANGES (可选):\n",
        footer: "列举更改关闭的ISSUES (可选). E.g.: #31, #34:\n",
        confirmCommit: "你确认上述的commit吗?",
    },

    allowCustomScopes: true,
    allowBreakingChanges: [":boom: feat"],
    skipQuestions: ["scope"],

    // limit subject length
    subjectLimit: 100,
    breaklineChar: "|", // It is supported for fields body and footer.
    footerPrefix: "关闭的ISSUES:",
    // askForBreakingChangeFirst : true, // default is false
}
