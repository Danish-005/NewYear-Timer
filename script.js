let heading = document.querySelector("h1");
let para = document.querySelector("p");

let ret = setInterval(updateTimeinHtml, 1000);

function updateTimeinHtml() {
  const current_timestamp = Date.now();
  const newyear_timestamp = new Date(2025, 0, 1).getTime();
  let milli = newyear_timestamp - current_timestamp;
  let second = Math.trunc((milli / 1000) % 60);
  let minute = Math.trunc((milli / (1000 * 60)) % 60);
  let hour = Math.trunc((milli / (1000 * 60 * 60)) % 24);
  let day = Math.trunc(milli / (1000 * 60 * 60 * 24));
  let time = `${day > 0 ? day + " Days, " : ""}${
    hour > 0 ? hour + " Hours, " : ""
  }${minute > 0 ? minute + " Minutes, " : ""}${second} Second`;
  if (milli <= 0) {
    clearInterval(ret);
    time = `Happy New Year 2025`;
    para.textContent = "🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳🥳";
  }

  heading.textContent = time;
}
