let showLangDropdown = false;

async function loadLang(lang) {

    let url = document.URL.replace(/\/[^\/]*$/, "").replace(/^\//, "");

    let langJson;

    await fetch(url + "/lang/" + lang + ".json").then(response => response.json()).then(json => langJson = json);

    console.log(lang)

    for(let i = 0; i < document.getElementsByClassName("translatable").length; i++) {

        let key = "";
        let value = "";
        key = document.getElementsByClassName("translatable").item(i).getAttribute("text");

        value = langJson[key];

        document.getElementsByClassName("translatable").item(i).innerText = value;

    }

    onLoad();

}

function onLoad() {

    document.getElementById("langDropDown").style.opacity = "0";

    document.getElementById("langDropDownImage").onmouseover = event => {

        showLangDropdown = true;
        onLanguageClick();

    }
    document.getElementById("langDropDownImage").onmouseleave = event => {

        showLangDropdown = false;
        onLanguageClick();

    }

    document.getElementById("langDropDown").onmouseover = event => {

        showLangDropdown = true;
        onLanguageClick();

    }
    document.getElementById("langDropDown").onmouseleave = event => {

        showLangDropdown = false;
        onLanguageClick();

    }

}

function onLanguageClick() {

    switch (showLangDropdown) {

        case true:
            document.getElementById("langDropDown").style.opacity = "1";
            document.getElementById("langDropDown").style.pointerEvents = "all";
            break;
        case false:
            document.getElementById("langDropDown").style.opacity = "0";
            document.getElementById("langDropDown").style.pointerEvents = "none";
            break;

    }

}

async function french() {
    document.getElementById("langDropDown").style.opacity = "0";
    document.getElementById("langDropDown").style.pointerEvents = "none";
    await loadLang("fr_FR")
}

async function german() {
    document.getElementById("langDropDown").style.opacity = "0";
    document.getElementById("langDropDown").style.pointerEvents = "none";
    await loadLang("de_DE")
}

function fr_FR() {
    return "fr_FR";
}