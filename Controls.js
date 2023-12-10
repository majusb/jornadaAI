export default{
    jump: new keyboardEvent( 'keyDown', {key:'Space', keyCode: 32}),
    dispatch(event) {
        document.dispatchEvent(this[event])
    }
}