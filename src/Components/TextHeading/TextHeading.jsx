

const TextHeading = ({heading, subHeding}) => {
    return (
        <div className="mx-auto  md:w-3/12 text-center my-5">
            <p className="text-yellow-600 mb-2">---{subHeding}---</p>
            <h2 className="text-4xl border-y py-2">{heading}</h2>
        </div>
    );
};

export default TextHeading;