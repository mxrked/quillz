export default class TypeCategory {
  constructor(id, name, bg, link) {
    this.id = id;
    this.name = name;
    this.bg = bg;
    this.link = link;
  }

  set setId(id) {
    this.id = id;
  }
  set setName(name) {
    this.name = name;
  }
  set setBg(bg) {
    this.bg = bg;
  }
  set setLink(link) {
    this.link = link;
  }

  get getId() {
    return this.id;
  }
  get getName() {
    return this.name;
  }
  get getBg() {
    return this.bg;
  }
  get getLink() {
    return this.link;
  }
}
