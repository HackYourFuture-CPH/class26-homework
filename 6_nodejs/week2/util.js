const documents = require("./document.json");

exports.filterByQueryParam = (queryParam) =>{
    return documents.filter(doc =>
        doc.name?.includes(queryParam) 
        || doc.description?.includes(queryParam) 
        || doc.value?.includes(queryParam) 
        || doc.price?.includes(queryParam) 
        || doc.id == queryParam
    );
}

exports.filterByFields = (fields) => {
    const fieldNames = Object.keys(fields);

    // return documents.filter(doc => {
    //     return fieldNames.every(fieldName => {
    //         if(doc[fieldName]){
    //            switch(fieldName){
    //                case 'id':
    //                 return doc[fieldName] == fields[fieldName];
    //                default:
    //                 return doc[fieldName].includes(fields[fieldName]);
    //            }
    //         }
    //     })
    // })

    return documents.filter(doc => {
       let allFieldsMatch = true

       for(const fieldName of fieldNames){
        if(doc[fieldName]) {
            switch (fieldName) {
                case 'id':
                    allFieldsMatch = doc[fieldName] == fields[fieldName];
                    break;
                default:
                    allFieldsMatch = doc[fieldName].includes(fields[fieldName]);
                    break;
            }
        } else {
            allFieldsMatch = false;
        }

        if(!allFieldsMatch){
            return false;
        }
       }

       return allFieldsMatch
    })
}
