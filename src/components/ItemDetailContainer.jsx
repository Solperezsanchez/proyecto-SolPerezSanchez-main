import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./config/firebase";

import LlamadaFirebase from "./llamadaFirebase/LlamadaFirebase";

const ItemDetailContainer = () => {

    const  [item, setItem ] = useState(null);
    const  id = useParams().id;



    useEffect(() => {

      const docRef = doc(db, "productos", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id }
          );
        })
    }, [id])
    

  return (
    <div>
        {item && <ItemDetail item={item} />}
        <LlamadaFirebase/>
    </div>
  )
}

export default ItemDetailContainer
