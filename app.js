(function(){
'use strict';
angular.module('ShoppingContainer',[])
.controller('ToBuyController',BuyController)
.controller('BoughtController',BoughtController)
.factory('ShoppingFactory',ShoppingFactory);

BuyController.$inject=['ShoppingFactory'];

function BuyController(ShoppingFactory)
{
var list=this;
list.Item='';
list.quantity='';
list.Items=ShoppingFactory.getItems();

list.addItem=function(){
    
ShoppingFactory.addItem(list.Item,list.quantity);
};
list.removeItem=function(itemIndex){
ShoppingFactory.removeItem(itemIndex);
};
}
BoughtController.$inject=['ShoppingFactory'];
function BoughtController(ShoppingFactory)
{
    var list2=this;
    list2.Items=ShoppingFactory.getItems2();
}


function ShoppingFactory(){
    var factory= {};
    var list=this;
     var Items=[{
         item:"Cookies",
         quantity:"10"
     },
     {
         item:"Chips",
         quantity:"10"
     },
     {
         item:"Bananas",
         quantity:"10"
     },
     {
         item:"Eggs",
         quantity:"10"
     },
     {
         item:"Snacks",
         quantity:"10"
     },];
     var Items2=[];
    factory.getItems=function(){
        return Items;
    };

    factory.getItems2=function(){
        return Items2;
    };

    factory.addItem=function(listItem,listQuantity){        
        var item={
            item:listItem,
            quantity:listQuantity
        };
        Items.push(item);      
    }

    factory.removeItem=function(index)
    {   
        Items2.push(Items[index]);
        Items.splice(index,1);
        
    };
    return factory;
}

})();