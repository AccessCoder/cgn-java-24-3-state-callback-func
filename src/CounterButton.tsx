type CounterButtonProps = {
    setValue:() => void
}
export default function CounterButton(props:Readonly<CounterButtonProps>){

    return(
        <>
            <button onClick={() => props.setValue()}>click me!</button>
        </>
    )

}