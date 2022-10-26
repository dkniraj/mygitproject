const mongoose=require(`mongoose`);

const bookSchema=new mongoose.Schema( {
    bookName:life of pi,
    authorName:chetan bhagat,
    category:Drama,
    year:2014
}, {timestamps: true});

module.exports=mongoose.model('Book', bookSchema)

