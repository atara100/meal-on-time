interface Props{
    titleContent:string;
}

function Title({titleContent}:Props) {
    return ( 
        <h2 className="text-center mt-4">{titleContent}</h2>
     );
}

export default Title;