import {HelloWorld} from "./HelloWorld.jsx";
import PropTypes from "prop-types";

const GetMessage = () => {
    return JSON.stringify(newMessage);
}
const newMessage = {
    name :'Walter White',
    title: 'Teacher'
};
export const FirstApp = ({title, subtitle,name}) => {

    return (
       <>
           <h1 data-testid="test-title">{title}</h1>
           <p>{subtitle}</p>
           <p> {name}</p>
       </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    name: PropTypes.string
}

FirstApp.defaultProps = {
    title: 'Hello World',
    subtitle: 'This is a subtitle',
    name: 'Walter White'
}