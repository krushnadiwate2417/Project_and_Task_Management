

export const fetchFunction = async ({crudMethod,fetchingUrl,data,setError})=>{
    try {
        const response = await fetch(fetchingUrl,{
            method : crudMethod,
            headers : {
                'Content-Type': "application/json"
            },
            ...( (crudMethod === 'POST' || crudMethod === 'PATCH') && {
                body: JSON.stringify(data)
            })
        })
        const result = await response.json();
        console.log(result);
        if(!response.ok) return setError(result.message);
        return result;
    } catch (error) {
        setError(error.message);
    }
}