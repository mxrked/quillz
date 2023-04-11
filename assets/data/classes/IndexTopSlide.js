export default class IndexTopSlide {
  constructor(id, heading, text, bg, link) {
    this.id = id;
    this.heading = heading;
    this.text = text;
    this.bg = bg;
    this.link = link;
  }

  set setHeading(heading) {
    this.heading = heading;
  }
  set setText(text) {
    this.text = text;
  }
  set setBg(bg) {
    this.bg = bg;
  }
  set setLink(link) {
    this.link = link;
  }

  get getHeading() {
    return this.heading;
  }
  get getText() {
    return this.text;
  }
  get getBg() {
    return this.bg;
  }
  get getLink() {
    return this.link;
  }
}
