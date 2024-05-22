import { Hourglass } from 'react-loader-spinner'

export function MainLoader(){

    return(
        <>
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
            />
        </>
    )
}