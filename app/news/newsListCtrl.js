(function () {
    "use strict";
    angular.module("newsView").controller("newsListCtrl", ["newsListResource", newsListCtrl]);
    function newsListCtrl(newsListResource) {
        var vm = this;
      
            newsListResource.query(function (data) {
                vm.articles = filterData(data.data);
                vm.articles
            });
             
        function filterData(data) {
            var property = "article"; 
            var d=[];
            data.items.forEach(function (item)
            {
                if (property in item)
                {
                    d.push(item); 
                }
            });
            return d;
            
            }
        
        //vm.articles = [{
        //    " id": 7932,
        //    "title": "День рождения Виктории",
        //    "text": "199 лет назад на свет появилась будущая королева Соединённого королевства Великобритании и Ирландии, а также императрица Индии — Виктория. Она унаследовала престол в 18 лет, когда в Англии король не имел никакой политической силы. Юная Виктория пыталась изменить это и влиять на решения министров. Со временем для народа она стала ни много ни мало национальным символом. В её честь утверждали государственные праздники, называли города и улицы.\r\n\r\nПодробнее о жизни королевы можно узнать в сериале «Виктория», где роль английской правительницы исполнила очаровательная Дженна Коулман. Историческая драма снята по мотивам личных дневников королевы, которые она вела на протяжении всей жизни. ",
        //    "url": "https://pic.showjet.ru/pics/cc2e377e-3c08-46cd-8f97-86aab13bb562/7x10/236.jpg"
        //}];
    }
}());