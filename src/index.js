import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグ生成
  const completeButon = document.createElement("button");
  completeButon.innerText = "完了";
  completeButon.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグ生成
  const deleteButon = document.createElement("button");
  deleteButon.innerText = "削除";
  deleteButon.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButon.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButon);
  div.appendChild(deleteButon);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
  // console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
