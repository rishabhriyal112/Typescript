interface data {
    name : string;
    price : number;
    isSpecial?: boolean;
}

function Detail({name, price, isSpecial=false}:data) {
  return (
    <div>
        <article>
            <h2>{name} {isSpecial && <span>$</span>} </h2>
            <p>{price}</p>
        </article>
    </div>
  )
}

export default Detail
