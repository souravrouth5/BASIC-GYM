

export function MoveToTop(){

    return(
        <>
            <div className="MoveToTop" style={{cursor: 'pointer'}} onClick={() => window.scrollTo(0,0)}>
                {/* &#581;
                &#581; */}
                {/* <i class="fa-solid fa-angles-up fa-bounce" style={{color: "#ff000d", fontSize: '40px'}}></i> */}
            </div>
        </>
    )
}