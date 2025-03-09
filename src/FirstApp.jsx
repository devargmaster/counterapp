import {HelloWorld} from "./HelloWorld.jsx";

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
           <p> <HelloWorld/></p>
       </>
    );
}