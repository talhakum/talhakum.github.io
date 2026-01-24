const survey = new Survey.Model(json);
survey.applyTheme(themeJson);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
survey.render(document.getElementById("surveyElement"));