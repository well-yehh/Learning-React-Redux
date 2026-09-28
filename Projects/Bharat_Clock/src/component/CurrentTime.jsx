let Ctime =  () =>{
    let time = new Date();
    return <p className="lead">
        THis is the current Time: {time.toLocaleDateString()} -{" "} {time.toLocaleTimeString()}
    </p>
}
export default Ctime;