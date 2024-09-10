let proc = Bun.spawn(["tar", "czf", "build.tar", "build"]);
await proc.exited;

const tar = Bun.file("./build.tar");
const formData = new FormData();

console.log(tar);
formData.append("upload", tar);

let res = await fetch(
  "http://213.171.8.187:3000/client-86870e43-b545-4159-bcde-77b8934d6088",
  {
    method: "POST",
    body: formData,
  }
);
res = await res.text();
console.log(res);
