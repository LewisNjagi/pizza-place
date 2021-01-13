var order = [];
var modal = document.getElementById("exampleModalCenter");

var btn = document.getElementById("margherita");
var ftj = document.getElementById("fajita");
var swt = document.getElementById("sweetcorn");
var pro = document.getElementById("proscuitto");
var haw = document.getElementById("hawaiian");
var diab = document.getElementById("diablo");
var quat = document.getElementById("quattro");
var ham = document.getAnimations("hamm");
var boc = document.getElementById("bocconcini");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
ftj.onclick = function () {
    modal.style.display = "block";
}
swt.onclick = function () {
    modal.style.display = "block";
}
pro.onclick = function () {
    modal.style.display = "block";
}
haw.onclick = function () {
    modal.style.display = "block";
}
diab.onclick = function () {
    modal.style.display = "block";
}
quat.onclick = function () {
    modal.style.display = "block";
}
hamm.onclick = function () {
    modal.style.display = "block";
}
boc.onclick = function () {
    modal.style.display = "block";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
$(document).ready(function () {

    var quantitiy = 0;
    $('.quantity-right-plus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        $('#quantity').val(quantity + 1);
    });
    $('.quantity-left-minus').click(function (e) {
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        if (quantity > 0) {
            $('#quantity').val(quantity - 1);
        }
    });

});

function Name(flavour, size, crust, topping, quantity, total) {
    this.pizzaFlavour = flavour;
    this.pizzaSize = size;
    this.pizzaCrust = crust;
    this.pizzaTop = topping;
    this.pizzaQuantity = quantity;
    this.pizzaTotal = total;
}
Name.prototype.pizzaty = function () {
    if (this.pizzaFlavour == 0) {
        return "Select";
    }
    if (this.pizzaFlavour == 1) {
        return "Margherita Pizza";
    }
    if (this.pizzaFlavour == 2) {
        return "Chicken Fajita";
    }
    if (this.pizzaFlavour == 3) {
        return "SWEETCORN + PESTO";
    }
    if (this.pizzaFlavour == 4) {
        return "PROSCUITTO ARUGULA";
    }
    if (this.pizzaFlavour == 5) {
        return "Hawaiian Pizza";
    }
    if (this.pizzaFlavour == 6) {
        return "STEAK DIABLO";
    }
    if (this.pizzaFlavour == 7) {
        return "QUATTRO FORMAGGI";
    }
    if (this.pizzaFlavour == 8) {
        return "Ham and Mushroom";
    }
    if (this.pizzaFlavour == 9) {
        return "BOCCONCINI CAPRESE";
    }
}
Name.prototype.pizzaN = function () {
    if (this.pizzaSize == 500) {
        return "Small";
    }
    if (this.pizzaSize == 700) {
        return "Medium";
    }
    if (this.pizzaSize == 950) {
        return "Large"
    }
    if (this.pizzaSize == 0) {
        return "Select"
    }
    if (this.pizzaSize == " ")
        return "Select"
}
Name.prototype.pizzaC = function () {
    if (this.pizzaCrust == 100) {
        return "Gluten-free"
    }
    if (this.pizzaCrust == 200) {
        return "Stuffed"
    }
    if (this.pizzaCrust == 300) {
        return "Crispy"
    }
    if (this.pizzaCrust == 0) {
        return " "
    }
}
Name.prototype.pizzaT = function () {
    if (this.pizzaTop == 230) {
        return "Mushrooms"
    }
    if (this.pizzaTop == 240) {
        return "Ham"
    }
    if (this.pizzaTop == 250) {
        return "Sliced Prime Beef"
    }
    if (this.pizzaTop == 100) {
        return "Sweet corn"
    }
    if (this.pizzaTop == 200) {
        return "chicken"
    }
    if (this.pizzaTop == 50) {
        return "Tomatoes"
    }
    if (this.pizzaTop == 60) {
        return "Onion"
    }
    if (this.pizzaTop == 40) {
        return "Red Pepper"
    }
    if (this.pizzaTop == 150) {
        return "Pineapple"
    }
    if (this.pizzaTop == 170) {
        return "Olives"
    }
    if (this.pizzaTop == 120) {
        return "Chilli"
    }
    if (this.pizzaTop == 220) {
        return "Macon"
    }
    if (this.pizzaTop == 0) {
        return " "
    }
}

$("form#modal1").submit(function (event) {
    event.preventDefault();

    var pizzaFlavour = parseInt($("#type").val());
    var pizzaSize = parseInt($("#size").val());
    var pizzaCrust = parseInt($("#crust").val());
    var pizzaTop = parseInt($("#top").val());
    var pizzaQuantity = parseInt($("#quantity").val());
    var pizzaTotal = (parseInt(pizzaSize) + parseInt(pizzaCrust) + parseInt(pizzaTop)) * parseInt(pizzaQuantity);
    var newName = new Name(pizzaFlavour, pizzaSize, pizzaCrust, pizzaTop, pizzaQuantity, pizzaTotal);

    order.push(newName);
    console.log(order);


    $("#pbutton").click(function (event) {
        event.preventDefault();
        var pizzaDeliver = parseInt($("#delivery").val());
        if (pizzaDeliver == 1) {
            $("#delivery").hide();
            $(".fee2").hide();
            $("#pbutton").hide();
            $("#chdel").hide();
            $("#dbutton").show();
        } else {
            $("#dbutton").show();
            $(".fee").show();
            $(".fee2").show();
            var dPlace = prompt("Where?");
            alert("Thank you for making you order you pizza will be to" + " " + dPlace + " " + "as soon as possible. Have a nice day.");
        }
        $(".fee").hide();
        $("#delivery").hide();
        $("#pbutton").hide();
        $("#chdel").hide();
    });

    if (newName.pizzaN() == "Select") {
        alert("Select Pizza Size");
        $("ul#list").style.display = "none";
    }
    $("#type").val(" ");
    $("#size").val("Select");
    $("#crust").val(" ");
    $("#top").val(" ");

    var totalAmount = 0;
    for (let i = 0; i < order.length; i++) {
        totalAmount += order[i].pizzaTotal;
    }

    $("ul#list").append("<li><span class='list'>" + newName.pizzaty() + "<br>" + "<strong>Size:</strong>" +
        newName.pizzaN() + " " +
        newName.pizzaSize + "<br>" + "<strong>Crust:</strong>" + newName.pizzaC() + " " + newName.pizzaCrust + "<br>" +
        "<strong>Extra toppings:</strong>" + " " +
        newName.pizzaT() + " " + newName.pizzaTop + "<br>" + "<strong>Quantity:</strong>" +
        newName.pizzaQuantity + "<br>" + "<strong>Total:</strong>" + newName.pizzaTotal + "<br>" + "<br>" + "</span></li>");


    $("#dbutton").click(function (event) {
        event.preventDefault();
        var pizzaDeliver = parseInt($("#delivery").val());
        var totaldeliver = totalAmount + 100;
        if (pizzaDeliver == 1) {
            $("#teTotal").show();
            $("p#Ttotal").prepend(totalAmount);
        }
        if (pizzaDeliver == 0) {
            $("#teTotal").show();
            $("p#Ttotal").prepend(totaldeliver);
        }
    });

    $("#delivery").show();
    $(".fee").show();
    $("#chdel").show();
    $("#pbutton").show();
});