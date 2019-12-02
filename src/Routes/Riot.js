const downloadTextFile = (text, name) => {
  const a = document.createElement("a");
  const type = name.split(".").pop();
  a.href = URL.createObjectURL(
    new Blob([text], { type: `text/${type === "txt" ? "plain" : type}` })
  );
  a.download = name;
  a.click();
};

downloadTextFile("7eff6721-5aa3-46e4-b4bf-b9a7088fbdc3", "riot.txt");

export default () => "hello";
