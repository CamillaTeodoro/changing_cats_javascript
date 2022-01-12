const url = "https://thatcopy.pw/catapi/rest/";

document.getElementById("botaoMuda").addEventListener("click", function () {
  fetch(url).then(validaHTTPStatus).then(setCatImg).catch(handleRequestError);
});

const catImg = document.querySelector('[data-js="cat-img"]');

const validaHTTPStatus = (catData) => {
  if (!catData.ok) {
    //ok retorna um boolean
    throw new Error("HTTP error, status ${catData.status}");
  }
  return catData.json();
};

const setCatImg = ({ url }) => {
  catImg.setAttribute("src", url);
};

const handleRequestError = (error) => {
  console.log(error.message);
};

fetch(url).then(validaHTTPStatus).then(setCatImg).catch(handleRequestError);
