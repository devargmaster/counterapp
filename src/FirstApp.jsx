
const GetMessage = () => {
    return JSON.stringify(newMessage);
}
const newMessage = {
    name :'Walter White',
    title: 'Teacher'
};
export const FirstApp = () => {

    return (
       <>
           <code>{ GetMessage() }</code>
           <p> soy un texto </p>
       </>
    );
}