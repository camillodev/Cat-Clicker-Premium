$(function(){
    var model = {
        currentCat: null,
        cats : [
            {
                url:'img/cat_picture1.jpg'
                ,name:'Cat One'
                , clickCount: 0
            }
            ,{
                url:'img/cat_picture2.jpeg'
                ,name:'Cat Two'
                , clickCount: 0
            }
            ,{
                url:'img/cat_picture3.jpeg'
                ,name:'Cat Three'
                , clickCount: 0
            }
            ,{
                url:'img/cat_picture4.jpeg'
                ,name:'Cat Four'
                , clickCount: 0
            }
            ,{
                url:'img/cat_picture5.jpeg'
                ,name:'Cat Five'
                , clickCount: 0
            }
        ]
       
           
    };
    var controller = {
        init: function(){ 
            model.currentCat = model.cats[0];          
            catListView.init();
            catDetailView.init(0);
        }
        ,getCurrentCat: function(){
            return model.currentCat;
        }
         , getAllCats: function(){
            return model.cats;
        }
        , getCat: function(indice){
            return model.cats[indice];
        }
        , setCurrentCat: function(cat){
            model.currentCat = cat;
        }
         , incrementCounter: function(){
            model.currentCat.clickCount++;
            catDetailView.render();
        }    
    };

    var catListView ={
        init: function(){
            this.catlist = $("#catlist");
            
            catListView.render();
        }
        , render:function(){
            var count = 0;
            controller.getAllCats().forEach(function(cat){                
                var htmlStr = "";
                htmlStr += "<button id='button"+ count +"' class='btn card'>"
                            + cat.name + "</button>";
                catListView.catlist.append(htmlStr);
                var element = $("#button"+count).click(function(){
                    controller.setCurrentCat(cat);
                    catDetailView.render();
                });
                count++;
            });
        }
    };

    var catDetailView = {
        init: function(cat){
            this.catDetail = $("#catDetail");
            this.catDetail.click(function(){
                controller.incrementCounter();
            });

            this.render();
        }
        , render: function(){
            var htmlStr = "";
            var cat = controller.getCurrentCat();
            htmlStr += "<img class='img' src='"+ cat.url + "'><br/>"
                        + "<span class='name'>" + cat.name + "</span><br/>"
                        + "<span class='counter'>"+ cat.clickCount + "</span> clicks";
            this.catDetail.html(htmlStr);
        }
    }
    controller.init();
});