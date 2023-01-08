var section = document.querySelector('section');

// 1 MDN에서 제공한 json데이터를 fetch api를 이용해서 가져온다.
fetch(
    "./cve2019.json"
).then(function(response) {
    return response.json();
}).then(function (json) {
    // 2 가져온 JSON데이터를 출력한다.
    console.log(JSON.stringify(json));

    // 3 가져온 JSON데이터를 HTML에 출력한다.
    showHeroes(json);

}).catch(function(error) {
    console.log(error);
});
 
// 3 가져온 JSON데이터를 HTML에 출력한다.
function showHeroes(jsonObj) {
    var heroes = jsonObj['members'];

    for (var i = 0; i < heroes.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';

        var superPowers = heroes[i].powers;
        for (var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
}

