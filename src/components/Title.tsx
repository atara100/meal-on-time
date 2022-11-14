interface Props{
    titleContent:string;
}

function Title({titleContent}:Props) {
    return ( 
        <h2 className="text-center">{titleContent}</h2>
     );
}

export default Title;