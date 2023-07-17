export const listPostService = async () => 
    await fetch('/api/dataentities/RE/search?_fields=id,name,urllink,thumb&_sort=createdIn DESC').then(res=>res.json());