export const sysDate =  () => {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return  date+' '+time;
}
export const parseDate = (value) =>{
    const fireBaseTime = new Date(
        value.seconds * 1000 + value.nanoseconds / 1000000,
    );
    const date = fireBaseTime.toDateString();
    const atTime = fireBaseTime.toLocaleTimeString();
    return date + " " + atTime
}