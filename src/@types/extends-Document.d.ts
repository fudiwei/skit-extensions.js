export default {};

declare global {
  interface Document {
    /**
     * 添加 CSS 样式规则。
     * @param {String} rule
     */
    insertSheetRule(rule: string): void;
  }
}
