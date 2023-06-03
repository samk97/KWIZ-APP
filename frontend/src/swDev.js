export default function swDev(){
    let swUrl = `${process.env.REACT_APP_FPURL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((res)=>{
        console.log("response",res);
    })
}