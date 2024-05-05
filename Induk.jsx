import Siswa from "../Component/Siswa";
import Button from "../Component/Button";

function Induk() {
    const biodata = {kondisi:"sehat", nama:"Elsa"};
    function handleClick(){
        alert("Siswa telah terdaftar")
    }
    return ( 
        <>
            <div>
                <Siswa data={biodata} />
                <Button onClick={handleClick} />
            </div>
        </>
     );
}

export default Induk;