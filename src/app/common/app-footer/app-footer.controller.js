export default class AppFooterController {
  static bindings = {};

  constructor() {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }
}
