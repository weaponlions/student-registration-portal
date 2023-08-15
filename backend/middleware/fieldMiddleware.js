
export const isRequired = (data, arr) => { 
    let user_data = {}
    arr.forEach((e) => {
        if (!data[e] || data[e] == '') {
            throw Error(`${e} field is required`)
        }else{
            user_data[e] = data[e];
        }
    });
    return user_data;
}