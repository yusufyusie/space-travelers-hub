import { fetchDragons, addBook } from "../../redux/dragon/dragonSlice"
import { useDispatch } from 'react-redux';

export default function DrgaonList(){

const dispatch = useDispatch();
    return (
        <>
        <img src = "" alt = ""/>
        <div>Name</div>
        <div>Type</div>
        <button type="button"onClick={()=>dispatch(fetchDragons())}>Reserve Dragon</button>
        </>
    )
}