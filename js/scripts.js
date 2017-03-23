/* globals $ */
var book1 = {
    "id": 1,
    "name": "The Lion, The Witch, and the Wardrobe",
    "author": "C. S. Lewis",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var book2 = {
    "id": 2,
    "name": "The Lion, The Witch, and the Wardrobe",
    "author": "C. S. Lewis",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var book3 = {
    "id": 3,
    "name": "The Lion, The Witch, and the Wardrobe",
    "author": "C. S. Lewis",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var book4 = {
    "id": 4,
    "name": "The Lion, The Witch, and the Wardrobe",
    "author": "C. S. Lewis",
    "picture_url": "images/the-lion-the-witch-and-the-wardrobe.jpg",
    "price": 50,
    "selling_points": [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ip`sum dolor sit amet, consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    ]
};

var generateItem = function generateItem( product ){
    $( "#book" + product.id + " h1" ).text( product.name );
    $( "#book" + product.id + " h2" ).text( product.author );
    $( "#book" + product.id + " img" ).attr( "src", product.picture_url );
    $( "#book" + product.id + " h3" ).text( product.price );
    $( "#book" + product.id + " ul" ).text( product.selling_points );
    $( "#book" + product.id + " span" ).text( product.id );
};

generateItem( book1 );
generateItem( book2 );
generateItem( book3 );
generateItem( book4 );
