export const showPostService = async (id) => 
    await fetch(`/api/dataentities/RE/documents/${id}?_fields=name,directions,image,ingredients,obs,servings,timeprep`).then(res=>res.json());