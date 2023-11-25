module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',    // 编译相关的修改，例如发布版本，对项目构建或者依赖的改动
        'feat',     // 新功能（feature）
        'fix',      // 修复 bug
        'update',   // 更新某功能
        'refactor', // 重构
        'docs',     // 文档
        'chore',    // 构建过程或者辅助工具的变动，如增加依赖库等
        'style',    // 不影响代码运行的变动
        'revert',   // 撤销 commit，回滚到上一个版本
        'perf',     // 性能优化
        'test',     // 测试（单元，集成测试）
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 74],
  },
}
