 class Features {
     constructor(query, queryStr){
         this.query = query;
         this.queryStr =queryStr;

     }

     Search(){
         const keyWord = this.queryStr.keyword ? { name: { $regex: this.queryStr.keyword, $options: "i"}}: {};
         this.query = this.query.find({...keyWord});
         return this;

     }
     filter(){
        var temp = {...this.queryStr};
        const key = ["keyword","page", "limit"];
        //console.log(temp);
        key.forEach(item=> delete temp[item]);
        let qstr =JSON.stringify(temp);
        qstr.replace(/\b(gt|gte|lt|lte)\b/g,key=>`$${key}`);
        temp = JSON.parse(qstr);
        this.query = this.query.find(temp);
        return this;
     }
// issue in pagination needs to be fixed 

     pagination(ResultperPage){
        
        const currentPage = Number(this.querystr.page);
        //console.log(currentPage);
        const skip = ResultperPage *(currentPage-1);
        this.query = this.query.limit(ResultperPage).skip(skip);
        return this;
     }


 }

 module.exports = Features;