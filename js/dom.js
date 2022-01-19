console.dir(document);
document.body.children[1].children[0].children[1].children[0].href =
  "https://www.google.com";

const linkEl = document.querySelector("#external-link");
linkEl.href = "https://yahoo.com";
