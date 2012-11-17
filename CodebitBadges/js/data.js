/// <reference path="//Microsoft.WinJS.1.0/js/base.js" />
(function () {
    "use strict";

    var badges = new WinJS.Binding.List();

    //badges.push({ title: "It's over 9000", usercount: 41 });
    //badges.push({ title: "Eu vi um SAPO", usercount: 22 });
    //badges.push({ title: "Game Over", usercount: 78 });

    var apiUrl = "https://services.sapo.pt/Codebits/listbadges";

    WinJS.xhr({ url: apiUrl }).then(function (xhr) {

        var items = JSON.parse(xhr.responseText);

        items.forEach(function (item) {
            badges.push(item);
        });
    });

    WinJS.Namespace.define("Data", {
        allBadges: badges
    });

})();
