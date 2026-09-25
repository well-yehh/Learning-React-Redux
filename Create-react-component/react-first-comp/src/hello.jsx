function Hello(){
    var myName = 'Prashant';
    let fullName = () =>{
        return 'Gaurabh'
    }
    let number = 1;

    return <h3>MessageNo:{number}   Hello this is {myName} speaking and {fullName()}</h3>;
}
export default Hello;