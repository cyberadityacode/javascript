async function translateToHindi(text) {
  const translator = await Translator.create({
    sourceLanguage: "en",
    targetLanguage: "hi",
  });
  const translation = await translator.translate(text);
  alert(translation);
}

translateToHindi("How are you?");

const textField = document.getElementById("txtTranslate");
const buttonAction = document.getElementById("doTranslation");

buttonAction.addEventListener("click", function () {
  translateToHindi(textField.value);
});
